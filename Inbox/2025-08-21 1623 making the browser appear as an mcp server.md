
>[!tip] Created: [2025-08-21 Thu 16:23]

>[!question] Targets: 

>[!danger] Depends: 

this lets the server side machinery reach into the browser and do some stuff.

if it also loaded a frame on the browser, this supports the flow:
1. browser logs in
2. server tells browser to install a frame with open net connectivity
3. frame mcp server is connected to by the server
4. server tells that mcp server to do some local network stuff, like control the lights, or control the tv or something

it allows the server to cycle thru different kinds of frames to load up tools on the client dynamically, so long as the basic ops for installing frames on the client were supported.

The two wai mcp call, where the client presents itself as a server, like a reverse tunnel.

That is effectively remote code execution in a secure way, on the users browser.

we could also install agents on devices that connect to the server and await instructions on what code to run.  Could present a shell so the remote bot can do anything it wants.

concentrating hard on remote shell entries, the bot would run multiple versions and consider all the possible outcomes, so that it is very sure what next command it wants to run, since it knows it can lock itself out.

It needs an escalation path, where it says it wants the danger of what its doing assessed, then this process decides on the dangers, and sets the appropriate level of care.  loads up simulators, or other well known tricks.