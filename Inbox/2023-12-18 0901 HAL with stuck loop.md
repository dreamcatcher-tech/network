
>[!tip] Created: [2023-12-18 Mon 09:01]

>[!question] Targets: 

>[!danger] Depends: 

The stuck loop should be the first thing that gets used, rather than bespoke ways to attempt to integrate apps within apps.  The key is that HAL should be using the stuck loop as the primary tool it uses all the time, and the breadth of search is the only real difference.  How exactly the stuck loop gets entered in to and refined with the user is up for modification but the principle is that it should always be doing the stuck loop.

## Techniques
### Use the retrieval tool

### Make our own vector search
Whilst slower to start, this could be more long term fulfilling since we need to be in control of this piece anyway.  Once the tool is invoked, it gives immediate answers but begins wider search activity in case it gets asked again.

## V1
User: (asks whatever the user does)
HAL: breaks down into goals that are used to search, and calls the search function
Tool: getGoals( goal1, goal2, goal3 )