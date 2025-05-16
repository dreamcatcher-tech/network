
>[!tip] Created: [2025-05-16 Fri 13:07]

>[!question] Targets: 

>[!danger] Depends: 

Because the widget interface simply gets told "latest", and the parent has no idea if it is truly the latest. It must simply accept what it is told. For this reason, it makes it trivial to allow time travel for any widget because it simply just gets loaded with some different or historical commit, and a wrapper widget around it is what is controlling its Artifact instance on the inside. 

this same thing should apply to napps that have no widgets.
this is the napp running harness, that pulls in the napp dynamically.
dynamic can be from artifact or from jsr or other registries.

how to export the graphics of a napp ?

