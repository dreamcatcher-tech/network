
>[!tip] Created: [2025-01-30 Thu 09:40]

>[!question] Targets: 

>[!danger] Depends: 

The temptation is that the artifact interface is very similar to the server side interface.

But the returns are different for the provider as they are for the client.

The context takes the response and then processes it to return an Artifact instance, but the provider needed to return just the next commit so the context could make the next instance.

The provider needs to be serializable, but the client just needs to be friendly.

One way is to make the return types of the context be just whatever the functions themselves define ?

Or, run some codegen to extract out an interface with not all these exact return types and things ?

BUT seems any time we are returning an artifact object, we are returning a new scope.