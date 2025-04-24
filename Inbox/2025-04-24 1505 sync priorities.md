
>[!tip] Created: [2025-04-24 Thu 15:05]

>[!question] Targets: 

>[!danger] Depends: 

having no displayable customers until all the trees are built seems bad.

reading huge numbers of small files is bad.

no caching is really bad.

could pull a whole commit, and say we already have some other one, so the server doesn't double send

pull only objects that are newer than x

pull objects in lists, where we ask for a bunch of oids all at once, and then stream back the results as they come in.