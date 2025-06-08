
>[!tip] Created: [2025-06-08 Sun 11:40]

>[!question] Targets: 

>[!danger] Depends: 

The issue is that we have some upstream packages, and when they are updated, we then need all the downstream dependent projects to pull in those change dependencies. 

We need to be able to trigger this automatically. If this were on the Artifact platform, we would be able to make a map of the dependencies and keep watch on them upstream, triggering automatically.

Additionally, if the dependencies were published using transclusion, then we could transclude into the node_modules folder, and the transclusions could be updated in just the same way. 

There always needs to be some kind of a release ceremony where the day-to-day workings and improvements are not considered, and something reaches a state of stability that it is ready for the next round of consumption. 