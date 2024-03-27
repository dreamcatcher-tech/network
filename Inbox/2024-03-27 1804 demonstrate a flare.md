
>[!tip] Created: [2024-03-27 Wed 18:04]

>[!question] Targets: 

>[!danger] Depends: 

This demo would involve writing a large number of text documents in parallel.

Show graphs that show the burn, and the token amount.

Show explorer where all the changed files are presented in the browser.

Could connect a flare up to AWS lamba to show us triggering high volume of long running processes that take multi core compute.  Basically we could hit lambda as hard as it could take it, with the isolates in deno managing the integrity of the system.

Lambda flare can use a shared deno cache stored in s3.  Lets us run any code we like.
Show how this can also run docker containers so can run other languages, using deno as the marshaller.

Bring your own docker contianer, and upload to deploy, and we'll handle calling it in lambda really fast.  We can also analyze the container, and optimize it for our use case.  Can provide AI tools to help you assemble a docker container easily if you point at the right sources.

This use case fits the requirement for a good AI testable context - known testable outcome, sandboxed environment with many repeats, lots of similar examples, well known technology on the web.

So if you have a Go project, just give us the repo, and we should be able to figure out how to load it up and run it at scale using artifact as the database.