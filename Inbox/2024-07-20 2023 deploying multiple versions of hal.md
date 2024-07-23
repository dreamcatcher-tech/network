
>[!tip] Created: [2024-07-20 Sat 20:23]

>[!question] Targets: 

>[!danger] Depends: 

Ideally we want only one version deployed, and we incrementally improve that.

But upgrading the data structures are hard, since we don't have migrations built in.

But, migrations could be put in, or they could be done lazily.

If we hosted the github page in the same place as the main site, then making a new deployment on deno is all that is required, repoint the dns, then off we go.

Or, keep the web site separate, rather than learning how to use workspaces, and then just use deno to have multiple versions without having to create new repos all the time.

The api becomes simply the page origin, so it just points at the server that served it.

Means we can easily deploy a new version without damaging anything in the old ones, which can just whither and die.

Then for quick testing, can just deploy artifact raw, or without the build step.
Build step can set the url to be the origin server.

A full safe deployment would run all the repo tests as well before publishing the full site ?

It just means that setup is a single thing, not multiple things.
But what about keeping the app separate and just deploying to deploy ?
Then give it a vite url.

Ultimately if we can get to the ability for people to export their repos, or talk between versions of hal, so that on the new one, we can show them their old repos and offer an import ?
Or, do an auto import ?

Do a redirect on a previous one when it has run its course.

Add the previous URLs into the current stable deployment.

If we use the preview urls, then this are always virgin deployments.

As new versions become stable, we can set up redirects to point all the old ones to the new ones.