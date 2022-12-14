>[!tip] Created: [2022-12-12 Mon 14:46]

>[!question] Targets: 

>[!danger] Depends: 

Should be able to generate any complex when given just a chainID.  There should be no prior knowledge required to make a complex.  If there are client side functions specific to a given app, these will need to be imported by the developer, and merged in with tooling that we may make available.  

REPL access can be given via the `globalThis.interpulse` object.

`engine.streamComplex()`


### `generate( engine, chainID )`

This would wrap the whole app, passing `complex` down to its child.
```jsx
<Engine repo="interpulse-1" dev={{...covenants}} peers  >
	<Complex path="mtab/test-1" chainId="ABCDEF" engine={engine}>
		<App />
	</Complex>
</Engine>
```

DOS should be able to run as a Comlex based application.
`<Engine>` passes down the raw blockchain to its child.
? Where to put the path in the current engine ?
Must be able to declare all the config for the chain in the React component