
>[!tip] Created: [2025-08-08 Fri 15:43]

>[!question] Targets: 

>[!danger] Depends: 

an mcp server that can be used to publish or update your web page.

handles the dns provisioning and other types of operations.

It is important that we connect our tools up with mcp since it allows people to adapt their existing comfortable and context laden AI workbenches to connect to our services, which is warmer than asking them to start cold.

It really costs us nothing to switch to be compatible like this.

Web pages have a standard structure, and some templates like wordpress, also they have a little js to keep checking the server for changes so they instantly update.  Might be an SSE to some other api that triggers when reloads are expected.

The page itself can have an mcp server inside it that can be communicated with.

So even our own landing page should be a static page that we used an mcp server to provision and deploy, where it used the dist folder of a given repo, and it subscribed to new commits, and when they occur it fires off a new build.