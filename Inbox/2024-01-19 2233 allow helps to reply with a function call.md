
>[!tip] Created: [2024-01-19 Fri 22:33]

>[!question] Targets: 

>[!danger] Depends: 

Can also force them to make use of their function calls.

If they are configured to end with a function call then the function call result can be passed back to the caller, eliminating a round trip to then call another function with the result that came back - sort of like hot passing.

If the help was run with a different runner, it could just do the function calls raw ?  So the help-finder returns with this exec help type, and the bot finds itself with new functions that it can call.  So in this case the help was instructions, rather than an AI funciton to call with instructions on how to call it.

This might need to be a different type of lookup - a function search rather than a help.  The help might specify a function call as the best way, so the help does not need to be engaged via an AI call.  Engaging help that was pure function type would just load up those functions into the bot and all the AI to proceed ?  But how is this different from just calling the help ?

Or maybe call the function with `relay-on-success` flag, so that if it returns success, then we relay that straight back to the caller.