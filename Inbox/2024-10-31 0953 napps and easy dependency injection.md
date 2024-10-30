
>[!tip] Created: [2024-10-31 Thu 09:53]

>[!question] Targets: 

>[!danger] Depends: 

If the dependencies are set up in a way that is designed for us to swap things out, then when we're running a napp, if we rewire its deps, we can get different behaviour.

Typically deps are not designed to be switched, BECAUSE THE INTERFACE IS NON STANDARD and non portable.

Because the interface to dependencies is the same as the interface into the napp, we can rewire them, so long as the api is compatible.

The exact api compatibility is obvious since it is declared.

? how can this switch be reflected in the code ? or, must it all go via the json interface, which would add some overhead ?

The serialization / deserialization overhead might not matter for the sake of rewiring at runtime.

If a dep comes in as pure code, then we cannot rewire it nearly as easy.

Rewire at runtime is impossible, as it needs to be at linking time / import time.  Whereas jsonfunctions can be rewritten live.