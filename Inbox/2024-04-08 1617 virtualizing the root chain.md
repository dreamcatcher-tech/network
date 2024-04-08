
>[!tip] Created: [2024-04-08 Mon 16:17]

>[!question] Targets: 

>[!danger] Depends: 

If instructions to perform repo operations went into a virtualized chain rather than an actual chain ?

But then how would commits work ?

```mermaid
---
title: Using the Repo isolate functions
---
gitGraph
   commit id:"init"
   commit id:"start session"
   branch session1
   checkout session1
   commit id:"clone"
   checkout main
   merge session1 id:"github clone"
   commit id:"clone done"
   checkout session1
   merge main id:"cloned"
   commit
   branch tomatoes
   commit

```
But the repo isolate should be able to run on any chain whatsoever
It effectively splices in git repos into the users account chain.
How do we police when it will have access to the db and now ?
```mermaid
---
title: Running the repo isolate directly
---
gitGraph
   commit id:"init"
   commit id:"start session"
   branch session1
   checkout session1
   commit id:"clone"
   commit id:"clone done"

```