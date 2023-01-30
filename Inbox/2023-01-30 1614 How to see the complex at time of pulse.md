
>[!tip] Created: [2023-01-30 Mon 16:14]

>[!question] Targets: 

>[!danger] Depends: 

If a new pulse is made, and it made references to siblings in the complex, how can we retrieve those items at that time ?

? Does the approot need to be written into each pulse, to avoid walking arbitrarily far back in time ?

Seems no other way to replay a child's context without storing the approot within it.
If its own children are newer, then it will have that data stored within it.
But anything it looked up without having a channel connection too will be relative to an approot.

So that means all relative lookups would be relative to an approot ?