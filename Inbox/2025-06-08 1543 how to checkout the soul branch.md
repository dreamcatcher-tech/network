
>[!tip] Created: [2025-06-08 Sun 15:43]

>[!question] Targets: 

>[!danger] Depends: 


seems we might need a special set of functions for this, since we don't want to block branch names, since you could have a regular branch named whatever we set soul to, but refering to soul is not just a name, it is a context.

and so how would this affect how we track these things in transcludes ?

soul is a special case that can only be read from by creating a scope to read it.
this will mask another branch that is not the soul branch.