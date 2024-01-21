
>[!tip] Created: [2024-01-20 Sat 13:41]

>[!question] Targets: 

>[!danger] Depends: 

The API should look like:
```js
const { result, commit } = await artifact.engageInBand(help, text)
const { result, commit } = await artifact.engageBranch(help, text)
const { result, commit } = await artifact.engageBranch(help, text, continuation)
const file = await artifact.read('/hello.txt', commit)
```
if continuation is supplied, it will be used to continue the previous conversation and files.
If reading includes a commit, then it will not be the HEAD view.

So any process can read from any branch that it is permitted to.

OR a help file could return a path to an isolate that can be called by the goalie itself, which would be more direct ?  Can allow large data to be moved faster since the AI doesn't have to blurt it out ?

Trick of the system seems to be making the AI pass the minimum data around, and use references to data on the filesystem, rather than them having to speak things out.  Also using data that came before instead of new data each time, so expressing change, not total.