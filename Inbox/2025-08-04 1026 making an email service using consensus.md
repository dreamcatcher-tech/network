
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

we can remove much of the huge burden of running mailservers, which is spam detection, since we can run llms and use services or tools to run comparisons, and also be a good citizen and register bad mail.

Also we can police mail going out that it isn't spam, so our mail servers stay clean.

we dont' have to see the message, but a host that we trust needs to be part of the running of the check.

self sovereign, since portable, resilient, decentralized.
but the issue with all these spam services, is that they tried to meet the fuzzy expectations people have about no spam with mechanical things, like using reputation

> but the key is only the content and the meaning of it matters.

so if we are using LLMs to check if a message is spam, and publishing bots that know more about more what to watch out for, and have a system where the LLMs can cooperate and share examples while removing PII from the emails, then we can stop spam.
Also the LLMs can undertake the legal filings to hammer the spammers and the servers they use.
So it is a wikipedia of shared knowledge and shared action that replaces all the heavy email infrastructure, makes the emails servers safer, and provides a better quality of spam filtered email, that jacks straight in to LLM pipelines anyway, since it basically entered as an LLM pipeline.

they didn't realy work at stopping spam anyway.

so llms could be the end of spam.

people would compete to make the best spam detecting bots that run over standard datasets, with the internets latest spam.

then have this spam processeor that is custom set up and running for you alone, based on your business rules.
Setting up a catchall, or multiple forwarding, or doing quite a lot of gymnastics with mail flows is easy now - just add the rules in natural language.

Key si being able to simulate them and debug them, these rules.

Being able to chat to the mailserver, at a personal level using NL, and ask it about any spam that might have bounced, and have it go thru and check what got deleted even bfore you received it.  The server becomes like a person, and you can make api calls, but you can also chat with it naturally.

go talk to it about never letting thru antyihgn from a certain address unless it 'looks important'