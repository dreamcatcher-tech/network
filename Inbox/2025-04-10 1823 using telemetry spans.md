
>[!tip] Created: [2025-04-10 Thu 18:23]

>[!question] Targets: 

>[!danger] Depends: 

firstly, each action should include basic span and trace data, so we can present these back for debugging, but also billing exploration.
Replay allows you to zoom in on a specific trace, replay it, see how it would work if it went differently some how.

Finding the executing server to connect to in order to get streaming data is also useful.

but we can also use it for isolation of the executions ? instead of asynclocalstorage we can tie the span tracing in deno to allows us to look up the tracing, and thereby get back some of our debugging ability ?

Spans run in consensus show the overlap of the spans.