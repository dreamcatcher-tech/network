
>[!tip] Created: [2024-10-16 Wed 09:40]

>[!question] Targets: 

>[!danger] Depends: 

To know that the napp has upgraded, something needs to check or watch to see if the published version has changed.

We could periodically check, or check lazily every time there is an action then raise up a flag.

Ideally we would check for an upgrade before running any actions and do the upgrade first.

napp upgrades are a single atomic step, so you can't get your running system into a partial state.

On disk formats would need to be handled ?

Can test the last handful of messages inside this napp and make sure there are no errors ?