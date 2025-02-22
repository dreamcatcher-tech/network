
>[!tip] Created: [2025-02-22 Sat 20:35]

>[!question] Targets: 

>[!danger] Depends: 

If we have multiple records updated, with no conflicts, and a different quorum that signs off each one, and we can merge without conflict, then we should be able to generate the merge commit and have its signatures equal the union of all the signatures ?

no, but it is useful, since we could use an individual record with certainty.

It could also make catch up quite quick, since a merge is a fairly minimal information transfer.



## Running consensus nodes

- Run separate instances of deno deploy that talk to each other
- Run desktop software
- run browser nodes that do signing
- cli app controlled by browser
- cli app connecting to cloud then controlled by browser
- cloud provider deployments, multiple ones


Ideally want to bring a browser to a page, and then tell it to start earning, and it uses its resources to earn credits, just in the browser.  And extension can earn even more.  A desktop app earns the most.  Something with a gpu is probably very valuable.

Basic consensus, of voting because we want the network to be alive, seems easy.
Making it be in exchange for something is something different.
Sharding so that only small groups operate ?
Dynamic sharing, where each repo shuffles around who runs it, to keep everyone honest.
