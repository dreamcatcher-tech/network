
>[!tip] Created: [2025-06-17 Tue 11:00]

>[!question] Targets: 

>[!danger] Depends: 

have a tool that lets us roll back and forwards between frame versions, so we can test for bugs easily.

same tool should let us change the way the frame resource is loaded.  so can switch to a dev url.

but this is not really needed once we start loading the frame from artifact directly.

also a window setting to change the url of the frame, so we can fire up local versions to poke around with.

this is probably best as a config file that is stored in the users profile, which represents the configuration of the base app, so they can lay it out any way they want.

whenever latest gets called, we should start a subscription, since we are likely wanting to call this again at some point ?  makes it cheaper than calling multiple times ?