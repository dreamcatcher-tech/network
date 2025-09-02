
>[!tip] Created: [2025-09-02 Tue 17:41]

>[!question] Targets: 

>[!danger] Depends: 

The browser has a single ws connection to the agent router, and the router than exposes that as an mcp server to whatever host they are connected.

the mcp server is actually running on the agent, with one instance per view that it has.

this tears down the tools when the ws socket closes, and the tools are fulfilled based on the permissions in the browser.