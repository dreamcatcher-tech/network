
>[!tip] Created: [2024-04-30 Tue 16:07]

>[!question] Targets: 

>[!danger] Depends: 

Could use cloudflares zero trust model to shield all devices from the internet ?

Means that so long as we have strict access controls on deno deploy, so that nothing but the cloudflare servers can access our site, then the customers private data should remain secure.

If we install the cloudflare agent on all the client machines, it can handle with security.

If we run chromebooks on the client site and manage them to ensure only certified apps can be installed, then we should be pretty safe.

Or just use android, and make it their problem if they download uncertified apps.

If cloudflare was identity sign in for HAMR, and also running on all the devices, should be as safe as we can make it, as we move towards being trusted and running on the open internet.

Cloudflare can be logged in to using github, so we can have these accounts be used for accessing everything.  We would then make an isolated deployment on deno, using an isolated set of credentials.

Set up aws backups of the data, and also a cron job to push to github periodically.