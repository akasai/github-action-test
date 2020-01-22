# Context

**github context**를 출력해본다.

Echo github context

[Document](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#job-context)

## Job

The `job context` contains information about the currently running job.

### job

`object`

This context changes for each job in a workflow run. You can access this context from any step in a job.

### job.status

`string`

The current status of the job. Possible values are `success`, `failure`, or `cancelled`.

### job.container

`object`

Information about the job's container.

### job.container.network

`string`

The id of the container network. The runner creates the network used by all containers in a job.

### job.container.id

`string`

The id of the container.

### job.services

`object`

service containers created for a job. 

### job.services.network

`string`

id of the service container network. 

## steps

The `job context` contains information about the currently running job.

### steps

`object`

This context changes for each step in a job. You can access this context from any step in a job.

### steps.<step id>.outputs	

`object`

The set of outputs defined for the step.
    
### steps.<step id>.outputs.<output name>

`string`

value of a specific output. 

## runner

The runner context contains information about the runner that is executing the current job.

### os

`string`

The operating system of the runner executing the job. Possible values are `Linux`, `Windows`, or `macOS`.

### temp

`string`

The path of the temporary directory for the runner.
    
### tool_cache

`string`

The path of the directory containing some of the preinstalled tools for GitHub-hosted runners.
