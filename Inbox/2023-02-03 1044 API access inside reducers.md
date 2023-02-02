
>[!tip] Created: [2023-02-03 Fri 10:44]

>[!question] Targets: 

>[!danger] Depends: 

The shell commands are useful outside the reducer, but inside the reducer we want them as well.

Can the shell be loaded up inside each reducer and used as tho it was the root ?

Like a shell adapter that can wrap its actions and intercept their replies ?

```js
async request => {
	const { children } = await shell.ls('.')
	
}
```

Would wrap up the shell api using raw interchain, not the 

Shell factory `shellFact( dispatcher )`

