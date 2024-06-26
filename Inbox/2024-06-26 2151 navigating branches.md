
>[!tip] Created: [2024-06-26 Wed 21:51]

>[!question] Targets: 

>[!danger] Depends: 

Have a set of commands that can act like a filesystem, but for branches.
Perhaps it should be the exact same interface ?

Then have commands that interact with branches, like the PR command that executes on the target branch, and if that branch allows, and no conflicts are found, it will merge in the sugested files that came with the PR request, making them part of the main.  

Upon reply, the recipient would do an overwrite of everything in the parent, so it is now current.
This is the act of saving the work, and it is the same as saveall plus readall.

make withMeta be able to wrap an incoming request too, so we can read from and pull in the files from the commit that it came in on.

Also some way to navigate isolates, so we can easily fetch the api of whatever function call was used.  Or make this api available in the metadata about the session.  Lets us show the fully resolved sysprompt, including functions.

Switch focus of the prompt should be a write to a json file on disk, so that reloadin gthe page always gets it back.
Inside the terminal branch, can say what the targeted repo and branch of the prompt is ?

Firing up an image as a single session vs a multiuser version.
Single user can become multi.
In single, files are altered directly.

Safeguard can run as a parallel process each prompt, and if we think it sounds like the user is trying to escape, we will intervene and fire up backchat.
If they say something like "go away" then the session with backchat will persist for the duration of this session, and we will keep assessing if the current prompt sounds like they want to escape, but in the context of the conversation history so far.  We will prompt it to also say that it will leave the user alone, and give them a new keyword if they get stuck, plus a hotkey reminder, which is device specific.