# Hello World

## name
action's name

## on
**Required** The name of the GitHub event that triggers the workflow.

[**trigger DOC**](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)

## jobs
action's job

### jobs.<job_id>
`build` is this job's ID

### jobs.build.name
`Greeting` is this job's name


### jobs.build.runs-on 
**Required** The type of machine to run the job on.

|Virtual environment|YAML workflow label|
|-------------------|-------------------|
|Windows Server 2019|windows-latest|
|Ubuntu 18.04|ubuntu-latest or ubuntu-18.04|
|Ubuntu 16.04|ubuntu-16.04|
|macOS Catalina 10.15|macos-latest|

### jobs.build.steps
A job contains a sequence of tasks.

#### jobs.build.steps.name
`Hello world` is first step's name

#### jobs.build.steps.id
A unique identifier for the step

#### jobs.build.steps.uses
Selects an action to run as part of a step in your job.

`actions/hello-world-javascript-action@v1` is [preset](https://github.com/actions/hello-world-javascript-action) of actions.

#### jobs.build.steps.with
A map of the input parameters defined by the action.

`who-to-greet` is required parameter of above preset.

value is `akasai`

#### jobs.build.steps.name
`Echo the greeting's time` is second step

#### jobs.build.steps.run
Runs command-line programs using the operating system's shell.

`echo 'The time was ${{ steps.hello.outputs.time }}.`

value of ${{}} is step `Hello world`'s result.

preset's output is `time`. 
