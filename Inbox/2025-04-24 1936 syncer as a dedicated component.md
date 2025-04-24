
>[!tip] Created: [2025-04-24 Thu 19:36]

>[!question] Targets: 

>[!danger] Depends: 

[[2025-04-24 1505 sync priorities]]
[[2025-04-24 1952 filtering fs watches]]
[[2025-04-24 1937 rapid syncing of git repos]]
[[2025-04-24 1415 blobs in the browser]]

It's almost like the Syncer is so foundational to turning Git repos into usable UIs that it might be abstracted out for anything that deals with a Git-like structure and wants to stay up-to-date. I guess it would sort of be like a way of doing very high-frequency mini pulls where it's an efficient way to pull down what the Git repo has changed. 

It's almost like there should be a library for this dedicated purpose. It should be able to be abstracted to have any kind of DAG that it can read and some basic functions on how to get the hash-based content from a server. Once it's got it, it should be able to assemble these basic functions like objects, strings, and binary data. It should also allow the subtle ways that a browser might want to construct a light view of any given data source when it requests something from a server that should be able to include a distributed source, so the browser would see it as just one but under the hood some kind of a worker is going around sampling from the network. 

It should:
- be able to always surface as much data as it has received from the wire. 
- Cache all of the objects that are pulled down in a weak, easily ejected way making use of the browser cache mechanism. 
- be able to lazy load, where it doesn't load items until it needs them, basically paginating with a cursor