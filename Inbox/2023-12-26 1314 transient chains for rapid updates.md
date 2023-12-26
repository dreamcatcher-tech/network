
>[!tip] Created: [2023-12-26 Tue 13:14]

>[!question] Targets: 

>[!danger] Depends: 

OpenAI api streams back responses a word at a time.
Going outside of chain to give these realtime results back to the app is a pain, and causes a second programming paradigm to enter.

What we should do is make a chain that runs in a transient mode, that does not cause root updates or can at least defer them until it is done, but which does cause a Crisp update so that the UI can render these changes.