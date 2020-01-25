import * as core from '@actions/core'
import * as github from '@actions/github'
import { Configuration, Linter } from 'tslint'
import * as fs from 'fs'
import * as glob from 'glob'
import * as Octokit from '@octokit/rest'

type LEVEL = 'notice' | 'warning' | 'failure';
const main = async () => {
  const { repo: { owner, repo }, sha: head_sha } = github.context
  try {
    const configFile = core.getInput('config', { required: true })
    const pattern = core.getInput('pattern', { required: true })
    const token = core.getInput('token', { required: true })
    const strict = core.getInput('strict')

    const gitToolkit: Octokit = new github.GitHub(token)

    const fileList = glob.sync(pattern, {
      dot: true,
      ignore: ['./node_modules/**']
    })

    const linter = new Linter({ fix: false, formatter: 'json' })

    fileList.forEach((file) => {
      const inFileContents = fs.readFileSync(file, 'utf8')
      const configuration = Configuration.findConfiguration(configFile, file).results
      linter.lint(file, inFileContents, configuration)
    })

    const result = linter.getResult()
    const annotations: Octokit.ChecksCreateParamsOutputAnnotations[] = result.failures.map((failure) => {
      const level = { 'warning': 'warning', 'error': 'failure', 'off': 'notice' }[failure.getRuleSeverity()] || 'notice'
      return {
        path: failure.getFileName(),
        start_line: failure.getStartPosition().getLineAndCharacter().line,
        end_line: failure.getEndPosition().getLineAndCharacter().line,
        annotation_level: level as LEVEL,
        message: `${failure.getRuleName()}: ${failure.getFailure()}`,
      }
    })
console.log('### annotations', annotations)
    await gitToolkit.checks.create({
      owner,
      repo,
      head_sha,
      name: 'Linter',
      status: 'completed',
      conclusion: result.errorCount > 0 ? 'failure' : 'success',
      output: {
        title: 'Tslint Check Results',
        summary: `${result.errorCount} error(s), ${result.warningCount} warning(s) found`,
        annotations,
      },
    })
  } catch (err) {
    core.setFailed(`Action failed with error ${err}`)
  }
}

main()
