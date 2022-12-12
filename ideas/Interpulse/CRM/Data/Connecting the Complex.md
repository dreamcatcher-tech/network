>[!tip] Created: [2022-12-12 Mon 13:35]

>[!question] Targets: 

>[!danger] Depends: 


## Requirements
1. Load in a secure manner, holding private customer data securely
2. Pull based sync with Moneyworks
3. Save backups somewhere with a tested restore procedure
4. Load existing customer data quickly

## Layout
GHPages holds a vite static page which includes the UI, loads the chain, syncs the complex, causes the gui to load.  Connects via a set URL which only LAN can access.  Is given a chainUrl, and a chainId.

Progress display during initial sync with the database.

## Approaches
### Manual import with dos server api port
Host the GUI page on GHPages.
Boot DOS in interactive mode.
Import the existing customer data into the db using manual commands in the crm app.
shutdown DOS.
Boot dos up in a service, to begin serving on the API port.

### Moneyworks sync in browser
A proxy runs somewhere to allow CORS.
Browser sends a request to Moneyworks to check the latest thing.
If sync is needed, browser pulls data in, then pushes out to the app.

### Moneyworks sync as a service
Periodically, the sync runs on the server, and injects changed data using the api port.  
Boots up its own chain, then makes changes so it shows up as coming from a foreign chain.

### Download the complex
In browser, dump the full complex to json object, then use this to do a manual import of the complex using the DOS tools.  So all private data needs to be transformed into complex format first, and then loaded.  Can do either merge or replace.  Complex format must match the covenants.

## Problems
### Keeping in sync
Client would subscribe to the servers approot broadcasts.
If sync came in as a change to the complex, then it wouldn't matter what was backing the complex.

### initial sync

### How to test ?
DOS needs to be able to test against another DOS instance.
Use the two engines test method in `full.test.js` we can set up client server test environments.

Make test data loaders so can see how the whole system performs with large and small data sets loaded.

### Writing data to server
Add customer needs to write to the server chain, not its own chain.
