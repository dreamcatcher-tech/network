
>[!tip] Created: [2023-12-15 Fri 09:23]

>[!question] Targets: 

>[!danger] Depends: 

Ideally people who run a bot should be able to talk in plain language to the bots programming, and have an effect on how it behaves.  They should be able to say why its bad, how it could be better, and then a set of tools would attempt to include these requirements in the performance of the bot, by providing an eval test, and attempting to solve the bot shortcomings.

Many things could be solved with just a rule that gets included, or we could generate a synthetic training set that we match against the rules each time then create fine tuning out of it.  

Fine tuning generation is a way to think hard about some feedback, and then run costly rule checks on each one, try to generate some scenarios that expose failing the rule in a big way, then 

Treat the fine tuning like layers, where we can swap them in an out, test in isolation.