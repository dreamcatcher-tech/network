
>[!tip] Created: [2025-06-10 Tue 14:48]

>[!question] Targets: 

>[!danger] Depends: 

The agents frame is how you manage who has access to what repos.
These settings managed for your home repo are you friends list.
We could translate into familiar terms, like follow, see updates, etc.  
Or just leave it raw and programmed.

The config for how your napps are laid out should be set here too ?
So the whole nav panel, everything, would be laid out by napp configs with nesting.
So how you lay out the config of your home would determine how your home page displays and how the apps are wired together - which one is selected as top.

finding friends:
 - search by their public name or some other info
 - goes thru public and private registries to find people that have published there, like a dns style service.
 - once added, they have a slot on the permissions object of the repo
 - they can read from a feed ?  or you publish a repo that gives them access to a feed ?

talking to friends:
- talking should be a series of transclusions, where a chat is a chain of transclusions ?
- transcludes are how info is passed between repos 

how would many conversations with many friends look ?
format should be the same as with agents - just a collection of message items, ordered by their name.

chats with internal bots should be the same format as any other chat ? so do not have any internal chat bots, since these are just napps ? or, treat them as a special agent - 'self'.


how would a new message look, where you've never seen them before ?
use whitelists and rules to determine who can ask for you to talk to them.
have a branch where all the noisy messy transcludes go, like a spam branch, that is designed to be thrown away some times so you don't get spammed.

transcludes comms format
better than sending a branch or something things like that, as they have their own linear sequence, acting like a repo within a repo.  
they transfer git objects directly so they don't need to create new objects or new wrappers, except for creating themselves.