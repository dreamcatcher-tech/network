
>[!tip] Created: [2024-11-27 Wed 10:33]

>[!question] Targets: 

>[!danger] Depends: 


need a place to just show chats with some internal components and artifacts.

LibreChat
Fully featured
But huge numbers of files
Not serverless first.
Huge overhead to turn on all the features, as modularity is hard
To do our core components it is overkill
Unlikely to be secure
If this could be done modularly, in a serverless first way, then we could dreamcatcher it ?
has about a million databases connected to it, so we need to get that down to interfaces
Looks like a very unstable prototype that does everything, and will struggle to hold together.
It shows how a program should be simple to one click deploy
So keep a note of the features we need in the UI, keep using the vercel one, until we need a new one.  Also keep note of how to convert libre into this blockchain version.
? is it enough to deliver the crm on ?

https://github.com/Yonom/assistant-ui 
This is quite good, nice and clean, but doesn't have the fork ability like librechat.
This would be the choice if librechat becomes too hard to strip bits out of it.

https://github.com/langchain-ai/open-canvas
Good use of artifacts.


Seems like what we need is anything that is easy to host, and we can connect our api on deno up to in the backend ?  The choice is really how fast can be we get our background api up ?  how well can we integrate the stuckloop, and how easily can be make breaking changes ?

If we provide a drop in replacement for the vercel AI sdk, or act as a middleware, then we can supply files and other things as a service ?

langsmith and langchain seems a good way to intercept and make agents ?
Maybe our approaches are too complicated ?
Do we care about any of the AI stuff except that which makes the dreamcatcher work ?

Should we provide an AI that does attribution ? figures out contribution, as an api, then does attribution.

contribution as an API
generates impact crystals.

Attribution as an API.
Optionally repeatable, and public.
DAOs use this but run them repeatably, publicly, and across multiple trust domains.

We charge for these calculations, at a flat rate, but we charge a cut if we are in charge of funds.  Our output says what you should pay us and subtracts what we charge.  Or you can choose just to pay us based on our attribution calculations.

Allow anyone to run this self hosted, but it will generate a fee for itself when this happens.

Then we go about using this system to enable people to cooperate faster.

