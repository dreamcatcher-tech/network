
>[!tip] Created: [2025-04-10 Thu 18:40]

>[!question] Targets: 

>[!danger] Depends: 

We could deploy a tempo docker instance to fly and just make it run a long time and store its data on disk. 

We can use the Tigris Object Store as its backing store, but ideally we want a way that we could draw on the objects that are stored in the repos themselves to represent the traces because these should contain all the data we need to do a trace. Now things like timing might not be so relevant to store in a Git repo, so perhaps we would only store the metadata separately. 

Just to get going, storing in the Tigris object store seems a trivial thing to do in order to be able to connect up to the Grafana instances that fly.io provides. 

We could make artifact hosting be a datasource for grafana.