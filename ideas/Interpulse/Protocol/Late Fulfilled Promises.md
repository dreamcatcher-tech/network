
>[!tip] Created: [2023-04-19 Wed 15:37]

>[!question] Targets: 

>[!danger] Depends: 

Currently the reducer is rerun from scratch.  However calls to async api functions could be fulfilled when interchain requests come in, and the first execution could be continued on, resulting is less garbage collection, faster execution, but at the price of perhaps larger peak memory usage as containers are not destroyed immediately.

Further, repeat invocations of the same reducer could reuse the same context again, which might mean the developer leaks something.

However in testing, we can run on a dispose always mode, so the developer is forced to deal with completely isolated code.  This might result in code that depends on that disposal, but we could always execute everything twice in dev - once using the existing context from the prior request, then again in a remounted one, and compare the results.  Keep the existing context so it is long lasting / forever in dev mode.