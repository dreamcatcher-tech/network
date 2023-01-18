
>[!tip] Created: [2023-01-18 Wed 16:32]

>[!question] Targets: 

>[!danger] Depends: 

In a UI, often we need to present some virtual view to the user, that is not part of the production app.

## Making a new Engine instance
In ram, spin up a new engine.  Export the forkpoint, import the CAR in the new point.

## Allowing transient forks as an engine feature
If I call `engine.transient('some/path')` then I should get a fork of the current path, but it gets deleted on engine shutdown.  

## Create transient engines that share the repo
Benefit is that the fork is free, as it read from the existing repo and the point of inception.
The overlay repo would be entirely in ram, so when it was unmounted, the ram is recovered.

```jsx
<TransientEngine deps={[dep1, dep2, ...]}>
	<Syncer>
		<Component />
	</Syncer>
</TransientEngine>
```

## Handling updates to the fork
If the data used to fork from updates, then the transient should gracefully update, but preserve what has been altered already.  Walk the fork, find the diff with the incoming data, refork over the top ?