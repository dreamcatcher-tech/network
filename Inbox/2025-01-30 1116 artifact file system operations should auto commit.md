
>[!tip] Created: [2025-01-30 Thu 11:16]

>[!question] Targets: 

>[!danger] Depends: 

If we wrap the local filesystem access, then an app that just uses traditional methods of filesystem access should have its changes auto commit when it returns.

This is a compatibility or laziness layer.

You can still use our testing tools to modify the local filesystem for testing with.

Writes that occur do not store the full written amount, they just store a hash of the data, so it can be checked for repeatability, more as a correctness thing - in production it doesn't matter if it writes differently, as a read that relies on it will error anyway.  So we might not even care to record that the write happened, since it really doesn't affect anything.

But in development, it is helpful to error on this.