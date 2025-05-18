
>[!tip] Created: [2025-05-18 Sun 15:28]

>[!question] Targets: 

>[!danger] Depends: 

This might not be a problem if we exported a component where that component could be pulled in from another module, perhaps. 

The privy wrapper could be kept entirely independent of the Artifact wrapper. 

Because the Prairie module is only used for logging in and it's always higher than the Artifact module, we could make this be the top-level Frame host. Which means it can be an independent project that is pulled in automatically at the top. 

communicate by a small custom message service where all we need back is the status of the app. 

A top-level parent frame. If it has no credentials stored, it would present this login frame as the main frame. When the login is complete, it would load its Artifact frame, or it would be the Artifact frame. 