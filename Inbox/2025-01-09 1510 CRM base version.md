
>[!tip] Created: [2025-01-09 Thu 15:10]

>[!question] Targets: 

>[!danger] Depends: 

browser widget that just pulls down the files from artifact raw, and processes them.

Doing an edit is a napp request, that takes in a command object.

- read in the all the xml, with no-linger.
- convert to json
- update the artifact directory with these objects (store in one massive dir for now)
- present to the user

write
- modify the json object in one of the allowed ways
- convert the changed json back into xml, stripping all the system fields
- insert the xml back into moneyworks
- 

import may only insert the fields that changed, rather than every field ?
think need to set the 'update:true' attribute in the table name.

? whats the best way to test this with the users ?

? should we handle arbitrarily many changes at once, across different tables ?
Ideally have an 'import' element with 'table' elements inside it, which makes it easy to handle multiple kinds of import.

See if we can import just the changed fields into moneyworks first, and then only after, do all the non system fields, and only then, do the full system fields verbatim.