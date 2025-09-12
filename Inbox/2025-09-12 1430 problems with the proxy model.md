
>[!tip] Created: [2025-09-12 Fri 14:30]

>[!question] Targets: 

>[!danger] Depends: 

some web pages expect to be able to use paths freely, but we have this port parameter that seems to really get in the way, plus we want to be in charge of pathing.

ideally we'd make it so that the cookie gets set, and then after that, every request sends the cookie so we know how to redirect them.

we could make agents be referred to by very strict names, and then just have long paths in the dns names.

we could pass the agent in as a url parameter, but this starts to clutter up the params, and we might collide with an existing site.

if we just get one agent up with everything working as a proxy at root, then we can solve this problem later.

if we used an iframe tunnel, then the comms could pop out straight on the agent, as tho it was legitimately serving the page, all the port requests work, everything.

? what if I ran the browser server side, and pointed it internally at ports ?

other option is to use the face itself to manage its fan out, so that each face can only be hit on a single port, and then it manages its own fan out somehow ?

agent names then have two spaces in the names separating them, and then every port is forwarded to the agent.

or if we only roll with ttyd, we can proxy ttyd reliably, so that works just fine.
these other things are a bit fancy.

so now each container is exposed on the internet, and needs to be aware of auth before it lets anything connect.

VPN in, and then you are authed to a certain computer.
We could say that, for anything that isn't http, that you must vpn in ?

a browser extension that injects auth for all the non standard ports you want to connect on ?

use a service worker on each page to rewrite requests to put auth header in there ?

make the agent names hash based so they are secured by the fact that you even know what they are ?
so in the top level browser, you see the full agent name, but in the iframe you see the scramled name, which is used to bypass auth.

we could use cookies, and set them on every root domain, and across multiple ports ?
or, the root domain sets them ?

so have an auth proxy on each container that checks the auth cookie.

encode the port in the dns wildcard name, which dictates how we terminate the connection.
no, because the running service expects to modify ports.