
>[!tip] Created: [2025-08-17 Sun 16:12]

>[!question] Targets: 

>[!danger] Depends: 

one of the great confoundings in cloud eng is triggers and hooks, what is connected to what, is it connected correctly.  It is often hidden behind an illusion of needless complexity.

each trigger is always bespoke, and so you need to know about the system.  this should be a standard.

It's also hard to track for your own logging purposes.

so instead of each service making its own hooks and triggers, it should all go back to our system, and we would orchestrate what to do next using llms to make a decisions, keep track of what went where.

Our backbone should be the only thing that ever decides to do things - the sole source of automation.

Basically turn off all the cloud inbuilt automation.