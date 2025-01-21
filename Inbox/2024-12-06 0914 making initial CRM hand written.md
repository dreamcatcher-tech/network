
>[!tip] Created: [2024-12-06 Fri 09:14]

>[!question] Targets: 

>[!danger] Depends: 

If it is just jsonschema based, then we could make the first one by hand, and get useful results out of it ?

This could get us up and working quickly, and then the interface on top can be very light.

Make the json schema writer be a tool call that errors when the schema is faulty.

Make the updating of records be a tool call, using the schema as its format, and make it be strict.

ALSO seems that we could make the crm be entirely frontend AI, using artifact as merely the data store at the start, and then pack on some intelligence features as we go ?

If we give it tools that make remote calls in to artifact, then we do not need to have all the chats be managed by artifact at the start.

Also the execution could be on vercel, and then the result posted to artifact.

We don't need the parallel AI queries immediately to be useful ?  They could be raw filesystem updates, one at a time.