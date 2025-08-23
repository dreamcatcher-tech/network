
>[!tip] Created: [2025-08-21 Thu 12:12]

>[!question] Targets: 

>[!danger] Depends: 

The issue is that when playing with prompting, publishing a mcapp is slow to iterate on.

if we provide a tool set that can write some modified strings as function definitions, 
this would put the mcp server into debug mode.
the resources showing the dbug status would be visible.

In this way, the human can direct the tool descriptions to be modified, or even an agent can run these, so it can run some tasks and have them complete.

debug profiles should be able to be saved to disk, and loaded up as needed.

warnings can be issued if they drift from the code supplied.

Bots can help massge them to fit the new things.

prompts may be used to send down system prompts that you may wish to use.

can store this in the user profile, so it always loads.

from this can publish to our registry as a derivation, pulling on the backing code from npm or jsr or similar.

should the range of discoverable tools be stored on the user profile or in relation to an agent, so that we can narrow what can be loaded ?
We can run a bot that first figures out what are good toolsets to rely upon, and then makes these available to a bot that does discovery.


All this is, is that we hold a file mapping in the users home repo, which is tool ids, and tool names, and arg descriptions.

need some list functions to show all the items ? like a toolprompt object, which has all the fields that make it in to a tool definition that a model receives.
need some diff tools, so can know what was changed.

mcp commands are:
1. create override
2. reset override
3. modify description
4. reset descriptions
5. modify tool description
6. reset tool description
7. modify tool parameter
8. reset tool parameter
9. modify tool return
10. reset tool return


you can't change the variable names ?

then make it so these overrides show up in the ui, if they are being applied.

? what about switching between multiple versions, to play ? what about toggling on and off ?

can we skip this since once the tooling is right, this won't matter ?
NO - every tool will require this tuning step.

Is there a simpler way, where the functions are coded but the schemas are always dynamic by default, loaded up from inside artifact ?
Testing would still make them dynamic tho.
Each use case might want to fiddle with the tooling prompt.

changing the code using bots on the fly would be the same type of system ?
so can we have the code change and the schema change be the same thing, rather than a separate thing for each ?
So the code is loaded from mutable storage, rather than the package registry, and the tools are also loaded dynamically as well.
Each user can fork their own version and edit that, which gets loaded up ?

Either way, an mcp server narrowed by its toolset for schema modifications is useful, as the tools define the task, rather than open ended file editing.  Can add other limits, like regex checking.

so load up the zod schema, turn it into jsonschema, then use tools to manipulate and store jsonschema.
Removal is just deleting the file.

This is a good example of a resource that gets loaded as a napp, since the jsonschema def is different to the tools piece itself, as this tools piece is a view that is extracted out from the base data.
Or, just store this thing as json directly, along with some metadata about the package it was snapshotted from.

Out of sync detection is only needed when the tool has no match - we just defer to the package default at runtime, and maybe show a warning.


define the clear outcomes we want - tool usage under broad scenarios.
auto run these assessments.

> basically the outcome is we want to present a toolchain that people can use to tune their tool prompts.  They put in some starter stuff, and the bot has access to the code, and then they give it some scenarios where they describe what happens, the bot cooks up some experiments, and then it loops over trying to get the performance score in the evals up by changing the tool prompts.

make a graph showing progress as well as token burn.  stop when no further progress.

most people will try to compensate with sysprompt additions.
We could extend this tool to run sysprompt tweaks too, possibly at the same time.

Might even be able to suggest api changes to a toolset based on how the evals are going ?

this could act as a starting point for purely dynamic code that was vibe coded on platform ?
baked means it contains large prior knowledge and testing to make it agnostic.

file a bug and the prompt engine kicks off trying to fix the problem in prompt.

this is excellent at leveling out multiple use case angles, where a change in one affects all, and we need them all to succeed, so the platform can loop over making improvements that don't regress or degrade some other response that was previously working.

Can test it over multiple models to see what generally works best.
Have a workbench or favourite model, then once its happy, move on to the next.

can use this system as a basis for sys prompt enhancement too, and might actually run the two of them at the same time.

might be able to do eval runs using openai's backend ?

Can also test usage with other toolsets so we can check pollution.

