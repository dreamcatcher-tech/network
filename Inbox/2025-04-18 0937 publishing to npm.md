
>[!tip] Created: [2025-04-18 Fri 09:37]

>[!question] Targets: 

>[!danger] Depends: 

If we do, then all the vibe coding tools just work.
Also chatgpt can check the code and run it too.

but it will create many errors that need tracing down.

how can we stick entirely with deno ?

we could move to using deno with vite in the workspace itself, making it easier to make server side changes live ?  This way, we know our packages work.

The issue is the context package has many dependencies, and pulls in half the monorepo.

Schemas could be made a dedicated package, possibly part of the api.
so could drop provider as a dependency.

Then we can publish a react package that handles using the artifact object and turning it into a form that is easily consumed in the react paradigm.

The reach package could include a vite server that we run to test and perfect the package.

All other deps would be minimized, since we only need this npm package for the front end.

Plus if we move flush to be server side, that removes a bunch of logic off browser ?

context should publish the store component too, then we can have a separate unpublished package that is a react server that is set up to verify this thing is working before publish.

test using pure npm as the vite bundler and see if we can import packages there.

may need to move dotenv package out of helpers ?

it would be nice if we could use deno with jsr natively
but it might be best to bundle a full emit based npm package, so that it works in bolt.new or others ?  And this might make the packaging issue go away.

checks for jsr issues:
- blank project, then import @std members that import other @std members.

