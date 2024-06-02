
>[!tip] Created: [2024-06-03 Mon 10:33]

>[!question] Targets: 

>[!danger] Depends: 

Helps need to be run in their own thread.
That thread might stick around between invocations.
HAL should choose if the thread is to be resumed or not.
We can present the thread as a tab, so it shows as isolated ?
Or collapse the interactions into one ?
Breadcrumbs to break out into high levels.

Task that runs to completion vs daemon thread that does not close ?

HAL tool call is the starting of the help, then we navigate in to it.
Taking over the screen completely makes for a less complicated UI.

A special tool call that shows when an agent was spawned.
A Drone vs an Agent.

HAL can list agents that are running, and other stats about them, like cost.
Can also list drones, that do not interact with the human.
Use the breadcrumbs to jump up a level, or navigate to any other running agent.
Thread browser stateboard component can show

Let user bind hotkeys to certain jitters, where the jitter is an agent that gets interacted with ?
Hotkeys switch between different tools quickly, and are configurable.

The agent that was spawned shows its chat when viewed, and further chats just build on the agents UI entry.  Switching over to it is considered part of the same action, and no point interleaving the interactions.  When a result goes back to the main thread, then a new action is indicated.  This action will have a link to either dive into the source chat, or scroll up to the origin action.  Ending an agent is a special action too.

Spawn an agent with the intent of coming back to main thread means main thread will await its return before continuing.

A new topic / intent could well be a new thread that is switched over to.
Exit up can be in band or using the breadcrumbs.

To make it:
Do algorithmic  help in a fork.
Then link up to the UI.
Display of agent starts off all compacted with a single line, then has a link to focus it directly.