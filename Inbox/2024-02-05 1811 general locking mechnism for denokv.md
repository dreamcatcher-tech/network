
>[!tip] Created: [2024-02-05 Mon 18:11]

>[!question] Targets: 

>[!danger] Depends: 

Use key watching and expirations to gracefully grab locks with error recovery and optimum timing.

Principle is using watching to watch the lock key, then working away, then if we definitely have the lock still, doing some atomic commits.

Configure some timeout when the lock will be forcibly taken.


Optionally can allow a line to form, where those who want it next can be prioritized, rather than a random FFA.

The ability to watch a lock file, and exit if some condition occurs part way thru

If we can design this with the help of AI, then we should be able to generate rapidly some TLA+ model checking to ensure that our system is correct, provided that the kv guarantees are correct.

We should also provide some recovery if the kv is not working as expected.

Would use abort controllers, so you could cancel your quest for the lock if the thing you wanted done was done by someone else.  Once you get the lock, you should do as much useful work in one batch as possible, which can free up a lot of watchers.