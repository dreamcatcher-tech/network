
>[!tip] Created: [2025-06-16 Mon 13:09]

>[!question] Targets: 

>[!danger] Depends: 

this might be separate from the actual frame ?
or could publish the built files to jsr, and then load those files as the frame ?

this is the napp that would get called when we want to interact with chats.
this would be installed in the home repo, and could not be uninstalled.

the frame would render from the formats that the chats napp supplied.
they might be the exact same thing.

On server side, we run all the regular server side methods, and then stream down the responses.  We run the execution in a server process, and we do a commit at the end if it completes.  The recovery is handled on the client side, if anything.

On client side, we would read in the files from the chats folder, maybe populating the data in the browser, without making the api call.  When we want to submit a new chat, we would make a dispatch call, targing the specific repo we wanted the chat to occur in.