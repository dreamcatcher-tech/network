
>[!tip] Created: [2024-01-27 Sat 14:31]

>[!question] Targets: 

>[!danger] Depends: 

If the deno deploy infra handled everything the client would typically have to do, then the client can be lighter.

Being able to run in both modes would be good, since we can have super light and fast edge mode, or heavy but offline capable mode.

So in this case, artifact would be remote, and all the commands that it runs would be remote.
Some commands could be configured to run locally when they had to, like requests that have to come from the users browser.