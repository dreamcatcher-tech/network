
>[!tip] Created: [2025-04-18 Fri 10:32]

>[!question] Targets: 

>[!danger] Depends: 

Seems a nice clean library, that can be used for connection to operator, or for scraping some pages, or possibly even actual browsing maybe.

https://jsr.io/@astral/astral@0.5.2

Present an interface that looks like an agent, so it is just a screenshot, but when you click somewhere, it gets sent back to the backend.  It gets recorded like any other interaction, which gives us something to learn from.  Also keeps the backend cheap, since just showing snapshots.

We could offer a translated experience, where you get presented a mutated, sanitized, quiet, view of the page information, rather than the page itself.  Then when you interact, we send that back.  It is like an AI adblocker.

So in this case, we are rendering a page that represents our translated view, made with some standard building blocks that we have created.

using xpra could be used to show whole desktop apps for old apps ?

Also could use neko to stream the browser efficiently back to client or bot or both: https://neko.m1k1o.net/

Human can be running it, and bot can be commenting, doing background work as you browse, also able to fork off into a new tab and do scraping activities.

Because neko is an efficient protocol, we might be able to grab screenshots in a space efficient way, or just pull in the dom snapshots or something similar.

The idea of browsing an LLM summarized version with windows in to the main page is ideal.
What's left after this tho ? we begin browsing curated snippets ?
The agents should be contributing to a snippet library already - this is a form of training data, but this should be live and continue to grow.