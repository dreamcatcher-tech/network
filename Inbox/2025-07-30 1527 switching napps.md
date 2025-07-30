
>[!tip] Created: [2025-07-30 Wed 15:27]

>[!question] Targets: 

>[!danger] Depends: 

implement the function `bind` and this would set what nap is currently targetted by the server.
response would be an ok, and then some new tools would be available.

the response would return the current scope, the current bound napp.

or we could prefix the napp calls with the napp name ?
so we still have all the artifact tools, but we also have the napp, by name, with its tools.

or we can have a single system tool call, that lets you unscope the napp.

so the scope used to be stored in the client, but now it is stored on the server ? means we don't have to deal with always adding it in with our calls ?

it could be stored in the client, but it would need to be injected in every call.

it is better to get the LLM to do something right once, and then build upon it, rather than requiring it to get it right each call after.
so step by step, if each step requires multiple subjects to be joined, it is likely to fumble.  but if it steps and inherits, that is better.

