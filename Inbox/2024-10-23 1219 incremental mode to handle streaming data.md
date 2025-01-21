
>[!tip] Created: [2024-10-23 Wed 12:19]

>[!question] Targets: 

>[!danger] Depends: 

For some websocket calls like to deepgram, we need to send many small packets, which is inefficient using the request response model of artifact.  Instead we could opt to do keyframing, where the smaller packets are sent using json format but outside of the snapshot mechanism, and periodically a keyframe json object is commited which includes a summary of the stream to date, making the stream replayable, but also avoiding the high overhead of committing for every tiny thing.