
>[!tip] Created: [2024-04-29 Mon 12:44]

>[!question] Targets: 

>[!danger] Depends: 

The app would have opened up some url endpoints to be able to side effect in to it.

When a suitably coded request comes in, it will create a new branch for the master key provided.

This behviour is the behaviour of an app - artifact simply mains the logic rules, offers the url endpoints, and charges the appropriate parties.

Artifact does the logic rules that enable high level logic rules, like AI generation, to occur.
It provides the infrastructure layer for reliable repeatable blockchained computing.

So the goal is to use as few system hooks as possible to make a multiuser system that can host applications.

The systemw ould be integrated with some form of payment, since it needs to be able to charge for its existence.

If the user app / home app was integrated with the system, this is how the billing would be handled.

Metrics then are mapped to interal account chainIds, and pierced in periodically.

Superuser in home can have the machine id provided as a key in .env, rather than relying on it being user provided.  Once it is set, it cannot be unset unless the env is changed.
Set the public key as an env, and keep the private key on local machine in .env file.

Start with getting the machine key approved first, which creates a user account.
If you came from a pre-existing key, you have stored the home id along with it.  We will not look it up for you.


Machines knowing they are new, request a new machine id to be inserted, providing a public key.
If accepted, they are returned a PID for the branch that represents their machine Id.
They use this to create session branches.

Any attempt to pierce a branch that doesn't exist throws an error, and the system should respond accordingly - if a session that the machine things exists actually doesn't then it should probably regenerate its machine keys since the host has forgotten them.