
>[!tip] Created: [2024-04-09 Tue 09:27]

>[!question] Targets: 

>[!danger] Depends: 

Start with totally new browser coming to the deno deploy site.
There is always an anonymous chain, which all unknown browsers join.
Start a new base chain based on a browser fingerprint, so that work can be done and then promoted to an account based chain.  Also handle merging when you do log in.

- load the webapp
- ping the deno deployment
- send a new session pierce into the anon chain
- use this restricted free to use chain as the entry point to the system

Can do some basic AI calls, but crucially can engage in the login process:
Once have passed github auth, we create a new user chain, which is a users base chain..

- user initiates the oauth with github flow from within an anon session
- redirect to github page where they must authorize us
- redirect back to our app, which is a deno deploy url, so we get back the token
- finally redirect back to the static page, with a device token that we generated in the url params
- store this device token in localstorage, so it can be used by all tabs
- the browser is now able to access the users home repo
- Then it forks a new session chain
- stores the session id in sessionStorage and begins doing anything it wants

- Browsers comes to page with valid device credentials
- if it has a session id, we restart that session
- fork a new session
- browser interacts with the session chain, which allows any action to occur

Cloning repos or starting new ones
- all repos are surfaced as submodules of the home repo
- they are actually stored flat, alongside the home repo, using PIDs.

Goal is to get a session chain up and be able to clone in two different github repos.