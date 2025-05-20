
>[!tip] Created: [2025-05-20 Tue 09:24]

>[!question] Targets: 

>[!danger] Depends: 

ideally we would have a widget that could run other widgets in a debug mode, so we could provision full fat artifact responses, like for testing.

So the debug widget would have various controls that can be used to exercise the dev server.

the dev server could be running on fly.io, and could suspend periodically if no traffic.   That makes it serving https and working exactly like how it would be hosted.

Seems best to make a separate project, and pull in artifact.

Then we can publish a jsr package, or npm package.  This then gets imported with a top level component, and debug adapter, and some react hooks.