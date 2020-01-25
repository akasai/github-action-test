import * as core from '@actions/core'
import * as github from '@actions/github'
import { Configuration, Linter } from 'tslint'
import * as fs from 'fs'

const main = () => {
  console.log('### github.context', github.context)
  try {
    const fileName = './index.ts'

    const options = {
      fix: false,
      formatter: 'json',
      rulesDirectory: 'customRules/',
      formattersDirectory: 'customFormatters/'
    }

    const configFile = core.getInput('config', { required: true })
    const pattern = core.getInput('pattern', { required: true })
    const token = core.getInput('token', { required: true })
    const strict = core.getInput('strict')

    const octokit = new github.GitHub(token)

    const fileContents = fs.readFileSync(fileName, 'utf8')
    const linter = new Linter(options)
    const configuration = Configuration.findConfiguration(configFile, fileName).results

    linter.lint(fileName, fileContents, configuration)
    const result = linter.getResult()
    console.log('### result', result)
  } catch (err) {
    // setFailed logs the message and sets a failing exit code
    core.setFailed(`Action failed with error ${err}`)
  }
}

main()
