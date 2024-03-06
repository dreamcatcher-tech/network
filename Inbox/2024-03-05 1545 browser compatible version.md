
>[!tip] Created: [2024-03-05 Tue 15:45]

>[!question] Targets: 

>[!danger] Depends: 

We might be able to make all the deno specific bits be supplied as dependencies.

Then, we could re-execute parts of a thread in the browser, using isolates that have been published to the jsr.io registry as pure typescript modules of code.

Lets us step thru executions for building out isolates.

Ideally, the code would be running in subhosting in deno, so we could rerun an isolate using the subhosting API.
Idea is that we want the tools to write isolates to be available on the platform itself.  So making isolates should be easier and better on the platform that in your own environment.  Would also make debugging and tracing easier, since the tools are always present.

We can make a chain that has well tested and working components that can be pointed at the failing chain and used to analyze it in situ, avoiding the need for a browser execution environment completely.

Hard part is building the platform without these tools in the first place.  The first place to apply these tools is the specification and reasoning in NL of the design of the platform, and the tracking of its work.