
>[!tip] Created: [2024-07-23 Tue 06:53]

>[!question] Targets: 

>[!danger] Depends: 


turn off streaming
use a completions chat with a truncated / summarized thread ?

ui pierces into backchat.
bc routes to the focused thread

Or the focused thread is pierced directly

Seems best to make an offthread choice as to the agent to run, else pollutes the thread needlessly.
Or, run it, then delete the messages that showed how the choice was made ?

Easiest to run it as an agent on the thread, then interpret the results.

Add in the user prompt then call the switchboard agent immediately.
Switchboard says what agent to run.
Run the agent, show it to the user.

Backchat becomes not a trigger word, but an agent with a single powerful tool - the ability to switch the current thread out.

Backchat then becomes an agent, which manages threading, rather than an entity.

??should we keep the execution environments completely separate ?
quick completions might be useful for things that don't require switching users out, like db queries.

Do we need assistants to do longthreading ?
We could achieve a similar effect using completions, and it would be much faster to get up and running ?