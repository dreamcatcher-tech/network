
>[!tip] Created: [2025-03-23 Sun 10:44]

>[!question] Targets: 

>[!danger] Depends: 

First start testing using the test client, use that to test that auth works

Then make a typed RPC client ?

add different functions for streaming vs regular functions

Make some tests in crm that override the basic fetch


---
### When building the front end
we would need to have published the client packages onto the net, and then we would just pull in the latest versions.
We could use this to point to the server in question, and communicate with it from the front end.

The front end, in bolt.new, connects to the test environment.
