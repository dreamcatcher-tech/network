
>[!tip] Created: [2025-03-01 Sat 09:00]

>[!question] Targets: 

>[!danger] Depends: 

We can use the bind function in async local storage so that we can create a version of a given napp function that has access only to specific context. The other way that we could do this is to use complete function isolation and actually use a global symbol that we'll use to hook the context out of. In this case, the context is the Artifact object which gives you a way to interact with the host platform as opposed to simply having your arguments and basic file operations which say you know it's really just your own branch that you can access. So if you want deeper platform access you need to grab the Artifact context. 