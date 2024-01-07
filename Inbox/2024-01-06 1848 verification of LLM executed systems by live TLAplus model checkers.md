
>[!tip] Created: [2024-01-06 Sat 18:48]

>[!question] Targets: 

>[!danger] Depends: 

Beyond just having the model be checked in the workbench before each patch release, we can also run the TLA+ model checker live, based on the current information in the state and some reasonable forecast info, and we can halt the chain if the model doesn't check out.

Crash consistency and all that is handled by GIT, so we can just recover the last known good commit and move on from there.  Possibly even getting unstuck from weird combinations by way of AI making some choices and reaching agreement with each other, then making that simple agreement be subject to the tendermint voting system before they actually do the change.