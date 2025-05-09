
>[!tip] Created: [2025-05-09 Fri 14:00]

>[!question] Targets: 

>[!danger] Depends: 

The idea is to make each inbound service write what it's receiving, as well as the metadata about the receipt (like which service, which server) to a branch that is dedicated for that particular service. If you're listening for whatever domain you're listening for, the messages that come in for that would be written to this dedicated branch, which would then trigger processing which would happen in the dedicated mailbox.

For a multi-tenant situation, the domain would be represented by the repo that received the inbound messages, and in each one using the internal mailbox transfer protocol would relay those messages over to each individual that was due to receive them to make sure that mail did not cross-cut. The mail would always be stored as annexed objects. 

For each actor that is represented by a dedicated repo, there would be one branch for each of the devices that they were connecting. This allows each branch to hold things like drafts and other things that might cause conflicts, and then a central merge occurs to sort those conflicts out. 

Again, when writing, each of the drafts is annexed. Or the attachments are separately annexed from the mail message. Which allows for the messages, the attachments to be very large but also deduplicated. 

The sharding of messages should be done using a Hewlett and the shard split it picks so that it shards by day or something like that. This way, there's some sort of chronology about the messages coming in. 