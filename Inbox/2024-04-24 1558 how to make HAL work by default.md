
>[!tip] Created: [2024-04-24 Wed 15:58]

>[!question] Targets: 

>[!danger] Depends: 

Might be easier to make an initial user, and have the user have HAL as the repo ?

Set a home repo ?

Could add a new user, and set their base repo ?

Set the base repo of the system chain ?

Set the home repo of any account as a string that is lazy initialized on first use ?

? What does it mean to have all these other repos anyway ?  What are they used for ?

The home repo needs to house all the command stuff.

Home repo should be a pointer to another repo that is in the users repertoire, that gets used.
Home repo is always standard and never changes, but the session repo is something else.
Home repo is mechanical and used for pure system level operations and storage.
It should have configured a pointer to the current session repo.

Are sessions multi parented, where a new session pid is forked inside whatever repo is configured, but also represents a commit.

So we should make new sessions directly in the repo that is set as the current session repo.

What about letting clients select which repo to use for their session base ?  And have many different concurrent ones ?

If it was entirely client driven, then they could set up new repos with sessions ?

How would we ensure that session integrity was being maintained ?
Engine could ensure that incoming sessions met a certain format ?

ulid/ulid/home
Have a pointer to the default shell repo, and if it doesn't exist, clone it down.
By default its the home chain, but this doesn't actually do very much, as it is a locked down administrative chain.  The UI is integrated with the helps system.

Sessions get checked to see if they are legit when we start running them.
A session is a branch of a repo.  It is tightly bound in that it is the only branch that can accept piercings.

You could start a session off any base repo legitimately.
If user managed, the ui would first create a home session, then
It would try to connect to the HAL repo first, and would pass instructions to clone it if not present.

Home gives your auth and account balance.  Home is how you oauth thru.
All active sessions are stored in the home chain, regardless of what repo they are formed against.
It is almost as tho the home chain is only ever modified by system.
pubKeys are stored in files referencing the repos the sessions are attached to.
Each time a pierce comes in, then the signatures are checked against the home chain.
This might be stored direct in the db for speed ?
The atomic commit would check the key is still listed in the valid set, so the check would be very fast.  So revoked keys are just removed from the db.  Keys are listed by the sessions they are set against, whilst also being recorded in the home chain.

It has a base set of files and config that locks it down.  We want to minimize the amount of config differences that are in the home chain vs pure chain logic.
