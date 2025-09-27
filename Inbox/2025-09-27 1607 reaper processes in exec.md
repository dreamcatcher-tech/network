
>[!tip] Created: [2025-09-27 Sat 16:07]

>[!question] Targets: 

>[!danger] Depends: 

periodically, we would run a sweep to clean up orphaned machines ?

Also periodically, we would see if any machine has not heartbeated ?

machines that indicate idle will get suspended by us.

machines that can declare themselves shutdownable ?

if a machine was allowed modify it's own exec instance ? or we leave that up to the 

so router would be responsible for waking up a suspended machine ?

router could get a machine id straight from the exec, rather than on nfs ?

nfs gives great resilience tho, since processes could crash and recovery, and still the signal would make it back to the router.

each computer time, we could also pick all the machines that had their metadata set to being for this given computer, and we just see what is missing from the exec instances.

Then we can destroy or standby the machines.

we should attenuate the fly token down for each machine, and then give each machine limited command over it's own environment.