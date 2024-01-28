
>[!tip] Created: [2024-01-29 Mon 09:47]

>[!question] Targets: 

>[!danger] Depends: 

If we continue with vite and a static deploy to ghpages, then we have to keep cobbling bits of deno to handle oauth and anything else.

So use fresh to handle that plus rapid deployment (rather tan 2min wait time) 

We HAVE to have our own cors server - making that part of the app seems a lot better than a separate component that gets pulled on sometimes - means we can deploy the whole thing as a single piece.

Don't want to waste the time we have spent on MUI components, since they do work, as well as the voice thing - seems to be working alright.  Storybook is a great way to build things quickly too, so maybe these projects can exist together ?

We could then pull down a git snapshot of HAL so we could server that locally, rapidly, and then we refresh the cache each time.  Or, a new HAL means a new deployment anyway.

Long term we want to use deno deploy to run our chains at huge scale, and enable others to do the same - edge processing on a per isolate basis seems win.

We could strip out the tailwind stuff and have an instant deploy, then load everything we need from esm.sh, and skip having a bundling step whatsoever.  Then artifact being deno native can use the same bundling as the browser, which is all urls.

We will need a large public chain installation anyway, since we want to be transparent.

Use deno kv as our git base store, so the git repos are instantly available, and can be globally locked.

So switch to using deno as the 