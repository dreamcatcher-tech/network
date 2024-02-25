
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