
>[!tip] Created: [2024-05-27 Mon 15:33]

>[!question] Targets: 

>[!danger] Depends: 

Due to race conditions, we might be able to allow pierce to hit a chain with no head.

If this gets called on to execute tho, the error would never make it back, rather than never making it in.

If the head is changing rapidly, we shouldn't cause the pooling to wait.

If the head doesn't exist, bail