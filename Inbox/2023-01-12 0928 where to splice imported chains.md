
>[!tip] Created: [2023-01-12 Thu 09:28]

>[!question] Targets: 

>[!danger] Depends: 

If we cannot have access to the whole history of the chain, does that prohibit the chain from being of use ?  No, so long as we have a verified assertion that we are accepting this things as valid now.

It does not belong in mtab because it is not a network related sync.

If we simply want to read it, a static hardlink would express what it meant to us.

If we want to fork it if changes occur, then we need a means of updating the parents, and ensuring that we fork all the way to the splice point.

## Problems

### Updating the spliced data with another later import
This would be an overwrite, as we cannot verify it.  Some auto merge strategy could be applied, but seems messy and cannot think of a use case for it.