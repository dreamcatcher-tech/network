
>[!tip] Created: [2024-05-08 Wed 10:11]

>[!question] Targets: 

>[!danger] Depends: 

If the sessions were connected to /dev, then we would make a separate repo named /home where all the users home stuff goes.

So for a user to do an rm, it would be removing from their list of repos, where the only place they can store it is /home or /repos

Given no logins, we would not have any other chains there, so can just proceed knowing there is no collision.

For cloud tests, we should authenticate somehow, with something, so we can have a repeatable test session.

Auth in with simply a password based thing, so if we present the same password, we can come in, or if we prove a private key, we can come in.

OR just keep the same machine keys for test, and only ever sign in with that.

