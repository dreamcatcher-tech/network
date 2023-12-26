
>[!tip] Created: [2023-12-26 Tue 13:14]

>[!question] Targets: 

>[!danger] Depends: 

OpenAI api streams back responses a word at a time.
Going outside of chain to give these realtime results back to the app is a pain, and causes a second programming paradigm to enter.

What we should do is make a chain that runs in a transient mode, that does not cause root updates or can at least defer them until it is done, but which does cause a Crisp update so that the UI can render these changes.

So the streaming response keeps making state updates and the crisp is updated, but there is no root update made until it is finished, since it can be marked as transient.

This saves wasted blocks that get kept around forever, avoids chatter at the root, but still preserves the livliness of the application all by keeping the same programming paradigm in place.

```js
const endTransience = await useTransience()
// do some massively chatty state updates
await endTransience()
// now if the pulse is interupted, it will be persisted, and after it returns
// the state change will be hoisted up the tree
```

Might be a synchronous call, since is simply raising and lowering a runtime flag.