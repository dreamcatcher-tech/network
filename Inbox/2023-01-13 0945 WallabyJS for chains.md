
>[!tip] Created: [2023-01-13 Fri 09:45]

>[!question] Targets: 

>[!danger] Depends: 

Given an interface that lets us walk history and the filesystem of chains, we should be able to isolate a particular pulse, then step thru each action that it processed, then isolate a specific action, and run the code that was called during that action.

This would feel like timetravel in the application, particularly if it was coupled up to storybook where the state of the components and the syncer progress could be varied.  

Syncer can have arbitrary delays and other oddities inserted to observe the application appearance under varying conditions.