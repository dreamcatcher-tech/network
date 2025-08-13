
>[!tip] Created: [2025-08-13 Wed 16:28]

>[!question] Targets: 

>[!danger] Depends: 

`https://example.com/@dreamcatcher/chats` could be used to reference any npm package at all.

So if you browse to that page, we can show you a raw, default mcp server that exposes the tools that this napp presents.

If you are logged in, then it gives you access to the resources you have in your account.

repo, branch, path - these are not as easily mapped up using just paths, so would need params.

`https://your.app/?pkg=@dreamcatcher/chats@1.2.3&pkg=@acme/notes@^2.0.0&pkg=@org/ui&repo=asdfasdfasdfasdfsd`

then can also pass in options for how the mcp server should be provisioned, like denial of basic tools - we can label these presets, or you can start with none and build it back up using the system packages which enable these defaults.


Whatever mappings need to be made could probably be auto generated.

So we could make the request start up, and then an automated builder service kicks in to build the tool capabilities in, you can tweak the builder, it writes some tests, and then eventually you have a nice wrapper around the code.  It can be set to watch the npm rego and rebuild on change.

We can auto build a bunch off hand - makes it easy for our systems to consume these libraries for different things.

Glue code that calls them should use the mcp interface for repeatability and isolation.