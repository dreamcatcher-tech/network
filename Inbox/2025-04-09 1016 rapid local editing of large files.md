
>[!tip] Created: [2025-04-09 Wed 10:16]

>[!question] Targets: 

>[!danger] Depends: 

Hauling in large files rapidly whilst also ensuring they are offsite is key to how video editing works.

Using git lfs and then running local clients that share their cached files around the network is useful.

The clients attempt to balance based on agreed sharding rules, so that each client is used optimally, and so that consumers know exactly where to go to get the data they want, without having to ask around everyone.

Ideally individual files would be split up too, so that we can pull them in from several locations at once, hopefully maxing out the network.

Each node is aware of its capabilities, regularly benchmarks itself, and also passively benchmarks by recording its performance, as well as recording the observed performance of other peers it is accessing from.

This pattern seems the same for video editing as for any other file access pattern - this seems the ideal swarm based file access pattern.  And the network could be as big as the internet, with the same balancing operations occuring.

There would also be the notion of a weak client - one that doesn't help any hosting.  Altho it might use webrtc or something to help a little bit maybe.

This is the same for warfabric, where the cell phones need to balance based on different levels of resilience and latency goals.

Super fun in the video editing work is a rendering pipeline where large compute is used in a distributed fashion.  Use the spare CPU and GPU on all the local machines to assist services.

This might become super useful as AI generative video studios take off, where they will have large data swirling around and need for massive render pipelines.  Also physics simulations.

Geospatial data, particularly realtime updated imagery is crucial.
Battlefield information, particularly multimedia (drone footage, bodycam) needs to be streamed down as an agent zooms in on a specific area.  

Caching the data close to where it was last accessed makes the discovery of it a little more network intensive.  Related data should be sought to be fetched, like the full file of something, or other files that are regularly accessed based on common patterns, where all nodes have agreed on what an average access pattern signature is, and they all prepare for it.