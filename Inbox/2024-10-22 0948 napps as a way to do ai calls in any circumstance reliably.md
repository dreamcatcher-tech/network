
>[!tip] Created: [2024-10-22 Tue 09:48]

>[!question] Targets: 

>[!danger] Depends: 

As more code gets replaced with AI, we need secure, repeatable, sandboxable ways to call the ai and know it was side effect free.

Currently if you want to call openAI you need an api key and to make some network calls, which is not easy to set up, and is prone to abuse.

But using mini versions of artifact to run the calls, they can be entirely sandboxed and only allowed to make specific api calls, and the calls are replayable.