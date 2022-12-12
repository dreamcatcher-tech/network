>[!tip] Created: [2022-12-12 Mon 09:15]

>[!question] Targets: 

>[!danger] Depends: 

Save the complex as JSON using loki, then send a backup to the server periodically.
Server can load the private data json.
Can simply do a git commit and push of the json.

Do the git commit direct in the browser.

Make a webserver that queries moneyworks but also caches the queries it makes to reduce load on moneyworks.

Leverage that the complex can be loaded and maintained from any backing source, so we can make a dummy version.

## Git as backup source
Run a set of tests on the data integrity, then if passes do a git commit, then push it up to github as the backup method.

## Boot
Pull latest from the git repo, generate a complex, let the app begin its use.
When ready, go into settings and click save, or have an auto script run on a timer.
Or, use the actions to include a function to sync with the server on commit.

Basically the Complex interface allows anything at all to be used as a backing store, which is a powerful tool for migrations of existing codebases, since the complex can switch between old and new API calls.  Also new builds have an ejection button that is reversible.

The github version might be easy to deploy in a great many cases, as it needs no central server.

Github might provide a good export function to back up the raw data as json.  Importing again and then storing in blockchain could be done by using a suite of Complex tools for data merging.  These merge tools might be the exact same as the branch and merge tools used on the blockchain itself - in fact they could be the same, if the blockchain was always transformed into a complex and back.

So Complex can have multiple backing data sources, and can provide standard APIs across them all.