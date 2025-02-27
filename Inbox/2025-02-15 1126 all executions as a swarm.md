
>[!tip] Created: [2025-02-15 Sat 11:26]

>[!question] Targets: 

>[!danger] Depends: 

If we need something like a typecheck run or lint run or profiling run on some code, then these should be pushed out as jobs to be done on the job queue for the repo, and they should be picked up by those who have hot containers, low latency, and good rep.

The grade of those willing to do these spot jobs can be much lower than the grade of running the main chain, or the LLM calls, since a call to openai is not repeatable exactly.

So the concurrency level and geographic distribution might be set at x and y, then it can become a race to get it done ? but we should have a dealer who has some affinity rules, and so workers can line up for a slot of work, and they get paid for doing a good job across all the jobs, rather than one by one.

Then several jobs run repeatedly, as fast as we can manage, some of which might be on home computers or untrusted servers, then the results come back in, quorum achieved, payments made in escrow.

We should be able to use the ghrunner code to be able to run these job instances.

So basically we have a swarm of workers waiting, and then jobs start executing, with elastic supply being met by traditional providers if the pricing is right.