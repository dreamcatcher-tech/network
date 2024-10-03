
>[!tip] Created: [2024-10-04 Fri 09:20]

>[!question] Targets: 

>[!danger] Depends: 

Use a broadcast channel to 

Send the origin hash of the action along with all actions, which can be used to halt everything that is a consequence of that.

The halt needs to be signed by the user that send in the pierce.

? how to roll back EVERYTHING related to that action ?  Issue is that some things could be intermingled.

Halt causes a broadcast to occur.

Could cause a propagation to all the outstanding parts of the pierce, which sends out actions to each branch that owes us a reply, and send a single action that causes it to revoke all its actions too.

If this just occured inside the single main thread, then we could stop endless tool loops.

The tool result insertion would be synthetic, so it would show in the UI has user halted.

User could resume it ?

User could rerun any given isolate function ?
Hook up the artifact debugger, and run the function in a local instance, to reproduce how it ran.

broadcast the stop, rather than causing more actions to occur.
The stop has a signature, and so it can check the broadcasts are legitimate.
When the exe thing sees these broadcasts, it halts immediately, and errors out all the actions.

No responses back to the parent are required, to save on 
So stop replies are not transmitted, they just end.

## safeguards
May need a watcher of runs, or in general, to detect if some looping is occuring.
These stops should occur during any function action.
This might be mitigated by billing, where each function call has a token allocation / billing allocation, and if it goes above this
The accounting would be linked to the invocations of each pierce.
So the pierce goes thru backchat to get its accounting allowance, and is used to measure everything.