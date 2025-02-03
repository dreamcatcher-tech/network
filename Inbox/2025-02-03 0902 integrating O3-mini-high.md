
>[!tip] Created: [2025-02-03 Mon 09:02]

>[!question] Targets: 

>[!danger] Depends: 

For reasoning about architecture overall, use o1-pro, but once down to implementation details, use o3-mini

There is some kind of gain from getting the results back fast, since multiple steps are hard on the human to track when there is delay.  Quick feedback is important.

The issue with cost of delay is that whilst the thruput can be similar by having multiple plates spinning, if some particular pie

So if we could do each piece of work serially, that is the most efficient, since the learnings from each move forwards.

So there is some ratio of quality vs speed, where the information lost when a small change in knowledge at some point invalidates whole chunks of the pipeline which now need to be adapted.  This is probably pretty high, like say twice as important ?

The human working memory gets strained with slow work, so if a bot was doing it, then it would be better (altho probably token expensive) to just do the slow grind, but while a human is in there, slow is painful.

We can still have overall architecture being wrong, so we should be using whatever tools possible to investigate this architecture and expand out as quickly as possible.
Especially if we are unsure the architecture, the faster we can complete all the serial tasks, the better.

Rework cost is high - brain overload, lost track of work.
Morale improves since progress is 'done' not 'waiting'.

Learning rate is the biggest gain, since it isn't the quality of the code that matters (above the minimum acceptable amount) it is the learning rate of the human.  Also the conservation of the humans limited resources, like working memory.

So just use o3 until can know it isn't working, and then switch to pro and see if it works better ? unless we have general knowledge requirements.

## Fomulas
A concise way to model this is to define a single “effectiveness” metric that balances quality (Q) against time (T), rework (R), and human cognitive load (C). One example:


$$
Effectiveness=QT+α C+2R\text{Effectiveness} = \frac{Q}{T + \alpha \, C + 2R}
$$

- $Q$: Quality of each result (e.g. how “smart” the system is)
- $T$: Time per iteration
- $R$: Fraction of work invalidated (rework) when new discoveries arise
- $C$: Human cognitive overhead (factors in how many partial jobs are “in flight”)
- $2$ indicates rework is twice as costly/important as time
- $α$ scales how much load ($C$) impacts overall effectiveness

The human brain function that struggles with juggling many tasks simultaneously is typically called **working memory** (or sometimes the “central executive”). Factoring working memory as CC in the formula helps capture how increasing simultaneous tasks burdens the human, lowering overall effectiveness.

So we should be able to guage this rate for the world that Smax is doing, vs any other approach.


