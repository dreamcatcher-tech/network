
>[!tip] Created: [2023-01-30 Mon 11:55]

>[!question] Targets: 

>[!danger] Depends: 

In an action based app, your are very limited in what can be changed, which is a design goal of the system.

In PR based systems, where you can PR anything that can pass the data consistency checks, then you are free to extend an existing application with anything you like, so long as the data checks pass.

Devs may opt to check the actions before the PR, or just the state - the state only is more liberal than replay.

Like GraphQL but for executing logic.