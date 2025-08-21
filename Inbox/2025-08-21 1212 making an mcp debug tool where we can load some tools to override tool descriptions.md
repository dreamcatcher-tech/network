
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