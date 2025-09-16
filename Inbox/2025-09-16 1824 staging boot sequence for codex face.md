
>[!tip] Created: [2025-09-16 Tue 18:24]

>[!question] Targets: 

>[!danger] Depends: 

If we split it down into some discrete stages, it would be easier to reason about.

then we can start testing each stage, rather than being sloppy and having each stage be somewhat clobbered by other changes.

so if we made one file per stage, we can keep the work focused.
make a test for each stage file, so it should hold together longer.
actually we have to do this, since provisioning off an agent file is much more complicated.

sequence is:
1. gather initial params
2. 