Being able to set a whole customer collection to read only is useful.  The write controls should be set per user or per group, and should be inherited.

So each chain has an ACL flag that gets set, then each child, before accepting changes, looks up the permissions tree until it gets to `/`.

Setting the flag in a child overrides the parent.