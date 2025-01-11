
>[!tip] Created: [2025-01-11 Sat 22:39]

>[!question] Targets: 

>[!danger] Depends: 

```ts
{
	scope: { 
		repository 
	},
	branch: `branchName`
}
```

So whichever level you subscribed said how deep the object would be.

You could tune out lower objects from the event stream.

From the db side, we're only watching the full repo change, and then if that alters we drill down.