
>[!tip] Created: [2025-05-09 Fri 09:23]

>[!question] Targets: 

>[!danger] Depends: 

need some rules for when to make a pack or not, since iso git seems to not do partial reads, as in not read the pack file only exactly where it needs the object, preferring to read the whole thing in.

also there is no multi index it seems, so we cant index the indices.

if we set the pack sizes right, this can be quite efficient.  We need to avoid having say, 50 mb+ pack files.

the latency would be epicly low if we packed all the time.

a commit could be designed 