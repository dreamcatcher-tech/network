
>[!tip] Created: [2024-06-11 Tue 15:39]

>[!question] Targets: 

>[!danger] Depends: 

Fetching the session files seems to be different for while it is running vs when it returns.

When the branch has returned, it gets deleted, so cannot be retrieved.

What we do know is the commit at the time of the fork.
We can control the pid of this branch too, as it can be strongly set without error.

If we control the pid

We could trace the pid client side by looking at the io.json file in detail ?
We have open branches, so we could just look at each of them ?

Is it true that the return of any branch request will always be executed immediately, in the commit that holds the merge in ?
No.

Can we know exactly what branch name will be created when we execute something ?

If we store a counter each time we branch, then we hard set the branch, then we can know we are collision free.

Reading the io.json in the client, we can interpret exactly what branches were formed and when.

Getting the branches back when they close is not so easy since the io.json is flushed.

So pulling down an io.json years in the future will not yield the branches without walking it backwards, which is annoying and expensive.
So if the session stored the commit that the tool call came back in on, that should be sufficient.
Branches are available in the io.json file at any time, which can be tracked while they are running, then anything that has closed and been deleted, we should save what the commit that came back was, somehow.

Since functions can return undefined, we can't easily figure out what commit it came from.
So we could make a new type of function call that returned the result as well as the meta
```js
const actions = await api.tracedActions( 'isolate-name' )
const { result, meta } = await actions.someAction()
```
Meta includes the commit that the action result came in on, which would be the merge input in our case.  The exact branch name as well.

Or, insert a symbol on the promise that gets returned ?
```js
const promise = actions.someAction()
const { result, meta } = await withMeta( promise )

// OR
const { result, meta } = await withMeta( actions.someAction() )

```

The meta data is placed on a symbol on the promise.  When it settles, the meta field will be populated. 

Meta includes:
- the commit that the reply came in on, which might be different to the current one we are running on
- might want to await for lifecycle events, like branch formed, action executed.

Make sure branches are not deleted until after the requesting action is processed, else there is a blind spot where the branch is deleted, the branch reference is deleted from io.json, but the recieving action hasn't updated any records.

Could parse the io.json file and retrieve the reply directly ?

We only need to record when the branch comes in and closes, then we would store what commit it returned upon.
Could store the commit in the reply object ?
In pendings, we have the commit that it returned on.
So we can read it straight from the iojson.
So we might do this under the hood in the accumulator ?

Write the tool call as pending when we make it ?

So the UI would watch the main branch, and then when a tool call that causes a branch occurs, the UI would start watching this new branch.  When the branch closes, the UI loads the final commit which is stored in the main branch.
Need to know what the branch id is based on tool call.  This could put an id in for tracing purposes so the branch is tagged.
Or we might be able to get the branch id out at call time somehow?

When the branch returns, we want to store the commit of the closing commit, so we can read the session file in its last state.


We could intercept the exact 'engage' action call, and know to watch this one specially ?
This is the only call that is interpretable by the UI - other operations might require specialized UI elements.

For each tool call, if it is an action that causes a branch, we can write what its branch pid was down ?

Can open up for making tool calls into vector stores, and other things.  So interpret the isolate and function call to display its progress in a unique way.
When making a branch, name it after the tool call, so we can look it up.

Store a map of tool call statuses.  When executing, we can trace its branch pid.  When completed, we can trace its most recent commit.

The tool call is unique, so we can use it as our branch name.

The issue is that not all tool calls branch, but when they do, we need to somehow signal what the branch name is.

We can just do a mapping, but it is easier to somehow tag the request ?

Want to cover the general case of a toolcall causing a branch.
Should all tool calls attach a parameter that includes the toolid ?

If we did not need to inject the branch name in, then could we track branch creation ?
Injecting the id of the branch is over constraining - we should be able to know what the branch we just created was.

We need to somehow know in the UI when a branching tool call has been made.

Should the forking be handled in executeTools and not inside the isolate ?
Then if the tool exec is in charge of branching and writing the tool maps file, we can easily track this in the UI.
Should every command run in a branch, then this becomes easy to do ?
Then each command is reduced to simple request reply.

? how should we say when to never close vs request reply ?
Creating a long running branch would be a dedicated system level command, as opposed to something at the discretion of the tool that was running.

Sending the toolid into the tool is wrong since this is an orchestration level problem, and should not be internal to the tool.

But if we do things in branch, we have to deal with merging the changes back in.
Could lock the branch from doing anything until the branch returns.
Help in a branch means we need to handle merging anyway.

BUT only branch returns should have this commit information attached ? 
If it wasn't a branch, then the commit should be undefined