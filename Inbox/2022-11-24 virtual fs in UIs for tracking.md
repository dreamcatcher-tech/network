>[!tip] Created: [2022-11-24 Thu 19:40]

>[!question] Targets: 

>[!danger] Depends: 

Sometimes UIs need to build virtual views of the filesystem in order to display meaningful views to the user.  The state of the application is difficult to recreate in this mode.  So if the virtual filesystem was created using the blockchain, then when events are processed, we could save them and replay them so we can see what the user is doing even when in virtual mode.

Basically each time the user does some action, such as clicking, this should cause a new block to be formed.  This is totally lost in virtual mode and needs to be fixed in the framework design somehow.