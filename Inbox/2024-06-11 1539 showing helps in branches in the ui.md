
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

Make sure branches are not deleted until after the requesting action is processed, else there is a blind spot where the branch is deleted, the branch reference is deleted from io.json, but the recieving action hasn't updated any records.

Could parse the 