
>[!tip] Created: [2024-10-06 Sun 12:18]

>[!question] Targets: 

>[!danger] Depends: 

To stop tests running away on us, we should install a loop count checker.

This would permit only a set number of loops to occur before the test is deemed a failure.

We might need to do an NL parse of the message thread to get this.

Set a token budget to say how many tokens this thing is allowed, and the number of commits it is allowed, and if it is allowed to start any branches.

This should be configurable in the test format.