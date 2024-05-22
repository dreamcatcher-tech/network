
>[!tip] Created: [2024-05-23 Thu 10:42]

>[!question] Targets: 

>[!danger] Depends: 

Doing a full git checkout is too heavy for the client.
Streaming down objects as they become requested is easier.
Stream can be eager, where it comes down without further requests.

Use fetch streams to allow the server to detect backpressure.