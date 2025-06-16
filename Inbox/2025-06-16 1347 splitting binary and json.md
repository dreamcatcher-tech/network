
>[!tip] Created: [2025-06-16 Mon 13:47]

>[!question] Targets: 

>[!danger] Depends: 

invokes would be much nicer as pure json plus the uint8arrays being sent as files.
this means a multipart form upload.
responses would be nice as being the same multipart thing, or sse's where the first event is json, and the rest are the binary files ?  Makes it easier to debug the stream.