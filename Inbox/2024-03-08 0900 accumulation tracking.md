
>[!tip] Created: [2024-03-08 Fri 09:00]

>[!question] Targets: 

>[!danger] Depends: 

May not be sufficient to rely on accumulations being derived ?
May need explicit definition - good as would enable loopback accumulation too.

A simple test would be to make a pierce that does accumulation, and then call it again.

Reply of side effects is crucial to isolate operation, since we can't tightly control which isolate will receive the continuation actions.

Loopback algo

Grab the lowest request that has no reply that has a target of this pid, and is not awaiting on any accumulations.

Track the trails separately in the io file ?
This seems the strongest method, as sniffing is sensitive.
Make tests on the accumulator and iochannel to work out different combinations of events that they operate correctly on.

execlock keeps side effects from running concurrently.
A branch is critical for keeping things in order.

Is it possible to sniff accumulations and allow loopback ?
If you had execlock, then you could know 
So anti pattern is side effects that are not atomic, since these cannot be replayed.

If side effects time out in a minute, how can we run longer ones ?
Pattern for a long side effect that would pass program control to different actions.
So a supervisor would run, and would make calls out to actions, where the actions are guaranteed to run to completion at least once.

Still need to watch changes to files in the browser.