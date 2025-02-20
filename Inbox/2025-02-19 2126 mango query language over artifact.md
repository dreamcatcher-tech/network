
>[!tip] Created: [2025-02-19 Wed 21:26]

>[!question] Targets: 

>[!danger] Depends: 

Seems straight forward to implement this search ability.

Then we can allow the server to run these queries massively in parallel, so they are very fast for large queries, and also have great caching.

Can optionally run on cache alone, if we are currently disconnected.

Add a closeness query, using levinstien distance.

Handling query's that are completed out of order, if sorted, we can sort something already sorted more rapidly than if both were unsorted.

Mango index creation can be used the the LLMs to speed up queries.

Part of the solvers can look at how long each query took to run, and work towards improveing that.

Could even to geoWithin to do searches within polygons.  Make a query that returns true for whichever polygon in a collection of polygons the point is inside of.

Allow adding pluggable queries, so napps can be used as the query, which will get processed by the napps in parallel or in a pipeline, so that almost any kind of transform can be set up.

Mango would be great for walking thru file contents, or file names using an expressive syntax.

It would start of as single threaded, and then we'd expand it to be multi threaded.

Incremental queries, where the result changes based on commits, so when a record is modified, the query result is iteratively changed, rather than running the whole query.

Then offering artifact db hosting seems like a viable offering ?  Doesn't need full execution, just needs ability to do parallel query running.  But execution would be a great offering.

Most devs would probably want their records in git repos due to the change control, provided this concept was performant.  We can make the case that it can be more performant, and can allow LLMs sandboxed experimentation.  Plus full control without custom data formats.  Plus can write code that operates on the data directly, AND can put that into an execution environment so the code can get run across all records in parallel.

Using LLM queries, could do chaining using $and, $or plus can do some basic math, like $sum.
Make groups that get then fed into the next set of results like a pipeline.

Can use this to figure out what files are relevant across a codebase, by querying using an LLM across the docs.

Use wildcards to match pathnames.

LLMs can allow closeness of query.

Templating can be used to inject things into the prompts.

LLMs could be used to generate a new index that was based on LLM processing.

Query to get all the different values for a given field, so can be used to detect dirty data.

Data pipelines, like how to process parts of a document and write them out somewhere.
Like mango, but for pipelines.

Seems essential, suddenly, this ql.  Then it also should be easily understood by the LLM since they are good at sloppy similarity, like how it looks like mango.

Can be used to drill down, so results come back, seem a little suspect, LLM can easily dig in to each doc and check that its query is working as it expected.  Can also provide methods to generate multiple runs, to flare things.

This easy control of the parallelism and operations of the llms can allow almost everything, in terms of rapidly defining and testing strategies, since everything smax has talked about can be defined in a compact query.  

Add structured outputs to the queries, so the LLM will always generate valid json.

AgentDB

Store queries, and see if one similar has run before, and if we find it, upvote it, and use those results - storage is cheaper than LLM calls.

For loops and other structures, like $each, $filter ?
Allows us to set up bulk processing.
Provide a UI element to drill into each query as it is being done and see how it worked out.

The language is about query, execution, mutation, and ultimately, agency, described in a standard way.  Spin up an agent with a few lines of agentql.