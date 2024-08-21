
>[!tip] Created: [2024-08-19 Mon 15:57]

>[!question] Targets: 

>[!danger] Depends: 

The tools could be defined as parameter schemas and output schemas.

The input and output schemas can be checked when the functions run.

Types can be inferred from them when in use.

Just makes the api while programming a little less helpful.

Unless we made jsdoc comments that went over the top, so that we could manually write these in.  But this duplicates comments.

But what about when we what multiple types of api in the same isolate ? like an admin version and a regular version ?

Maybe just give schemas for the parameters and the returns, and then ensure that these two map, and then can generate the TS function api, as well as the functions type from that.

Then use typedef to document the isolate function calls where required.

Turn the zod schema into json-schema.