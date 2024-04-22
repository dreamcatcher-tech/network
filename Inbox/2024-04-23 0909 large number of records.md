
>[!tip] Created: [2024-04-23 Tue 09:09]

>[!question] Targets: 

>[!danger] Depends: 

If we split it up like git does, and use ulids as the record names, then we can make some tools for interacting with this.  These would be the bigrecords tool.

A single file would be maintained that held the mapping of the filenames of individual items.
This file should be sorted and sharded itself somehow.
For 10k customers, we might not need to shard the file.
If the file was stored sorted, then we can split it out and still have rapid search ability.
The sharded name need not change even if the contents mean it would have been named differently, so long as it is close enough to being the same.

If a fresh anonymous device turns up, how can it be granted some session activity before logging in ?

When a browser first comes in, create a temporary home chain based on the browser fingerprint.
If you then authenticate, any sessions you have created will be moved to your new authenticated chain.

When you delete your account, you are encouraged to push it all to a github repo as an export.

This home chain is where your analytics are kept.