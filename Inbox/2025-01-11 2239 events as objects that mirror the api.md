
>[!tip] Created: [2025-01-11 Sat 22:39]

>[!question] Targets: 

>[!danger] Depends: 

```ts
{
	id: 'ab897fed...',
	scope: { 
		repository 
	},
	branch: `branchName`
	
}
```

So whichever level you subscribed said how deep the object would be.

You could tune out lower objects from the event stream.

From the db side, we're only watching the full repo change, and then if that alters we drill down.

So the subscription depends on the scope it is set at, and can be drilled down or up.  The id is the hash of the event it refers to, where creation has occurred.

If deletion occured, then it is the hash of the parent scope, so the environment (which is itself a repository).