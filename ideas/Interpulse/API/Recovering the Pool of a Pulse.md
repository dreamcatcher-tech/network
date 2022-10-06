The [[Shell with automated CLI display]] requires to know what actions were dispatched into the covenant.  By the time the next Pulse is produced, any actions that arrived may have been processed already.  So we need a way to reconstruct the Pool state given the pulse alone.


## Usage in Shell
If actions were [[Pierce]]ings, then we can interpret these, in order.

If the actions came from other chains, then we can interpret the replies.

The only thing the CLI should

## Usage in Validators
Once a new Pulse has been received, being able to replay it for validation requires recovering the pool state.  The pool actually contains extra data, as we interpret the incoming interpulses, and make derived data that ends up blanked before the final pulse is crushed.

## Implementation
The only way seems to be to take the last pulse, and determine what interpulses and piercings would have been received before wringing out the pool.  