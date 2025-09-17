
>[!tip] Created: [2025-09-17 Wed 15:27]

>[!question] Targets: 

>[!danger] Depends: 

use a coco to generate an eth signing key, and never share it.

recovering this machine is the duty of the key management service.

the key management service runs cocos that are open source and publicly attested, and they use secret sealing to survive power losses, but they use shared crypto to allow a quorum to decrypt keys that they store in encrypted ssd storage.  or ram only for the precious stuff.

storing to ssd means that if the encryption is broken, they can have your keys.
sealing means if the seals are broken, they can have your keys.
ram is the ultimate, but its pricey - also requires more replication to attain durability.
sealing keys is next best, but ties to hardware, so needs medium levels of replication.
ssd is the more durable due to easy replication, but ssd can be exfild plus broken if the on disk encryption is broken.

we could strike a balance, were we seal master keys in hardware, or keep master keys in ram, and then encrypt to ssd, so the size is unbounded.

the encryption of the ram is also subject to breakage too.

in the event of CVEs we can auto lockdown, and then migrate.

an auto CVE watcher might see something on a trusted CVE channel, and can actively halt all cocos, shutdown hosts, until faults are cleared.  hosts could go into lockdown mode where they keep just one ssh control shell open.
people can choose cocos that are lowsec, so they want to keep running if a CVE is found.