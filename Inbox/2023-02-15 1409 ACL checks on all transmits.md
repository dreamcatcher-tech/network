
>[!tip] Created: [2023-02-15 Wed 14:09]

>[!question] Targets: 

>[!danger] Depends: 

ACL should be checked every time data moves, since a change in the ACL should be honoured immediately.  Having socket chains that all actions route thru ads some pulse delay.

If the socket moves inside the complex, then there may be no pulse delay at all, since they can all be signed as one.

Sockets is a better option since we can see everything the client did.

Sockets could be made to be the senders burden, where we

Sending the full transmit chain all the time

So this means we only allow in one chain at a time, explicitly, and we don't need the full chain, but you cannot talk to any internal chains without starting up one of these sockets.