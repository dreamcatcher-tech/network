
>[!tip] Created: [2025-08-23 Sat 08:28]

>[!question] Targets: 

>[!danger] Depends: 

the client can be simplified, if it is just the mcp client ?

may make some helper functions that will use convenience methods ?

make a quick test tool that verifies a schema matches what the server provides exactly, and then returns a typed function object so we don't have to go round hard coding strings in the tests.

reallyj ust some sugar for testing.

if we avoid the whole auth loop entirely, then the harness can be just an in memory version that presents back the client ?

the client is necessarily very thin.

dynamic tooling doesn't let well to this convenience thing, so it might be that we wrap schemas and produce a function caller, rather than trying to type the client, since the methods change.