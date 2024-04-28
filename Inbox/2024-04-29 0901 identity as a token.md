
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