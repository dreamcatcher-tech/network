
>[!tip] Created: [2024-12-06 Fri 15:41]

>[!question] Targets: 

>[!danger] Depends: 

Lets us see how many credits we have left maybe ?

Somehow need to take note of how many tokens each user has burned thru, and then map that back to a price.

The amount of credits we have in openai should always be more than what anyone pays in themselves, and so we should auto top that up somehow, each time there is a customer purchase.

We could generate a dedicated api key for each customer, giving very fine grained control ?

We should store their usage in their own repo, so they can access it and pull it out, but we would restrict modifying it, while we are hosting it.  If we accept an import, we would reset the stats here and overwrite them since our hosting begins.

But what if this was multi hoster ? then the consensus group should write to the usage stats, not just a single unit, and there would be a multiplier for all.

We would want to charge for tokens, but also for code execution, and for commits / storage.

Periodically pull in the price list from openai, so we know what to charge our users.

Usage should be available in the app, in the chat controls, and also when selecting individual messages.  Maybe get some stats on usage over time by walking commits to the usage branch, which can show how usage actually occured ?