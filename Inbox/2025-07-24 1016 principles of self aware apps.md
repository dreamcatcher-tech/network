
>[!tip] Created: [2025-07-24 Thu 10:16]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to make every operation that the user interface would do, should go thru the napp format, which means that an ai can drive it via api.

we should make ui operations, like selection of elements, filling in form fields, should all be exposed thru the napp interface.  We could have some conventions, like how to name things so that they indicate graphical changes rather than actual changes.

Or separate actual changes to be napp calls, but know that graphical changes are usually frame calls.

We might need to perfect the api and interfaces, then make libraries, before trying to apply it ?
So each time we need a new feature, redesign the core, test it, then apply it ?

being self aware requires a lot of grinding - it should be aware of each user that is interacting with the system, and work out entity maps between people, so it knows who to talk to about things.  It should use the same way it learns about ai agents and capabilities to determine who to call.

we would present the environment of the agent as an mcp server, so it can query about its own reflection, learn things, ask questions, perform operations.