
>[!tip] Created: [2024-12-26 Thu 15:13]

>[!question] Targets: 

>[!danger] Depends: 

Being able to let a napp call any possible napp - how should this work ?

A special or restricted flag in the `napp.json` ?

Do dependencies become available to be called by the napp, using the api ?

Or can you just import napps you want to call in the code ?

Calling by napp will allow napp debugging, and will make it so your llm agent could call these tools too maybe ?

Also you can reference these dependencies inside the config file.

So deps is probably just part of the config dependencies, and the modules can call other napps easily.

So do I need a napp executor / importer just to be able to do the simplest of napp to napp function calls, when having deps ?

Or should I start with just js imports ?