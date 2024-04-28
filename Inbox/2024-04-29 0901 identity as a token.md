
>[!tip] Created: [2024-04-29 Mon 09:01]

>[!question] Targets: 

>[!danger] Depends: 

Pull and push to github needs to go via this chain, since it holds the tokens for github.
Basically you can come and oauth a branch, making a branchbound token stored with the auth provider.  

The service provider is the one that decides what extra restrictions will be placed on the internal chains.  Also consumers of the serivice might just specify their own restrictions ?

Could allow children or no children.



Need some basic token mechanics to cover privacy, issuance, revocation, and how it will be checked.  Like who can check if a branch PID is a holder of a token or not, how the provider will charge for lookups.

Benefit of this service is no auth required inside your applications, identity is native to the protocol.

Can be running on different hosting providers and still use the same services securely.
Can switch between auth providers seamlessly, and can use several at once.

Oauth loop with github results in a specific branch that has been issued a token from the service, with github PAM token being held confidentially in the service, and all interactions with github being brokered by this service, like push and pull operations.

They can then present this proof to others, which allows the app to take this token, ask the gh service if it is valid, then proceed engaging with the user.

This model is the basis for confidential sensitive info being held by the provider and proof of the validity of this info being passed around as a token, where even the ability to check a token is controlled by the user.

Means that an app need not hold any of this sensitive data, and no user needs to provide it twice.
The whole dreamcatcher ecosystem would look like a single github oauth, so no matter how many apps your interacted with, they would only use a single oauth token with github.  Makes it easy for an app to be granted control with AI for doing things.

BUT perhaps the auth service should not be able to do push and pull ?
If they never saw the data, but only triggered the side effects required and injected their secret token into it, then if you trust the hosting service, you can trust that your data remained confidential ?

A variant of the gh service could let users have their own PAT ?  They are responsible for storing it, and the logic of their home chain ensures it never gets leaked.