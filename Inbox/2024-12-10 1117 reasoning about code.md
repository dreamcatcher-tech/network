
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

If the vendor docs are included, do we need to tell o1 to use these instructions, or if we named the folder correctly, might that be enough ?

Do we need to message about updating changelog, creating deno project ?

We must include the prompts, or the chats, that went with the codegen, but we might want to replace the concat data with either a filler, or some info that can be generated, so it gets populated / hydrated, at a specific git commit.

concat tool could be selecting from a range of prompts, which can be modified, possibly collaborated on.

It should also check for updates from jsr.

Need some tasks that go into the folder too, so the bot may optionally be able to work in.

? do we get better results from doing one task at a time, like updating the README after the code is finished, or does it not matter ?

skills to gain:
- adding docs for packages to influence their usage, so that we can change how the bot uses things by what docs we supply, perhaps with a prompt indicating to use existing packages or those in the vendor-docs folder.
- modularizing - being able to cut the project into isolated pieces, so we can work on just little bits at a time.