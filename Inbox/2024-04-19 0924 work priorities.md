
>[!tip] Created: [2024-04-19 Fri 09:24]

>[!question] Targets: 

>[!danger] Depends: 

Reliability first - if a known stall condition or error condition exists, fix this first, so that if any weird things happen during runs, we at least know it isn't any of the known faults.

Always trace reliability issues first, since we want to use this thing in production asap.
It appears the model has stabilized, and it has all the features we need, so we need to stabilize.

We need to be able to say "there are no known faults and we have run x number of actions without error"

Add metrics for errors and other problems by catching the queue listener.