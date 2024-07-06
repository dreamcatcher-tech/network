
>[!tip] Created: [2024-07-06 Sat 11:59]

>[!question] Targets: 

>[!danger] Depends: 

When this gets pooled, then as soon as the commit gets made, we automatically try to do the commit of the recipient, so we do not need the relay to go thru the queue again.

The queue delay is the price of reliability and scaling - it seems to always have an overhead, so we just need to call on it only when it is useful.