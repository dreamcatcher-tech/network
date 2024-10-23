
>[!tip] Created: [2024-10-23 Wed 13:27]

>[!question] Targets: 

>[!danger] Depends: 

The static page would be served by hono directly.

Then a single ping monitor would test both the static edge page serving and the backend application, the kv store, the queues, openai's api, and whatever other services we depended upon.

Build of the UI would be concurrent with running the CI tests.  Only if they pass would the deployment be uploaded.

Then the standard library would live with the UI frontend and the engine and the server.

Want to stay linked upstream with the standard library, since they make a lot of tooling that makes it easy to build libraries of components.