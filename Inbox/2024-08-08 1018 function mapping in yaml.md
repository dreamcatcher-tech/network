
>[!tip] Created: [2024-08-08 Thu 10:18]

>[!question] Targets: 

>[!danger] Depends: 

The schema definitions can be done directly in the frontmatter, keeping everything together in one place.

Spec to use the function raw, but also can do a mapping.

Make an anything function, where we can call a function that is intended to be interpreted by a halting action in some way.

When a platform change rolls out, we need to check all existing agents, and need to try make modifications.

If the agent checker had a platform manifest that represented the version of the platform, and listed all the isolate functions available, then it can attempt to update the agents each time there is a platform update.
We should auto generate semver based on how these schemas change, and indicate the changes to the api in a changelog.
This summary should be AI generated to ensure it is compact for each isolate ?
This would be part of the isolate app store ?

Seems too hard to incorporate triad scoping into each function, so we need to find ways to scope around that.  Cross process operations should be quite rare.

