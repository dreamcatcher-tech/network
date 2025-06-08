
>[!tip] Created: [2025-06-08 Sun 12:09]

>[!question] Targets: 

>[!danger] Depends: 

when the frames are built, the dev loop should be just doing a build that doesn't include the vendor bundle, and this is then ready for production.

production and dev become the same cycle then.

make tests that work on the built bundle, so tests that run in browser an feed back to the coder to fix.

also help by using an agent to poke at it, and the agent helps write some permanent tests.

