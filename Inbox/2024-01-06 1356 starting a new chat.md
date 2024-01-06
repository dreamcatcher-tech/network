
>[!tip] Created: [2024-01-06 Sat 13:56]

>[!question] Targets: 

>[!danger] Depends: 

Since multiple tabs can be doing multiple things, we should probably seek to close out the chats once the task is complete.

Starting a new session and viewing old ones can be done from the chat UI.

If a new tab is opened, and new chat is started, but the old stuff is all there.  You can resume and old chat if you want, but if you try to do that concurrently, the second to try will error.

This is the same mechanism that happens when you open a new tab.  Reloading the page might do the same too, unless we put the sessionid in the url.  If there is no session id when you share the link, then we just make a new one and use the same path.  We can use the AI to parse this URL and try figure out what best to show you.