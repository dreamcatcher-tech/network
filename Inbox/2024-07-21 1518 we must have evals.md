
>[!tip] Created: [2024-07-21 Sun 15:18]

>[!question] Targets: 

>[!danger] Depends: 

Without being able to eval the response, we can't know our system works.

We should treat evals like snapshot testing - we have the best response we know of, and we compare the new response with this.  We error if it isn't equivalent, but the user might decide it is actually a better response.

Multiple people might disagree, so in this case it becomes a vote based preferences thing.

If it is a better response, we update the eval and this is the new minimum.