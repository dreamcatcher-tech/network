
>[!tip] Created: [2024-11-24 Sun 10:29]

>[!question] Targets: 

>[!danger] Depends: 

logins - the only responsibility we have is to ensure that api calls to artifact are authenticated correctly.
If a jwt is passed with each api request, we can check if it is valid according to our auth provider, and then can bill against this user.

unlogged in users store their chats locally, in the browser, since that is the only place they can reliably be stored, as if the browser is lost, so to is the id that would get them back from the server.