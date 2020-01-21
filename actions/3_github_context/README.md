# Github Context

**github context**를 출력해본다.

Echo github context

[Document](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#github-context)

## github 

**github context**는 workflow와 이벤트에 대한 정보를 포함한다.

**The github context** contains information about the workflow run and the event that triggered the run.

## Warning 

github context는 `github.token`과 같은 **민감한 정보**를 포함하고 있다.
GitHub에서 자체적으로 마스킹을 하지만 _주의를 해야한다._

When using the whole github context, be mindful that it includes **sensitive information** such as `github.token`. 
GitHub masks secrets when they are printed to the console, 
_but you should be cautious when exporting or printing the context._

### github

`object`

workflow의 job이나 step이 동작하는 동안 사용가능한 context object.

The top-level context available during any job or step in a workflow.

### github.event

`object`

The full event webhook payload.

### github.event_path

`string`

The path to the full event webhook payload on the runner.

### github.workflow

`string`

The name of the workflow. If the workflow file doesn't specify a name, the value of this property is the full path of the workflow file in the repository.

### github.actor

`string`

The login of the user that initiated the workflow run.

### github.repository

`string`

The owner and repository name. 

### github.event_name

`string`

The name of the event that triggered the workflow run.

### github.sha

`string`

The commit SHA that triggered the workflow run.

### github.ref

`string`

The branch or tag ref that triggered the workflow run.

### github.head_ref

`string`

The `head_ref` or source branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is a `pull_request`.

### github.base_ref

`string`

The `base_ref` or target branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is a `pull_request`.

### github.token

`string`

A token to authenticate on behalf of the GitHub App installed on your repository. This is functionally equivalent to the `GITHUB_TOKEN` secret.

### github.workspace

`string`

The default working directory for steps and the default location of your repository when using the `checkout` action.

### github.action

`string`

The name of the action currently running. GitHub removes special characters or uses the name run when the current step runs a script. If you use the same action more than once in the same job, the name will include a suffix with the sequence number. For example, the first script you run will have the name `run1`, and the second script will be named `run2`. Similarly, the second invocation of `actions/checkout` will be `actionscheckout2`.
