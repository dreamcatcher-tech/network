
>[!tip] Created: [2025-02-22 Sat 12:08]

>[!question] Targets: 

>[!danger] Depends: 

If we make an action type that is fire and forget, as in it has no response, then we can do even streaming by sending in a stream request action, which needs some flag set to indicate the other side is expecting events, and then we can send back a stream of these actions without clogging up the channels.

Sending back the reply to this action is the final closing result, which might be an error.