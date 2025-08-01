
>[!tip] Created: [2025-08-01 Fri 23:06]

>[!question] Targets: 

>[!danger] Depends: 

might be better, since at least we would understand it.

using a lib for consensus requires a very high level of testing on their part for it to be useful.

so generating it purely, like from a tla+ spec might be easier ?

we should maintain a list or catalog of all consensus algos in tla+ and have various canonical implementations.  test for real world stats during usage.

if we take an ivy proof or tla+ proof and then implement it, that seems like we will have better core background knowledge about it?

plus as ai advances, it can help us handle it better ?

there is a rust implementation of tendermint - we could abstract this and compile it to wasm then run for our purposes ?

so we'd make our own algo, and then have standard interfaces that we give to each algo implementation, and then we run different benchmarks, but on steps, where each network message is a step, not on actual latency.  We can show then, that a large number of steps will equate to slow perf, so we can start sampling behaviour as number of participants gets large.

seems bad to incorporate anything at all about geography into consensus decisions ?  makes it quite hard to simulate ?

need to test some nodes always being very much slower.

simplicity of checking scores vs performance should be recorded.

it is best to write the cost ourselves, since it is quite simple.  It could use an artifact interface to store all its data, so anyone can interrogate it.

can measure the noise to error rate - as errors increase, does the amount of chatter stay small ?

basically have some standard tests for each algo, and the mesurement is network steps / ticks, not compute time or wall time.

the simulators should be able to run in the browser, running as web workers.
or, run as simulated nodes in this standard workbench, where we simulate a computer, it has message queues, and then we go round tending to it.
this gives good graphs or algo performance.