Make a chain with side effects that can trigger a database sync.

## Process
Navitage to the chain within the app complex.
UI is shown that has actions and current state.
Triggering an action can cause interactions with the database.
The chain manages its concurrency, so it will not permit the database to be hit with multiple actions.

## Actions
### Cancel
All side effects run in a yielding fashion - sending a cancel action will tell the effect to stop the next chance it gets.
### Sync
Triggers a pull from MW.
### Concurrency
Each action causes the reducer to check the network slice to see if an action is already pending.  It will throw if something is already running, and will suggest you use cancel.
## State
State is used to track last pull time, location of any cache files, and use the binary to store the results on chain.
Network state is used to track what actions have been sent.

## Optimizations
The database might keep a sequence number, so we could pull down only those things that altered since the last update, saving much time and load on the DB.