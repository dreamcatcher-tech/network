
>[!tip] Created: [2023-09-12 Tue 13:55]

>[!question] Targets: 

>[!danger] Depends: 

Make little dashboards that can surface some part of the context, to help guide the user thru the statechart.  Offer some help snippets based on state they are in.

Connect up to production usage of the statechart, where the transitions are phoned home to be used as coverage and testing telemetry.

Use test filters in a visual way, to pincer of certain states, and watch the path generation behaviour differently when different visual test restriction elements are given. 
List out the generated paths.
Visually pincer different states, and annotate the statechart with visual connections that show it under test.

Scope into submachines, so can edit machines in isolation when the statecharts are getting big.  Allow attachments of "join points" where an external transition that needs to be connected up somehow is shown.  So can provide an external interface for the machine, and an adapter that marshalls between them.

Share the adjacency map between different test invocations.

Be able to zoom state levels, so that only a certain level is presented, and only when you go to it does it dynamically expand to show inside that state.  Showing all the information at once limits the maximum size of a statechart that can be reliably navigated around, particularly without the viewport automatically navigating to the active state if it is out of view.

Video calls where the chatter around a given state can be amalgamated, and interpreted into text, then summarized.