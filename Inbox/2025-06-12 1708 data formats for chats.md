
>[!tip] Created: [2025-06-12 Thu 17:08]

>[!question] Targets: 

>[!danger] Depends: 

They have to be transcludes.

self / voices / internal chats:
one folder per chat

How do we make agents receive messages ?

For any given repo, the chats are stored in a normal place ?
These would show up as events in the repo ?

self is just the self repo id.
all other agents, the chats are filed under the repo id.
Then a folder for each chat name, which is a ulid with a .info.json file.
Then each chat is a set of json objects representing each item in the cha.t

Does this format work if there are multiple participants, like in a group chat ?
the group items would come in as a transclude, and then get copied into the chat folder ?
Is each participant, keyed by repoid, in its own folder ?
Or is each message just ordered, but also has an id for its origin ?
So this means that when I generate a message, I write it to the disk, stamped with my own repo id.
The transcludes can include the objects of other participants, and if we have the object we just skip it.

This might be possible to do p2p chat where the peers are gossiping the messages from everyone else between them by way of translude, where they build up a set of objects that are common between them all.

Point to the previous transclude when you say anything, to allow for catchup and resilient verification.

Is it compatible with multiple branches representing multiple versions of a given chat ?

We need a way to rapidly change these formats as we learn more about them ?
chats include transcludes for context.

So we would wrap the ai messages in an envelope, that lets us say what purpose the message was.
Like chat between people would be typed a certain way ?

If the ai messages are zod schema verifiable then that means we can turn them into json.

tool calls would be translated to threads on the process branch, so we know where they're being executed.  Might just name them after the tool call, which means we can reduce the number of unique named things we have to use.

jobid as a dht key ?
quite good, since the workers are the ones that keep the dht alive ?
This might be done with a jetstream node for each discovery ?

Execution:
We'd send up the requests over the protocol that would trigger a run in the receiving server.
Then upon completion, we would write that down to disk.


```
/
  chats/
    self/
      ulid-1/
      ulid-2/
    actor-pubkey-1/
    group-ulid-1/
```

inside each folder, there are json objects.
each file is numbered to indicate order.  Pruning is just deletion of messages.

```
source: self | pubkey
napp: ?
```

basically, how do we handle chats that were sourced from us ?
where would the sysprompt go ?  be part of the chat config ?
how about context of the transcludes to include ?

how do we relate the chain of transludes to the chat file structure?
feels like the transclude data format could be just stored verbatim as the messages should fall out ?
how to verify the transclude chains ?

? what should make a group chat id ? should it be entirely in the eye of the beholder ?

replies to messages:
have a message hash that it always points at ?
or a message id that is shared or agreed on by all participants ?
a message hash, and each message therefore needing nonce or uniqueness, like a timestamp plus a ulid ?
Sender picks the ulid, and receivers choose to accept if it matches their logic checks enough.

what's the different in a reply vs a transclude that includes another message ?
Nothing really - can just be presented a certain way, and can allow messages with multiple transcludes.
The transcludes can be modified as required too.

messages would need to come in in order from others.
if we only locked the transcludes being the right heirarchy.
then the messages can require no further checking ?
This is better than having a separate logic check on the messages ?
message numbering could be done by the recipient ?
This means there is no single consensus'd view of the conversation.