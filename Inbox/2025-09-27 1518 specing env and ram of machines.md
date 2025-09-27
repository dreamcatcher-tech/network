
>[!tip] Created: [2025-09-27 Sat 15:18]

>[!question] Targets: 

>[!danger] Depends: 

when they write to the registry, we need to also write what ram they're running on, and with what env vars.

? how can we know what is an env var and what is a secret that should not be shared ?

the easiest way, is to manually spec them when each container boots and writes its image down.

then read these in, using machines api vars, and add them to the call we make.

env can be a list of strings we are going to pull from the current environment.

Some might be permanent ?

So actually, the env vars we supply should be at the hypercomputer level only, and never be used locally in the machine.

if they were hard to set any other way, then they should be set in the dockerfile.

there is no place where we could know how to decide between setting one env var or another, since we provide a generic interface driven platform.