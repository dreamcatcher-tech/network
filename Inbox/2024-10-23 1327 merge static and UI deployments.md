
>[!tip] Created: [2024-10-23 Wed 13:27]

>[!question] Targets: 

>[!danger] Depends: 

The static page would be served by hono directly.

Then a single ping monitor would test both the static edge page serving and the backend application, the kv store, the queues, openai's api, and whatever other services we depended upon.

Build of the UI would be concurrent with running the CI tests.  Only if they pass would the deployment be uploaded.

Then the standard library would live with the UI frontend and the engine and the server.

Want to stay linked upstream with the standard library, since they make a lot of tooling that makes it easy to build libraries of components.

add a totally separate gh action that tests the engine, builds the UI, deploys the server.

Then we are maintaining a library of standard napps, and an engine that runs them, all as the same commit.

Ping should include a secret in env vars, so we don't get thrashed, since this call invokes billable actions.

Should the UI just be a package inside the deno workspace ?  It is not part of the standard library.

If the UI was a single deployment, and then it hosted the api, which was running on published stable packages, this makes the UI locked with the api ?

Is the browser interface part of the napps library ?
No, this seems part of the engine.

Artifact the engine could be a napp, and could be running entirely as a side effect ?

backchat, the client, becomes simply an interface to a given napp, and it simply bridges across the web to handle the invocation and present it back to whatever is running as tho everything was a locally called async function.

nappchat