
>[!tip] Created: [2024-10-24 Thu 09:37]

>[!question] Targets: 

>[!danger] Depends: 

They must surely have thought about how to incorporate LLMs into deno deploy.

Proposition is we have the jsr package library, which is great, we have deno deploy, which is also great, but we have no package format for AI agents, we have no AI offering for deno deploy that lets people rapidly deploy AI agents at the edge.

Key to the AI race is safe code execution of untrusted (ie: LLM generated) code - subhosting is PERFECT to supply this environment.

So if we get this napps format adopted, and make a deno native way to execute napps, and integrate some standard LLM offerings, then we can get artifact hoisted, napps hoisted, and then we can build the dreamcatcher.

Add runtime tracking, as in invocations, hotpath mapping - which code paths are heavily used.  Replay ability.

LLM replay and be able to use the opensource actions against the LLMs, sold at a discount, to see what the responses of the prompting and training was in the LLMs, to allow greater refinement.

Show call costs assosciated with all the presented LLMs, and offer revenue sharing.  Offer a mode where deploy can run the napps, or even the modules, and then people who produce these certified modules can receive revenue share.

Insurance pools to cover support assurance, reaction times.

Talk about this super computer that Ryan Dahl keeps going on about.
Make it a reality, since all your stuff would be on this computer, and not always somewhere else.

Must make it operate in an offline fashion, so the hosting is hybrid and for high reliability or trust.

The goal is to talk about making jsr packages deployable.  

Run benchmarks with tasks of varying type:
1. very simple tasks
2. long async task, like a web call that takes a long time, or a timed delay
3. long compute task, like grinding out some hashing or creating crypto keys
4. mixture of tasks

Then show the effect of batch size, and task size.

Run these benchmarks against an auto deployed deploy instance, which is like the preview deployment.

Might be nice to get job results as they come in, rather than waiting right until the end ?

??? how to retrieve the results of the job ?
poll for the job results ?
When the shockwave completes, the results can be retrieved by using a getMany call.

Could read from the job ids early if you wanted, but is more efficient to use getMany.


emit progress by watching the job count.
show progress in enqueing by watching the job enqueue.
emit a done enqueue once the enqueued jobs counter hits the total value.
store this statistic.
