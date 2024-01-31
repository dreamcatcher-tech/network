
>[!tip] Created: [2024-01-31 Wed 11:42]

>[!question] Targets: 

>[!danger] Depends: 

Can await a key that signals completion of the enqueued task, wherein the originator would carry on running.

A listener that died part way thru needs some kind of recovery.

Branchnames would be stored in kv with the tip assosciated with them, for watchers of latest splice.

Interface is to submit a github PAT and a repo name, and we will begin the processing of it.
It is a REST interface, with responses streamed back to the consumer.
It can do IO and also support queries using splices.

Subscribing to the latest changes can be done by supplying the last thing you know about.
Difference with splices is they are a data structure specifically for receiving partial streaming updates, rather than the full blocks themselves.
Subscribe also takes 
Streaming responses should auto recover, since the isolate might die, so you have to request again.

Write permissions and signing could be handled inside the repos, with an access.md file

## Streaming splices
User would send in a message telling some IO to execute.

If you wanted splicing, simplest way is to just write to the kv with each transient splice until completed.
BroadcastChannel can be used to stream out transent splices.
Broadcast might be lost, but that is fine, as it will recover when the final splice is committed on the kv store.

Otherwise each enqueued request could include a uuid for the streaming responses to it, which means that it can be watched to get updates to the key as it streams the latest patches in.

The worker would listen to the key that told it to start streaming or not, like a props value against its invocation base.