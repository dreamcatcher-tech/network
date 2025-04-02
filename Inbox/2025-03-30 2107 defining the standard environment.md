
>[!tip] Created: [2025-03-30 Sun 21:07]

>[!question] Targets: 

>[!danger] Depends: 

Define the standard tile and its relationship to other tiles.

Say how it relates to napps.

1. repos
2. napps
3. runtimes
4. the standard environment

show different kinds of runtime conditions:
1. pure
2. pure with consensus
3. side effect (eg: edge hosting)
4. side effect with consensus

This means that, there does not need to be anything stored in a custom database.
Hosters can supply the backing properties of data storage and atomicity in any way they like, using whatever systems they like, but they are compatible with other implementations.

This makes it like an operating system, but for everything.  Like the last operating system.

layers:
1. cpu architecture
2. hypervisor
3. container
4. napp

By making sure that no data in the standard environment is stored in a data structure other than a git repo, this means we are database-less, in a sense.  Database agnostic.  So long as the backing database, which could just be raw files on disk, presents the git operations and atomic guarantees we need, then it can be anything at all.  The git format is very portable, transportable.  It is a portable blockchain.  The spec for the standard platform is database-free.  No database dependency.  DB is abstracted away.

The universal database.  With a universal query language.

The auth method is up to any implementor, since that specifies how actors gain access to the system.

we could call it the standard repo, the standard app, the standard environment, 

the standard kernel maybe, or standard hypervisor.

? could we call our platform a universal computing platform ?
If git is the same structure used for the computation / instructions as what is used for storing data, and storing programs, then we could say it has a form of univerality ?  So it can mimick any computing environment, in this sense ?

So in normal computing, we end up doing specific types of programs, constrained to a single language.  With universal computing we can use any language, with any other language.  We also have very specific deployment systems / hosting systems, so the universal platform makes a way to deploy to any hosting system, making any app work on any hosting system, essentially.

Docker container hosts, like fly.io, are approaching this universality.

Turning data into executable instructions is the difference between a turing machine and a universal turing machine.

Git is the lingua franca of storage.
The browser is the lingua franca of graphical interfaces.
docker is the lingua franca of execution.

typically the .git folder contents are not on chain.