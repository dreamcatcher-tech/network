
>[!tip] Created: [2025-09-03 Wed 09:51]

>[!question] Targets: 

>[!danger] Depends: 

if we have one stablish version up, then we can test the next version by deploying a test app in fly, and then running exercises against it, from within the last known stable version.

Once accepted, release, and everything upgrades.

Then again, work on the next version by building the docker images and pushing to the registry, then deploying test apps, where the components are worked on.

the complete test results should be given back to agents to think about.
plus full teardown / restart ability so that a watching agent can continually clear and create their own environments.