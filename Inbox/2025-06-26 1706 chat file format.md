
>[!tip] Created: [2025-06-26 Thu 17:06]

>[!question] Targets: 

>[!danger] Depends: 

the napp for this would be a jsr module ?

would run server side only

client might pull in the schemas.

use the ai sdk for types and schemas.

transcludes are our own pointer / format.

each folder needs some metadata to summarize things like the permissions, who is involved, message stats.

if its a chat between multiple people, then you all have a copy, and you use transcludes to keep everyones versions up to date.

so each message will have a timestamp on it ? and a ulid ?  the ulid is the filename.  clients can only post increasing messages.

translucudes have a repoid, which is the repo that created the transclude.

capturing token usage for billing.
- stream down the token usage so it can be seen updating live as a type of progress
- when tool calls cause usage, these also get updated, so we need a standard notion of cost across the platform
- save the usage with each message
- upon completion, update the ledger with the users cost ? and link that to the activity that occured

So to get the monetary burn, we would need to look up the ledger entry and translate that, rather than storing that direct with the message ?