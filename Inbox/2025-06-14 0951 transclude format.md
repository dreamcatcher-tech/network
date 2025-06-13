
>[!tip] Created: [2025-06-14 Sat 09:51]

>[!question] Targets: 

>[!danger] Depends: 

it always wraps a git object, like a commit, or a file, or a folder.
it always carries a metadata object which talks about the thing being passed ?

sending transcludes does not send any data ? requires other side to request it.
just pushes out the transcludes, which would be an array of transcludes for transmission, making a large number of small ones efficient ?
So if you have multiple transcludes queued up, it could send them all, or at least send the top level one, which allows the recipient to use the git format to pull down the objects it needs using pack.

transcludes should sit in the genesis branch, and are folders that represent comms channels with other repos.

they are scoped by the branch internally that they come from, and which branch they are destined to go to, but the repo permissions are repo wide, so the branch is just an addressing formality.

The represent a folder that is shared with the other side.
Send and receive channels then are just objects that go in the folder with an agreed protocol.
So we could say that the other side will ack the actions that it sees - at its simplest form we can do the channel protocol for chain joining but just using files instead of complicated object structures.  This protocol can be versioned, and repos can talk in this protocol using transcludes to faciliate.

But deeper and more useful, both sides can agree on a shared piece of state, like a portal, or like direct memory access.

When both sides produce a transclude with commit proof and the folder they are transcluding on hash matches, then they consider the portal settled, requiring no further action.  This works in group settings too.  It allows each member to know the state the other members last acknowledged.

the only source of identity is the commit - the genesis branch is in charge of stamping commits, which is the sole source of identity in the system.