
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