
>[!tip] Created: [2024-10-04 Fri 09:20]

>[!question] Targets: 

>[!danger] Depends: 

Use a broadcast channel to send out system wide halts where a channel is based on the pierce ID, or the account id.  But this might cause a lot of chatter, so we could simply set a db flag.

If the stop was related to the billing approval, this seems easier to watch.  So each pierce includes a funding amount allocated to that action which each runner checks.
When it is running, they all check periodically if there are funds left, and if not, they stop running.  They all update this balance with their run info, and the commit they made.  This data is stored external to the commits themselves, else it would be hard to recreate ?

When going on to the next action, you read the remaining credits for the action, and also if it got cancelled.  While running it in exe, we are watching this amount.  We might be updating it as we go, or just relying on passing back the balance within the action, so exact consumption of a given commit is by calculating the diff between in and out.

The billing would be db cost, exe cost, api costs, token cost, plus freeform units that an api can determine to add.

Or billing could be stored in the commit messages, or in the io.json files, and to calculate the bill, we walk backwards.

Best is to pass the billing info back with the reply, and the authorization goes forwards with the request.

User must be able to see where it ran out of funds.

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

Must be able to stop a thread remotely, too, so hook up to a running branch complex, and then be able to identify what the triggering id was, and stop it remotely.  Also see the total bill racked up for that action, from a distance.

When call stop, should use broadcast channel to signal that we want a stop.
The pending action should cause all promises to cancel, and this would bubble up.
So the stop is recognized at the edges of computation, and ripples up. 
We would know we have stopped since the action we called would ultimately resolve.

If an action was set to run independently, then it should be attached to some tracking table on the users account, and it should stop in a similar way.
Closing would notify the parent and so on until it reached the top and confirmed it had stopped.
## safeguards
May need a watcher of runs, or in general, to detect if some looping is occuring.
These stops should occur during any function action.
This might be mitigated by billing, where each function call has a token allocation / billing allocation, and if it goes above this
The accounting would be linked to the invocations of each pierce.
So the pierce goes thru backchat to get its accounting allowance, and is used to measure everything.

