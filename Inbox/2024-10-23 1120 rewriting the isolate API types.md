
>[!tip] Created: [2024-10-23 Wed 11:20]

>[!question] Targets: 

>[!danger] Depends: 

Making the code fit an isolate type no longer matters, since the napp is the interface to the whole thing.

Strategy is to try get a simple version working all the way to the end without any guardrails.

Tools expects a function named the same in the underlying package, which takes the parameters it specifies.

What about being able to rewrite what the module we point to is named ?
Allow a key named "exports" which lets us target a different named export if the name is different ?
Or just `native` key, so we can link it thru to the exports of the package we are wrapping.

Initially all the names should align for the napp to pass validation.

How can a napp file be made in isolation, like a new one ?
How can  running napp be modified and run, using the modified version ?

Be able to omit optional parameters.
Show how to rename parameters, or change descriptions.

If the module exports is forced to map to the tool names, then we can use the ts types from the exported functions.

export napp.ts which holds all the function calls ?
napp.json is consumed and parsed as json-schema and then napp.ts is imported to get types info out, and a list of exported functions.

So napps.ts is the conventional code side of the interface, and the napp.json is the system bus side of the interface.  Inside and outside of the interface.