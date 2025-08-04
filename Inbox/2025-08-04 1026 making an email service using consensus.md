
>[!tip] Created: [2025-08-04 Mon 10:26]

>[!question] Targets: 

>[!danger] Depends: 

we would run a very simple gateway service that converted all inbound traffic, which could come fromanywhere.

this gateway is reliable, and includes metadata in its actions.
it passes the actions on to a consensus group. This group handles replies back.

or, make the full smtp operation be turned into a packet when it finishes, relying on the MTA retries if there is a fault part way thru.
So the received message is put into a repo, and then triggers sent into the group that manages it.

Make low volume be free, but high volume needs different plans.

the mail firewall can read it and check you didn't do anything dumb, but also tells us if you're sending bad emails out.

The consensus groups can prove that they worked on a particular message, so makes it eaiser to audit what software and systems touched the message.