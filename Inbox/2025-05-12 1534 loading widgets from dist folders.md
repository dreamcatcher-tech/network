
>[!tip] Created: [2025-05-12 Mon 15:34]

>[!question] Targets: 

>[!danger] Depends: 

If a widget was produced as a standalone web app, that would allow it to be loaded in a frame. Which is the best way to load it with isolation and control, it would seem. 

If the published version represented just some path to a folder in Git somewhere, and this is what its version is, then we can load that in our given app by simply reading the dist folder and streaming it down as part of the frame request. The frame request hits our server keeping the origin the same, it responds with the contents of the dist folder, serving it as though it was some independent webpage, and so our server only dealt with inert static data. The live running widget had access to a restricted channel with Artifact where it can make requests and other things. The code remains isolated. And we don't have to deal with any bundling issues. 

This could be a nice way to develop widgets too because it allows us to treat them as isolated components in a completely dedicated package with their own dependencies, their own compilation, etc.

To minimize duplication of code, they should really pool in packages from an external bundling source like ESM.sh. 