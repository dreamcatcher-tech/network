
>[!tip] Created: [2025-07-29 Tue 09:56]

>[!question] Targets: 

>[!danger] Depends: 

If we pick the core devices we want to have, and then allow extra devices to attach things with different actions to it, then make the UI totally customizable by a bot.

an mcp server can help guide development of these components.

ideally people do this dev on our platform, and can test out the code live.

if everything in the platform is an mcp api call then it should be easy to extend the core using inert ui config and isolated napps that run in frames.

the local context has workers that it uses to isolate external code within.  Or use an iframe.

so it might behoove us to try get this concept going now ? in brutalist form ?

what if even the toggling of ui widgets in use could be done by an mcp server, and when right click, the options menu comes up, which changes what tools are available.

if we make attachments and all the other clutter be dedicated stateboards, we can free up the core chat to be very bare, which is good for speed.

if each device was api'd using mcp, then ai can reason about it, control it via tool calls.
so the whole ui is an api, and holds state that configures it, then we put decorations on top of that.
so long as it roughly resembles then both bot and human can understand each other since they have the same context.  The layout of the ui should be described in a lux diagram, where it is relative sizing, and other key geometric information, rather than expecting the bot to understand it directly.

the state of the UI shows its current layout, and what is visible, including menus and all that, and lays out logically how it is laid out geometrically.  The ai would have to process each step like a tool call anyway.  We just have the key features that a human would talk about, like next to this, to the left of this, etc.

state of the ui is based on session, and restarting it goes back to the current config, and current config can be reset to default, or you can pull in other pieces that people are using.

if all the ui interactions are stored as a string of tool calls that the human made, then we can analyze these actions for ways to do better, and ways to derive intent.  This is the analytics of the system.

we can dedupe parts where the state ended up as equivalent to some other place.

If inside frames, this same ui interaction was applied, then we can advise on ways to use the frames better too.  So teh api ui is a general thing, not just for the top level ui - it makes the ui be mcp'd, so a bot can drive it, but so a bot can view the human actions as tho it was a bot, so it can advise, and can directly help out.

means that this agent can talk about the UI state and make total sense to the human.

this might be the help agent, since it knows about the system itself.  human can view their own actions.  makes their actions be transcludable, so what you were doing can be shared with a stuck.

frames as we made them might be quite close to being mcp'd.

layout would be as a grid, showing which pieces were occupied by which components.  also the state of each component.