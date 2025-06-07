
>[!tip] Created: [2025-06-08 Sun 09:39]

>[!question] Targets: 

>[!danger] Depends: 

It should be almost non prompted - the prompt should be tiny.
It's only job is to make judgement based on its internal state, and to learn from judgements it makes, which are brought to its attention, maintaining a logarithmically growning distilled knowledge base.

so the bot makes immediate judgements, and then when people raise exceptions, it considers them then rules again.  So the core prompt is miniscule, but the body of knowledge is grown by experience, which means it can reference every single piece of knowledge.

people (or bots) can propose contraditions to the knowledge base, and the bot will reconcile these as best it can.  Whenever it has a contradiction it cannot reconcile, it goes with its instinct.  We run the bot multiple times so that this comes out fair.

so the central piece is a pure little gemstone of an llm that is honest and bare.

then each piece of the knowledge base can be attributed to someone petitioning, and to the exact state that they refer to.

The discovery of contradictions can be a totally separate process, can be purely human, can be bot.  It should be highly adversarial, as people compete to convince the bot of different things.

This will expose parts of the bots internal training, and its internal contradictions, so we probably want to run with multiple models.

We may produce periodically a fine tuned bot that is based on the knowledge base and the examples, particularly areas where the bot has to read a lot because its flop always leads it astray, so these should be baked in.

It seems unlikely that baked in would then cause other faults to occur, since these would get reconciled too ? perhaps the reconciller is always pure, so that we cannot end up fine tuned in a place we can't reconcile out of ? we are relying on the model builders always producing a fair model.  Our fine tuned version is just for execution, rather than for reconcilling.

So the executive is the thing that makes judgements based on the knowledge base, but the reconciler is an open model that can walk the knowledge base but is not tuned on it, so it is not biased to the knowledge already present.

This design makes a nice fast executor, but a slow deliberate reconciler, which then runs the exectutor again to make sure the outcome is as expected.  This is the part humans interact with also.  Might include a dedicated button to call the reconciler ?

Maybe the reconciler looks at the log notes of the executor, so that it then reports back what the executor was doing ?

Why not make these the same bot ? the executor surely does not need the full broad knowledge of the reconciler, since it only looks at evidence and the knowledge base.  But you should not really talk to this bot, since it will only explain what it was doing, which can be quick an cheap, but the reconciler would always be waiting to jump in.