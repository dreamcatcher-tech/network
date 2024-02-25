
>[!tip] Created: [2024-02-26 Mon 11:26]

>[!question] Targets: 

>[!danger] Depends: 

If we could make just a pure client side static page, then use hono as the api.

Still need a jsx transpiler.

What about vite, working as it does now, with simply the hono api client on it ?

Then that piece can be statically deployed to ghpages or whatever, and it stays independent of deno.

Ideally we would just have esm directly in the browser, like ultra does.

Could run some exercisers at different routes during testing that would do some automatic things like auto submit, and call on some canned responses.

Trouble is that hono needs a build step.  This can be the same repo, just with different entry points.  If we bundle using vite, we keep going in bundling hell.

The practical choice is to use vite and storybook to produce a static page, and then use the hono api to hydrate from.  We can then produce a GUI using the tools we already know, published on a separate channel, like ghpages, and hand code the api paths.

Or, could a very simple plain text UI be made that just works enough, and then the switch to a UI can be deferred ?

If the api is data oriented, switching the UI should be easy later, but building a new UI now is unnecessary delay.

The API and front end should be separate projects anyway.

Cannot make a frontend without storybook or similar.

The UI is independent from the api, so we should build up the api first, get that functional, so we have something solid to stand on.

So build a UI using vite, as a separate project.

At some point later, switch to tailwindcss or similar.