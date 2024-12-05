
>[!tip] Created: [2024-12-06 Fri 09:14]

>[!question] Targets: 

>[!danger] Depends: 

If it is just jsonschema based, then we could make the first one by hand, and get useful results out of it ?

This could get us up and working quickly, and then the interface on top can be very light.

Make the json schema writer be a tool call that errors when the schema is faulty.

Make the updating of records be a tool call, using the schema as its format, and make it be strict.