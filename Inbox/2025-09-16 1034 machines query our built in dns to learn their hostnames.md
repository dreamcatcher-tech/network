
>[!tip] Created: [2025-09-16 Tue 10:34]

>[!question] Targets: 

>[!danger] Depends: 

if we have a gateway that does the auth and the dns wildcard mapping to private machines, then that service should allow machines to query their own hostnames.
they would hit that service any time they wanted to know their dns name.

each machine would have only private listening ports, since the docker machine would not expose anything anyway.