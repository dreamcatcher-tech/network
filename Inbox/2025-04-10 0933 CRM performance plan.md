
>[!tip] Created: [2025-04-10 Thu 09:33]

>[!question] Targets: 

>[!danger] Depends: 

customer uploads are too slow, taking 26 seconds to do a single one, not sure why.

We need some example data uploads so we can mimick this.
Need a way to benchmark all operations the clients will do.
Can we make some benchmarks that do not rely on xml data, but are just binary data going up.
context benchmark but on the real tigris db

benchmark the actual setup pass, like how long to add N files.
then switch to using the real database.
Make a dedicated benchmarking function call that runs in the actual cloud deployment ?
So we make a fly deployment that is used entirely for benchmarking against, then torn down.
It should be benched using the ghactions runner.

Benchmark how long to init a repo.


How can we measure where the bottleneck is ?
1. bench the write speeds when we are on the server itself, logged in using ssh, doing an upload of some fake data
2. bench doing customer uploads on an inram version of the server

Strategies:
1. move the flush process server side - stream up all the upserts and deletes
	1. use the files object of the action to send up raw file data