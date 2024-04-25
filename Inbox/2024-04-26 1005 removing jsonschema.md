
>[!tip] Created: [2024-04-26 Fri 10:05]

>[!question] Targets: 

>[!danger] Depends: 

If this requirement is removed, and we rely on typescript types, what is lost ?

multilingual support is removed then.

Publishing helps should auto generate the schema from the types.

use `typescript-json-schema`

During dev, if we have ts types for an isolate already, use them, otherwise use the schema ?

The schema is good for runtime checking, so we probably want this included all the time ?

Then, at this step, we could precompile the schemas for rapid loading.