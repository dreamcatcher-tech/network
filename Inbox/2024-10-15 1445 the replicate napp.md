
>[!tip] Created: [2024-10-15 Tue 14:45]

>[!question] Targets: 

>[!danger] Depends: 

This napp takes the relicated npm package, and wraps it into napp format.

There is no NL interface in this thing.

It requires an api gateway endpoint, which manages the api keys.  It can come with a default, or you can add your own one.

It has no files storage and no state, so it returns simply json with some files.

It can be piped with an image processor napp that can take files in, and return transformations.  So what used to be isolates, is just a napp wrapping a specific library using tool style inputs and outputs.

A napp like replicate can be connected with the image napp so it does image processing optionally.

Piping napps together, like an image processing pipeline.

These pipes could run at unlimited scale, since they trigger a new invocation for every single entry point.

The napp gateway takes in the requests.
Artifact can manage scaling the resources as required.