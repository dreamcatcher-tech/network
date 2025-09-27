
>[!tip] Created: [2025-09-27 Sat 15:18]

>[!question] Targets: 

>[!danger] Depends: 

when they write to the registry, we need to also write what ram they're running on, and with what env vars.

? how can we know what is an env var and what is a secret that should not be shared ?

the easiest way, is to manually spec them when each container boots and writes its image down.

then read these in, using machines api vars, and add them to the call we make.

env can be a list of strings we are going to pull from the current environment.

Some might be permanent ?
