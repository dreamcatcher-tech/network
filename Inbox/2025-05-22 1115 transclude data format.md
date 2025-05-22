
>[!tip] Created: [2025-05-22 Thu 11:15]

>[!question] Targets: 

>[!danger] Depends: 

folder
	type file
	 payload folder
	 provenance json file - includes pointing at other versions.

could be used to splat across the repo.


it should allow any signature scheme, but that is by way of making repos be the only source of signatures, however they can set any scheme they want in their config.

the transcludes can have versions which point to previous commit from the same repo.

transfer ownership would be covered by transfer of ownership of consensus.

repos would publish a chain of their consensus back to their origin commit and public key.
this means whenever a consensus group changes the config of consus, this commit and path is pointed to by every subsequent signing, so that verifiers can rapidly walk the chain of commits.

each sign points back to the last place the consensus config changed.

? how to change ownership of a transclude ? would need a special config changing commit ?

the type should point to a repo and a path that defines the type, so we avoid any namespace clashes.

this follows the principle that all namespaces are too small to be done manually, like english words - basically if it can fit in the head of a single person, then it is too small.

later we can allow all kinds of naming systems, where names can be determined by your social network graph.