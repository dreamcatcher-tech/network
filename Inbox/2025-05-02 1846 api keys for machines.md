
>[!tip] Created: [2025-05-02 Fri 18:46]

>[!question] Targets: 

>[!danger] Depends: 

If we had a slice on the auth folder of the soul branch that had a list of machines that were authenticated, then when an action comes in, and it has a particular actor did, then we look up the repo, and see if the machine is allowed in and with what privileges.

If we made all repos have a default public name so we can give them their own dns names ?

Then when you want to add a machine to a repo, you just browse to this address and log in.

What about making the machine its own issuer, so it generates a key pair and stores it safely somewhere? When it requests a login, it sends its public key in, and the response packet is a URL for the user to navigate to within some time frame. This will then insert this verification key for the machine somewhere in the repo from that point on. Once it's accepted into the repo, in order for the machine to gain access, the authorization mechanism looks at the identity, reads in the repo that is associated with it - one of the claims because it's a machine JWT. Goes to that machine, looks up the verification key against the machine, validates the token. This same mechanism can allow the machine to send in a request to change what its validator is. It cycles in effect, so long as it has a valid token it should be allowed to do that within some spam limit. 