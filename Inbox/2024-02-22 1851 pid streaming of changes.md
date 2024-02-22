
>[!tip] Created: [2024-02-22 Thu 18:51]

>[!question] Targets: 

>[!danger] Depends: 

Each pid should have a broadcast channel for the file changes that are live occuring.
Anything else should be fetched using GET.

So as the runner is writing down the chat session, 

A get for something that is being modified will send down as much as it knows, and will send down the patches it has too.

But this streaming prolly never works for multiple readers ?
Problem is the writer cannot easily 

Could use the broadcast channel as request reply, where it gets requested for the latest thing and so it can generate the patches on the fly.

Partials could be written to disk as we go, which can be used as part of the final commit.

So by default it will stream out patches, and if you request a patch range, it will give it.
Means you can join the party late, and it will catch you up.  This is not expected to be a heavy channel.