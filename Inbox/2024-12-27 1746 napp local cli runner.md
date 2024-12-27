
>[!tip] Created: [2024-12-27 Fri 17:46]

>[!question] Targets: 

>[!danger] Depends: 

it is given a path to the napp.

1. load up the napp.json object, and check it for consistency
2. load up the module that is referenced in the napp for holding the functions it needs

Execution
1. validate the incoming request against the schema in the napp.json
2. create an api object to be used
3. scope the api object to whatever the napp declared
4. 