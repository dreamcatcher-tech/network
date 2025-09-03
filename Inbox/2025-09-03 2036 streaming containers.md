
>[!tip] Created: [2025-09-03 Wed 20:36]

>[!question] Targets: 

>[!danger] Depends: 

SOCI and other projects seem to allow massive images that stream down from a registry.

we could also use NFS as one of the layers in the container so that it booted and then overlaid NFS to pull in arbitrarily large images on demand with some disk caching enabled.

streaming images where it checks local containers first seems best tho.
or pulling in layers from registries using a range parameter so it only pulls a small amount.

https://github.com/containerd/containerd/issues/3731
https://github.com/containerd/stargz-snapshotter?utm_source=openai

containers could be run on ipfs.

definitely the repos and workspace should be set up as NFS which makes them instant to checkout, but also can be shared between agents, to share the same workspace.