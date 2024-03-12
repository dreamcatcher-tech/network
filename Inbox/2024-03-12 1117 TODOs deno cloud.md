
>[!tip] Created: [2024-03-12 Tue 11:17]

>[!question] Targets: 

>[!danger] Depends: 

Make PID be a class so can print it better, or provide a print function that sniffs objects

Do some bulk accumulation tests.

Changing the AI runner to use an isolate for pure side effects.

Changing runners to be pure isolates.

Visualize the state of artifact programmatically

Use the visualization to make a block explorer that can stream output and analyze in arrears.

Rerun processes from the cloud locally to verify their runs, and then debug them.  Run it first to verify the repeatability, and then the second time run with debugger attached.

Benchmarks.

Solve why branch does not pool commits.

Solve why serial does not pool past 20 on cloud.  How to pool all by pausing processing ?

Making some exercises that mimick the AI functions but without doing any AI calls.
	If only we could intercept the isolate call out to the AI function, and provide a mocked response, in deno cloud.