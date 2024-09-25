
>[!tip] Created: [2024-09-25 Wed 20:30]

>[!question] Targets: 

>[!danger] Depends: 

Make a function that runs over all the agents and pulls out the summaries.

Make another agent that knows how to make a good descriptive summary, so it can check all the agents.

Could run an cache it, if nothing has changed, or it can write the output to disk, and then check if it is still in sync each time.
Could be run like the index functions, which always trigger when something goes to get written, as they check if the index is still up to date.

Trigger whenever the agents get saved.
Run on PR.