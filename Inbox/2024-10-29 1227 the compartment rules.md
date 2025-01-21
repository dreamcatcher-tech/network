
>[!tip] Created: [2024-10-29 Tue 12:27]

>[!question] Targets: 

>[!danger] Depends: 

One compartment per napp ?

Or we could make it one container per napp entry point, rather than separating every single one ?

It could be safer to isolate every single napp tho ?

Do jsonfunction calls going between the napps get logged ?
Yes, they should, since this is a lot of information to glean, and allows us to upgrade the packages by replaying the actions.

So they need a separate compartment.

Wrapping the layers of the actions means that any implementation enters at a specific layer of the execution architecture.