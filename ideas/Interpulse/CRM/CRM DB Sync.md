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

### Diffing at source
The database might keep a sequence number, so we could pull down only those things that altered since the last update, saving much time and load on the DB.  Using `LastModifiedTime` we should be able to pull down only those customers and transactions that have changed since the last sync occured.

### Single Chain Customers
If we do not use multiple different chains to represent customers, then the update speed will be faster.

### Polling
We can avoid the daily pull, or the feeling that the system is out of date if we pull from the DB every 5 minutes, or some other interval.  Manual should be allowed too, as well as changing the interval, and showing records of the last modifications made.

History would be done showing the previous pulses, where the state holds the results of the last poll.  Should contain links to the customers and transactions that were updated last, and from which computer the request was started from.