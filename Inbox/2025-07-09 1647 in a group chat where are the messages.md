
>[!tip] Created: [2025-07-09 Wed 16:47]

>[!question] Targets: 

>[!danger] Depends: 

We cannot have consensus on the messages, so we would have transcludes from each participant about what their messages were, and then each member can arrange them as they see fit ?

Or we can have a central repo, and people post their messages to that, and it decides the order ?

Who is doing the bot generation ?
The bots themselves have a view into the chat.

The bots should publish their view of the chat, so we can see if they saw a different order of chats ?

use timestamps and tiebreakers.
if we get issues with frontrunners messing with clocks
require messages get a stamp of linear order from some central authority server, where they can stamp a hash, and only then can the message be added to the chat.

Or get a stamp on their commit, which gives guarantees that the commit was irrevocable, and therefore the message too.

stampers will not allow a lineage history to break, so we get strong guarantees of correct behaviour.

The byzantine problem shifts to the stamper being non byzantine, rather than each member.

tiebreaker using the repo public key.

each message needs to show the hash of the heads of the messages it can see, so this guarantees its order ?

The chat should be a full translcude, and it should have history, so that when later messages arrive, you can walk history to know what each person could see at the time they posted their message.

prefix all messages with the transclude height they arrived in ?
means that when shared members have a transclude that has forked, we can still recover an order, but each message shows the limited view they each had.