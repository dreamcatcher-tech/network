
>[!tip] Created: [2024-10-10 Thu 09:07]

>[!question] Targets: 

>[!danger] Depends: 

going from plain text into a structured format seems common.

Maybe the templates should be json-schema, and the records in json ?  But this loses the plain text nature of the system.

So we need a simple check loop that independently approves the template as matching the supplied data, and then do a reverse check to ensure things match.

Read it in, check it, then check the inverse.

So when converting between xml and plain text, we would 