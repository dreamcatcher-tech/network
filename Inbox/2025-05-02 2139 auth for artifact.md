
>[!tip] Created: [2025-05-02 Fri 21:39]

>[!question] Targets: 

>[!danger] Depends: 

allow for the construction of custom roles that are fine grained ?
we cannot set read permissions in any way, but we can set write to be limited to certain branches, certain paths.

We might be able to set read, but that is sort of annoying.

write to the soul branch just means you can update permissions.

Could actually manage read if we denied clone ?  or it could be done only with a sparse checkout ?
just not sure where it would get used.

This data structure should be able to be analyzed by a simple piece of code that can walk it and merge it, giving you an authoritative answer as to what permissions out of all possible permissions a certain person has to a certain location. 

napp permissions need to be considered too ?
should this be per process as well ?