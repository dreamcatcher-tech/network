
>[!tip] Created: [2025-03-08 Sat 15:49]

>[!question] Targets: 

>[!danger] Depends: 

At some point, we need to fish up all the implementations and match them somehow to what all the napps said. We might maintain this in a separate registry so that the napps themselves can be pulled in as just schema, but we have this registry of the module that the napp specified which is what we know how to look up.

Now we can either look it up manually (sorry, dynamically with a dynamic import) or we can require it to be registered ahead of time so that it's always there when it gets called upon. This would do basically call this thing would give you back something that matched the function implementation of the schema that you put in, which means that it can be used to load a variety of ways as it suits us. 