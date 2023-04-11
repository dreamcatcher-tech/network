
>[!tip] Created: [2023-02-16 Thu 16:23]

>[!question] Targets: 

>[!danger] Depends: 

We need to be able to use Timetravel debugging against the engine itself.
Particularly on tricky non chain things, like networking.
And definitely against future versions, regression testing, repros.

Submissions should be possible by merely giving access to the engine, then we can fully repro what the engine was doing, and leave this issue in as a regression test so it never happens again.
Each issue then has a repro attached to it, and its runs are tallied on the issue, so you can see that your issue is continually getting checked before each release, causing attribution to flow to everyone that participated.

Debugging in this way gives us a series of mini snapshots that we can focus in on.
The engine outside can roll back and forth and load up the source code version of the engine that we want to debug.
Can tick it forwards until just the right place to hit play, then can rollback any time we like.

Config can be supplied at boot to move the engine to particular spot for running jest tests with no interaction.