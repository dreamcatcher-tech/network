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