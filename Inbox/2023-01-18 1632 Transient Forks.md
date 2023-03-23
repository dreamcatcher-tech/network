
>[!tip] Created: [2023-01-18 Wed 16:32]

>[!question] Targets: 

>[!danger] Depends: 

In a UI, often we need to present some virtual view to the user, that is not part of the production app.

## Making a new Engine instance
In ram, spin up a new engine.  Export the forkpoint, import the CAR in the new point.

## Allowing transient forks as an engine feature
If I call `engine.transient('some/path')` then I should get a fork of the current path, but it gets deleted on engine shutdown.  

## Disjunct forks
If a subtree in an app is forked, and the covenant logic asks for something inside the approot but above the subtree, then it should look up the current app itself, rather than holding the stale view that was taken at the time of forking.  From fork point down is always stale, but everything above is fresh.

## Non existent transients
When a transient acts like it is a child of a chain, but is not

## Merging back into App
Eventually the transient may be transitioned into a permanent part of the main app.  When this happens we need to do a merge or a fork of the transient, then mount the fork in the main app.  The recipient of the fork would have logic that would allow it to ascertain the validity of the inserted fork.  Forks may be mounted without history if we do not want to check the history, or if we do not want to carry it around.

`@@MERGE` should allow the transient fork to be spliced into the 

## Avoiding transients
In the case of the CRM runDates, we might avoid transients altogether by simply making a real chain if a runDate is not present.  Then modifications are simply datums that get updated.

## Create transient engines that share the repo
Benefit is that the fork is free, as it read from the existing repo and the point of inception.
The overlay repo would be entirely in ram, so when it was unmounted, the ram is recovered.

```jsx
<TransientEngine deps={[dep1, dep2, ...]} exclusive>
	<Syncer>
		<Component />
	</Syncer>
</TransientEngine>
```

`exclusive` means there is only ever one transient, and if there is an existing one, use this instead of making a new one.

## Handling updates to the fork
If the data used to fork from updates, then the transient should gracefully update, but preserve what has been altered already. If a conflict is detected, then an alert should be presented to the user.  The transient engine should watch the fork point, and when it detects a change, it should rebuild itself, which would cause the app to redraw.

Walk the fork, find the diff with the incoming data, refork over the top ?

## Mounting in root
If root had a `tmp/` directory where transient forks were mounted, then these transients would be browseable from root, and would also be kept around for some period of time.  Sharing the transients directory as part of debugging could be very helpful.  Transients cannot be part of the prod app root, since they would be forking or altering it in some way.  Path format could be `/transients/[app path]/[auto name]`

These transients would be forks of the given app, and then would seek to modify a specific path in the tree.  They can be cleared on restart, or can be longer lived, being cleared after no usage, or never.  Mounting somewhere seems more useful than making totally disposable.

Keeping around after reload means that a users unsaved work is available to them on reload.  The app would be responsible for detecting a recovery and presenting that back to the user.

## Mutating the Crisp
Allowing the crisp to be modified to have the same effect as a transient fork would work too, but seems much . Genuine chains are better since the componentized database and app logic are vital to come with the component.  Without the pulses carrying state and logic deep into each component, we have wandered off into the traditional programming world are are bound to get lost.

## Filtering the Crisp
Filtration, or putting transforms in front of the crisp may be possible.  But again, this is departing from carrying the covenant state and logic into the component, and requires another layer in between the component and the databaseapp - the dappabase.

## Treating all user interactions as transient
Another way to approach the problem is to treat all operations as a fork, followed by a merge to prod.  The app keeps pulling in changes from remote, and merges them in.  In this way, transients would be the default, so needs no special treatment.

## Including transients into the application itself
Storing all the users drafts as part of the production application seems more beneficial in the crm use cases, as privacy is not a large concern.  Privacy between users could still be achieved using the [[ACL]].

## Generating a Pulse in the UI
If we generate a pulse, and do not sign it, then we can use the syncer to produce a crisp based on this item.  If we permit using these soft pulses to sync with, then we can maintain the logic of the pulse, but avoid making long lived chains.

The engine could take a pulse that was being soft forked, and pierce it.  Can flag it as never having its results saved.