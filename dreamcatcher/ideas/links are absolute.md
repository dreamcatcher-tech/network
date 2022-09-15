---
type: idea
---
# links are absolute

> [2022-09-14 Wed 19:56] <br/>
> Targets: [[principles]] <br/>
> Depends: [[]]

If a validator has just rebooted and has only disk information to build on, then it needs a way to look up links as well as other peers.  Relative links seem impossible to lookup.

This problem might be sidestepped altogether if we consider how an engine started processing any given chain in the first place.  If we assume that processing of any given chain means the absolute path from approot is always known, then relative links become feasible.

Links would need to be checked each transmission time, or they would need to be set once on first write.  Preferably they would be tolerant of changes, and would dump and restart any requests that were being made.
