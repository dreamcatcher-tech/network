>[!tip] Created: [2022-09-30 Fri 14:46]

>[!question] Targets: 

>[!danger] Depends: 

Given that all subscriptions should be handled by a path, if someone subscribes to a given path, then the chain at that path is changed, should they still receive subscriptions from the new chain ?

Is there any use in being able to subscribe to a chain by address ?  Being able to subscribe to something no matter where it moved to means you application would behave differently depending on when it started.

Currently expected behaviour is that devs would need to detect chain having changed, and the pulsestream will continue.  Digging in to the root pulse before and after the change will let the dev detect what changed to where.