
>[!tip] Created: [2024-04-25 Thu 14:13]

>[!question] Targets: 

>[!danger] Depends: 

writing a file could be buffered so that multiple external commands could be done, and then a final commit occurs that pushes them all to disk.

Could be atomic and locked to the commit we read from, or could be just done bluntly.

Should the same api allow for calling actions at a distance by just wrapping an existing `<T>` and allowing it to be adorned with process options ?

Could allow the `.actions` and `.functions` api functions to optionally take process options that will be passed to all the produced items ?

What about groups of actions, so several actions come in from a remote branch, and then we want to run them all before replying ?

If we look at the commits of the incoming actions, if they came from the same commit, then we should run them all ?  This means the sender is not going to be able to run until both these things come back anyway, so we might as well wait ?
BUT that already happens, if we run the actions in any order.

Allow a base function that takes an array of requests, and makes them directly in the remote location.  This could be wrapped in an api function so it seems as tho we are calling the functions remotely, but we are in effect sending the actions over to that chain.  The first action could be the branch making one, and all the others execute in the same branch ?

The remote exec of actions code looks like:

```js
rexec: (
    { requests }: { requests: UnsequencedRequest[] },
    api: IsolateApi,
  ) => {
    // if we wrap this in the api, then all the remote options can be provided
    // in this same interface, since it can do any kind of process option
    return Promise.all(requests.map((request) => api.action(request)))
  },
```
But what we should be doing is building this in to the API so that calling these functions is as easy as calling any other isolate.

Almost like a way to can up a bunch of executions and unleash them remotely, like how KV bundles up atomic checks and actions into a single payload.

Another option is to get the isolate to call this same function but in the remote location, so I can carry on and have my code execute in the remote location maybe ?

Issue is sometimes we want to call something as a function, and other times as an action that causes a commit.
