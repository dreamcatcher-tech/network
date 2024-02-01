
>[!tip] Created: [2024-02-01 Thu 19:37]

>[!question] Targets: 

>[!danger] Depends: 

So we have the api as an object that gets passed around so it can be used in isolate globals and other places, as well as testing.  Then a web api is set up using hono that offers the functions of this client as an authenticated api.

Could do the oauth loop using the api, so the PAT is stored in artifact in a repo that only we have reference to.
If the filesystem was mapped to keys in denokv, then we can use fs abstractions as storage of PATs.

User would need to present some kind of session auth to be able to use the API.

AMAP we should use artifact to manage the credentials.  The system itself would need a PAT to access the repo that backs its sensitive operations.

Hono is used to build a typed client that is then used by either an edge webserver, or the client directly.  Splices are the only unit of communication when the client runs query.