Make each packet as a model which has a set of iteractions.
Have a governing machine that selects which packet to focus on.

Top level machine deals in high level actions, like "solve this packet" and then the actions for it go out to the mini machine.

The submachine does the actual interactions with ethereum, and its focus is switched by the high level machine.

So different types of interleaving between packets can be tested by switching the focused packet  around.

Run the submachines in parallel to get full combination testing.
