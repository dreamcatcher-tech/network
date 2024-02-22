
>[!tip] Created: [2024-02-22 Thu 18:50]

>[!question] Targets: 

>[!danger] Depends: 

To get back to the HAL runner:
- terminal version of an ai chat session
- front end display
- ghauth
- branching
	- sessions being long running
- splice streaming so can see the results live
- splice requests for static files
- api calls for pierces
- writing changes to text documents
- interchain communications


Make the system work with a single chat stream going back and forth.
Do that in the browser next.
Then do that on Deno deploy.
Make a hono client that can call the deno deploy infrastructure.

Hurdles
- loading the full repo won't work for the whole CRM, so we need to break it apart intelligently, but we can use the current version to prove the concept works.
- interchain comms so users have a private chain that is the source of all their comms