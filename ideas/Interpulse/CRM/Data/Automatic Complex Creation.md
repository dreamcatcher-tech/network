
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
	<Complex path="mtab/test-1" chainId="ABCDEF">
		<App />
	</Complex>
</Engine>
```

Engine is the interface between React and the interpulse engine.
Complex is the interface between React and the interpulse models.

DOS should be able to run as a Comlex based application.
`<Engine>` passes down the raw blockchain to its child.
? Where to put the path in the current engine ?
Must be able to declare all the config for the chain in the React component
? What happened to being able to include the blockchain with each component ?
? Would storybook be able to use the same engine in a service worker, so each test component would load the same chain ?
### Dev mode
? how should switch between dev mode be handled ? env var ?
Best to use a dedicated production component that has no dev overrides, and switch to a dev version if required.  Means the dev covenants should not be bundled in the main app.
	
? Each storybook should fork some base chain, so all changes are independent and discards.

Storybook with a complex that was on a public chain somewhere would be easier since the dummy data can be removed from the storybook, and shared between many devs.  Could also storybook with live running data, and fork by default.  Lock a story to a specific snapshot, or use current.

## Spliced Complex
By making the complex separate, we can include spliced data.  Also a Complex can be inserted at any point we like.  May render inside an iFrame if we wish for isolation.

## Engine specs
1. Mount list
2. Peers list - origin is automatically a peer for all chains
3. Dev mode + overloads
4. install instructions to install an app if not present

## Complex Specs
1. Sync strategy - full, mru, depthLimit, etc