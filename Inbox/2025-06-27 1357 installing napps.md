
>[!tip] Created: [2025-06-27 Fri 13:57]

>[!question] Targets: 

>[!danger] Depends: 

defer commit hooks till later, since we can just run without that for now.

? install can be deferred too ?

publish to jsr seems the simplest thing to do for now.  so the napp, once named, is fetched using its jsr specifier.

when the action comes in, the branch scope is used to target to a specific napp alias.

if the branch and napp alias doesn't match, then it errors.

to get the schemas, we need the full specifier, and we need to pass in an alias in case the same napp is installed in multiple locations.  also pass a version of the napp or an api hash, so we can have some surety we're sending the right thing ?