
>[!tip] Created: [2025-08-15 Fri 13:26]

>[!question] Targets: 

>[!danger] Depends: 

can make it as a [[2025-08-15 1321 tools as state machines|state machine]] so that the number of active tools is highly reduced.
there's just one function, and it takes a list of actions that are allowed.
the state machine errors politely if you get it wrong.

there's probably about 22 total functions that we need, and not all of them can be called at any given state.  So we can make a small number of tools, and give the machine an understanding of the state machine.

The purpose of the statemachine is causing it to think about the state of the browser more explicitly, in this state machine terms.

copy the commands that playwright uses, or other testing frameworks, since that should be all that we need.