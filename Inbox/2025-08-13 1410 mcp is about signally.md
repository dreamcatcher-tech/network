
>[!tip] Created: [2025-08-13 Wed 14:10]

>[!question] Targets: 

>[!danger] Depends: 

resource links are what should be used for bulk, which the rest of the application, like the jitters, uses to haul data around.

uploads of heavy data will need to be external, into a staging area, and then connected up using some kind of reference.  So generate some upload urls that let you push up.

Use a client that has service workers and other niceties to ensure rapid bulk uploads.

Then refer to that upload id when pulling in new data.