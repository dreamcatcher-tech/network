
>[!tip] Created: [2024-04-29 Mon 16:19]

>[!question] Targets: 

>[!danger] Depends: 

Allow actions that require no reply to be sent back to the sender, who will get ack by other means.

Sessions let pierces come in from the outside world.  They then get relayed on to other places in the system, often to multiuser app sessions.

The sender does not need to get a pierce reply back, since they would have read access to the session.  So when the pierce occurs, we can avoid the extra commits and allow the reply to be skipped.

So the pierce will be acknowledged as soon as it has been committed.