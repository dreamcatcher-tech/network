
>[!tip] Created: [2024-01-21 Sun 13:41]

>[!question] Targets: 

>[!danger] Depends: 

The problem is that ai outputs are not easily tested with string equality or other assertions designed for precision responses.

So an assessment function would see if the response was like some prior response.
We could store snapshots, and check that the response is the same ?

Or, it could be given a question: "does this response list 5 files ?"
It could be chained together, so many responses can be given at once ?
```js
await assessor
	.contains('a list of 5 files')
	.contains('one file being .git')
```

Then when it calls a function to indicate its response, we can do a special toolcall that is an abort of the current thread, using a hook of some kind.

Tool can just return back wrapped parameters, where some can be to exit immediately ?

Should be able to detect when the goalie was unclear, like when confidence was low ?

Multiturn should let us then respond, but it should be something that flows with the conversation so far.
? what if we could support multiple paths at any given point, where we could fork the conversation ?

We should be able to snapshot artifact at each point, and then do these forks so we don't have to do the whole thing again up to that point, and see how well the branches to.
The branches would be running in parallel.