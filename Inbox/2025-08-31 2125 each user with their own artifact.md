
>[!tip] Created: [2025-08-31 Sun 21:25]

>[!question] Targets: 

>[!danger] Depends: 

Ideally they each run their own cluster and their own database.

we pack them together for economy.

so there is still a central db there, but it doesn't make new actors on demand, rather it requires one to be made.

is the router on the same domain as everything is ?

where does artifact fit in here ?

if you come in, have no clerkid, then you get pointed at the base app, that encourages you to sign up.

if you come in to any subdomain, then

we can allow you to indicate app with a rul param, as well as a subdomain.

we can use fly replay so that the routers just instantly pass the requests to the internal apps based on the subdomain in a wildcard.