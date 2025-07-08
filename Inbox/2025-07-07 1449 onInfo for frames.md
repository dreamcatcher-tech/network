
>[!tip] Created: [2025-07-07 Mon 14:49]

>[!question] Targets: 

>[!danger] Depends: 

when they load, they make this callback with some icon data, an emoji, a title, a description, and some other helpful info.

can also supply a napp api, so that the frame can be controlled externally in complex ways, including by AI tooling.
BUT this should be in the napp.json which the frame exposes in its package / transclude, so we should always have this info.

Then there would be some routing info so we can name a napp by a path in the main UI application ?

If the frame itself could take napp instructions, then we can api into the frame ?
Treat the frame like an execution context, and allow it to send actions back out too.