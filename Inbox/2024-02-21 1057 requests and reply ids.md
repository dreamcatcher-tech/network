
>[!tip] Created: [2024-02-21 Wed 10:57]

>[!question] Targets: 

>[!danger] Depends: 

how does IPC work ?

Remote Request
- needs a source and target PID for pool addressing
- needs the sequence number so it can be matched to the sequence on return

Pierce Request
- cannot have a source, since it is external, unless we name a special PID, maybe the users chain ?
- needs a nonce to guarantee pool uniqueness
- Replies come out addressed to this Request
