>[!tip] Created: [2022-12-12 Mon 14:46]

>[!question] Targets: 

>[!danger] Depends: 

Should be able to generate any complex when given just a chainID.  There should be no prior knowledge required to make a complex.  If there are client side functions specific to a given app, these will need to be imported by the developer, and merged in with tooling that we may make available.  

`engine.streamComplex()`


### `generate( engine, chainID )`

This would wrap the whole app
```jsx
<Complex chainId="ABCDEF" engine={engine}>
	<App />
</Complex>
```
