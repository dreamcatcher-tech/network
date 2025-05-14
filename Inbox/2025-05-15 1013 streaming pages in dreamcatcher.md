
>[!tip] Created: [2025-05-15 Thu 10:13]

>[!question] Targets: 

>[!danger] Depends: 

we could share the repos, so that can be viewed directly.
the app state and the widget in page state could be streamed via a store ?

could this state be held in an in memory repo then shared using repo mechanisms ?

or is it ephemeral data that gets streamed around like a video would ?

so each widget would be given some state that they can use, which is hydrated and restored when the widget is reloaded, so use the store we give you if you want your component to rerender correctly.

this store could be stored in a repo, or it could be streamed around with viewers.


so you would open a window, and then in the account menu, you would select the broadcasting app, it would have access to your friends list, then you pick who you want to share too, or just make it generally available.  Possibly you could record the session too.

so the store that the overall app uses would be the same as a widget store, making itself be an actual widget too.