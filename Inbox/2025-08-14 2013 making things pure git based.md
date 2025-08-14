
>[!tip] Created: [2025-08-14 Thu 20:13]

>[!question] Targets: 

>[!danger] Depends: 

? why is it we can do this now, thanks to mcp ? why were we not pure git before ?

was it the question about where the state was ?
we didn't see that the state was actually the same as the disk state - the staging area.
we didn't know to value narrow and walking, since we were making for conventional apps.

git status should be a resource that shows the state of the repo at all time.

the key is narrow tools that can be scoped, like a sentence going from vague to defined.

The tools are only loaded as required, and that displaces existing tools, just like zoom displaces periphery.

so tools.. would let you backout of the tool you loaded and loaded the prior one ?

loaded tool would be a resource listing ?


git read mode:

what if we just grouped it by subcommand ?

what if a tool could actually cause the load ?
or if we had the notion of navigating the tool stack ?
so when you want git operations, you have to first load up git, or scope the git commands, then you can scope further ?
This could be done by drilling with search, list, fetch ?
search gives top level entry points, list gives the next range of tools where it is clear what is a folder and what is a file, and a file is a set of tools that can be loaded ?

or, at a particular level, you can load any 'files' but no directories.  Files represent tools, folders represent groups of tools.

you're driving a git repo, plain and simple.  We need to make it a high fidelity git repo.  Permissions are expressed by the absence of some tools, or error messages when you try to do things.

if we are going to do this, then we could perhaps that the complete git binary running on the server to manage the index, and the git folder can be mimicked by a database ?
Use a layered fs so that the git binary sees a snapshot of the repo on disk.

the tool tree might be only loadable if there are no directories in it, otherwise you need to navigate it.

so we probably can get the git navigation thing a bit wrong to start with, but that seems totally fine.
We can also get the tool navigation thing a bit bung, but that should be refinable.

so we'd use basic fs commands to write to the working tree, then we'd use git commands to turn that into a commit.  These would be our fs read and write and shard commands.

So the filesystem part is a separate tool, and then the sharded filesystem tool as well.

The key is to not bundle stuff up in the software that detracts from the metaphor -  it should be very easy for the bot to understand what is happening - this seems to be the new skill in programming - making things of least surprise to the bots.

the fs layer is virtualized - there is no real filesystem, we just act like there is.
the staging is still done, mostly so the bot isn't surprised ? or we just say that all writes are immediately staged.  this temp file situation is what we could set up as the transient streaming write file - this is just written to disk and not staged.

navigating away from a dirty repo causes an error.