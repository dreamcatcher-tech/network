
>[!tip] Created: [2024-12-10 Tue 11:17]

>[!question] Targets: 

>[!danger] Depends: 

The prompt revisions are actually the spec.

So the job is that o1 should be able to generate from spec alone, where spec would include some reference files.

May make a concat tool that can expand out links in the top level spec, so it can be linked to other data.  Might allow linking to jsr packages to pull in remote reasoning info.

Almost like we need to include the prompts used to generate the code inside the git repo, so people know how it was built - source is not source so much any more, source without prompts is worthless.

May help to generate multiple strategies and then pick the best one ?

Start by generating a readme that lays out the motivation, and top level design of the module.
Then once this is correct.

This technique is layering, where a different render is done at each layer, and then corrected to add finer detail not able to be added in the higher layer due to being too far removed, then all the layers up to that point are used to render the next layer, so the steering gets increasingly accurate.