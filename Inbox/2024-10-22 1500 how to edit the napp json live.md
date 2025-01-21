
>[!tip] Created: [2024-10-22 Tue 15:00]

>[!question] Targets: 

>[!danger] Depends: 

When iterating on a napp, we should be able to modify the napp as part of the prompting process.

This would require an on disk representation of the napp that was being pulled in by the container runner.

If the napp respresented a folder where the code was pulled in from a jsr page, and so when it ran, it just went and looked for this code directly, then this could work.

jsr is good since we want to release good solid tested js code, and a package registry is the way to do this.

Every package management system is already an expert at this.

Then when we want to modify the code, we can do that on platform at some later date, but either way, once improved, it needs to be hoisted up somewhere.  jsr is a good intermediary step, before we can have our own host.  It may always be a good place to put deno code as a safe stable placement.

Hopefully they can move to running raw commits, or may be we can do that before them.