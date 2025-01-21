
>[!tip] Created: [2024-11-11 Mon 21:00]

>[!question] Targets: 

>[!danger] Depends: 

Show how it can be run entirely on an object store backend ?

May be a way to remove the deno queue reliance completely, or, replace it with object store ?

Means all we need is an s3 api and a function execution environment, and we can provide bottomless storage at very cheap rates.

Then artifact could be more generally useful, offering atomic db operations.

Copy some mechanics of slateDB

Basically can act like a global file store, with different views of the files, that is git compatible, so everyone is familiar with it, for easy debug.