
>[!tip] Created: [2023-02-01 Wed 16:25]

>[!question] Targets: 

>[!danger] Depends: 

During the engine init actions, which is used in webdos, it is possible to use relative paths but have some other part of the app execute a `CD` or other thing that affects these initial actions.

To remedy this, we should allow the option to lock the engine by putting it in transaction mode, which will buffer all other pierce actions in to it until the transaction is commited.