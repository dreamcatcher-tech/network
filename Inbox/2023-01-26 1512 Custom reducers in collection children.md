
>[!tip] Created: [2023-01-26 Thu 15:12]

>[!question] Targets: 

>[!danger] Depends: 

In Manifests, we need to have a custom API to perform operations on each child.
This means that we should allow any covenant at all to be the child of a collection.

Collections should have the `@@UPGRADE_CHILDREN` function.  Upgrades should be done lazily.
Collections should use a covenant as a way to specify the template of their children.

Instead of a template, collections should hold reference to a covenant which specifies what they will hold.  Datums are a special case where the collection may manufacture the covenant to use inside itself ?

If template was used as the state, but the template was actually an installer, including all the keys in a DMZ, so that anything could be specified in there.

Manifests need to be hardlinked to the customer array at the time they were created

Shortcut can be to route this action thru the parent collection, then down to the child.

May make a new type of collection so don't break things with this new version.
