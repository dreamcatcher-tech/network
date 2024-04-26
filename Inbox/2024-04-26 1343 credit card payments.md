
>[!tip] Created: [2024-04-26 Fri 13:43]

>[!question] Targets: 

>[!danger] Depends: 

Make a stripe service provider where the user goes thru and attaches a credit card to it, in that central place.

So the accounting is an internal service, not external.

A repo would receive a badge that said it was

When the user wants to spend something, they would send an action to the stripe service.

The stripe service should be able to have hooks come back using our infrastructure, using only pathing.

So requesting the pathing would be a subdomain and would provide a deep view into the system.

The user would come back to that domain, and then a request of a certain format would be translated from the url into a pierce into the repo.

So when github oauth comes back in, the url it gets given would be pathed to an artifact url, which would convert into a chain message.  The chain message would have a redirect reponse which would be passed back to the caller.

Chain messages back should be any kind of url response, which could be anything at all, including static files, like html pages.  So we could let people host static pages using only artifact, where it builds html and publishes different versions.  Much of this html could be AI generated.

Chains can register a subdomain which points at a specific chainId.

So when a user wants to push to github, they do it via the github service, since that service holds their github tokens, and does the push using the auth they have.  This keeps the tokens safe, and never leakable by the users, but still lets the users have full access to their data.

The CRM could ask the github service if a given entity has github permissions to access a certain thing.

Github entity would hold the mappings of repo names to chain entities.

So it could say if something was genuinely cloned from this other thing.

Github then holds the record of all the repos that it created.
Another service can be responsible for creating new blank repos.  This holds the mapping to which entity created a certain thing and who is paying for it.

