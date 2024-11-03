
>[!tip] Created: [2024-11-03 Sun 13:46]

>[!question] Targets: 

>[!danger] Depends: 

Be able to generate loads on deno deploy so we can benchmark its performance.

Know how to batch things up nicely, so if it got 100k actions, it would use scaling actions to break that into chunks.

Might be filesystem aware, so it can read from the fs to get its instructions via some plugin, rather than having to transmit all the seed data around - should only be transmitting the pure start instructions.

Dashboard to show its peak performances.

? some way to know its live performance by storing some metrics somewhere ?
chunk metrics too, so can say how many chunks there are in the queue and what

Queue length parameter, so we know the total queue length.