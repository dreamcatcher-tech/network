
>[!tip] Created: [2024-01-31 Wed 15:07]

>[!question] Targets: 

>[!danger] Depends: 

The isolate path should be able to come from anywhere on the web - anywhere that deno supports.  The chain should allow lockdown to certain isolates by default, like a vendor file, or some preapproved list, but it should be able to pull from the web.

This would store the file on chain, so you could analyze what got pulled, and so that it was always the same thing that got reused.

Repeatability needs only store a hash - might optionally store the whole file, for completeness, else cannot run it.

We should also hashlock it, so the url errors if we get a different version, which would need manual overrides.