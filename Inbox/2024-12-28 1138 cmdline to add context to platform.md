
>[!tip] Created: [2024-12-28 Sat 11:38]

>[!question] Targets: 

>[!danger] Depends: 

Using commandline, you should be able to push up files into the platform context that you want to work with.

Should also be able to keep these in sync if you want.

This would log in to the platform, using the same logins that you use to gain access to the api's of the platform, which means you can run local commands, with local context, but use billing for gateways on the platform.

cmd login to platform by generating its own keys or an eth wallet, then attempting to connect to your local install.  You have to go to your home repo, enter the incoming ID that the client generated, and then wait for the connection to be made.

If you take the code, enter it in, that should be enough for the two to connect up.

Then they stay linked, with control being from the platform itself.

Then this client can be granted access to your repos.

