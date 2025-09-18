
>[!tip] Created: [2025-09-18 Thu 11:38]

>[!question] Targets: 

>[!danger] Depends: 

if the nfs server held checked out git repos and could provision new ones instantly, then boot time of a machine can come down to:
- having suspended machines that are blanked
- loading the codex agent.toml file.

have a special boot cycle that power cycles the machine and then suspends it, so it is blanked but instantly ready.

since the toml files are in nfs, this boot is near instant, as just an NFS file read.

because the working dir is instant and nfs, it makes it super quick to boot.

starting an agent now has the option of sharing the same working dir, or starting in a new branch, or being readonly.