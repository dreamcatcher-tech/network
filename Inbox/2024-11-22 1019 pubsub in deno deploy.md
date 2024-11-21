
>[!tip] Created: [2024-11-22 Fri 10:19]

>[!question] Targets: 

>[!danger] Depends: 

If we use broadcast channels, and have a way to make the requests all have a single ID with some kind of pathing so they can be scoped, then the browser can receive streamed messages.

If the messages had some tolerance of missing a message ?
Could signal a catchup message which would send out all the text up to that point ?

The final version is the complete text coming out of the database.  Otherwise the streaming is kind of best effort.

If a missed message signal goes out, then the sender will restart a new stream with an initial burst.