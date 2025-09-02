
>[!tip] Created: [2025-09-02 Tue 11:10]

>[!question] Targets: 

>[!danger] Depends: 

the browser needs some kind of agent to open up ports.

then we could use a service worker to manage this, where it repoints the data stream to go thru the agent router.

In this way, you can have live webpages that are running on the agent be visible to you.

can also be in an iframe or something, so you can vibe code and see the live reload come back.
pipe the errors back inside to the bot to work its way thru.

could provide a public server that exposed any ports we wanted to any agent ? could be done without a sw tunnel, so the ports and domains were exposed legitimately on the internet, so can be used for hosting pages or other apps.

Or we can tunnel https terminated info straight to the host on a configured port, but it needs to say this in its config. Or use a convention.

can shunt levels, so https://my-app.com/agent-0/?port=4534 would cause the proxy to proxy the port on the particular agent, making it serve whatever was on that port.

Useful when starting dev servers.