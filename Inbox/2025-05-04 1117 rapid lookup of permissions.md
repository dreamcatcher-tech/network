
>[!tip] Created: [2025-05-04 Sun 11:17]

>[!question] Targets: 

>[!danger] Depends: 

We should allow for the lookup of the tip of the repo, the meta tip, to be delayed by up to 5 minutes because otherwise every single action from a machine is going to be delayed while we check the auth on it. 

Is present the JWT which gets used to sign the action as part of the header so that we can validate that it is in fact legitimate within the last 5 minutes. 

Then we do a live check once we start doing the action if it's a right action. So read permissions may not matter so much, but write permissions should be checked at time of writing. 

The reason for providing the JWT in the header as well as in the envelope is that in the header we need to decide that we don't want to pass the stream which could be quite large, but in the body we need to store a record of who signed it and who accepted that signature. 

This is different from the JWTs used for user accounts. We can't store those because possession of the token is considered authority, so we can't leak that. Secondly, it's really an assurance from Privy that the browser that's making the request has passed their checks. It's almost like an external third-party thing.

Whereas internally for chain actions and for machines and from every point on from where the user enters the action should be signed. There might be some leeway given that we're the hoster, and if we are sending actions to other places, you could if they were calculations we could be the responsibility of that. As long as we can trace who did what, I think. 