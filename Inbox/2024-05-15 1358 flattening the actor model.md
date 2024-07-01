
>[!tip] Created: [2024-05-15 Wed 13:58]

>[!question] Targets: 

>[!danger] Depends: 

If every machine needs to go via an auth provider anyway, then we might be able to flatten the actor branch hierarchy.

So all machines would be tied to a single repo, and they would have arbitrarily many sessions.
Or, each one could be its own repo, where it was spawned by a gateway repo.

Actor ids would be another repo again - the Actors repo - which requires cooperation with at least 1 authProvider.  If a machine is unauthed, then it just stays as an unauthed machine.  Authed means that more than one machine can act as a single actor.

Unauthed machines make a temporary actor, where this actor is merged when they auth.
But it is really just copying over the contents ?

Advantage is that the machine session never moves, so all the things the machine sessions did, still remain with the exact same PID.

Redirects of PIDs could be done if you had a prior commit where the pid was one thing, then we should have a way to walk quickly and find where the PID changed ?

If have multiple sessions in HAL and want to list all the sessions you have, how would this be done ?
Write the sessions in the actor, so that when you authenticate, the sessions in the actor are copied over to the permanent actor.

Apps need a concept of an actor, so they can be controlled and so they can bill and be billed.

Store them as sessions based on apps, where each app has a directory where it can list data.
It could be any data, but for starters it can be sessions that the user is involved in.
Is an app a fork of a base, or is it its own repo that the user installs and keeps updated ?

Inbox for sessions you have been granted access to ?
Just a general inbox, with AI processing for spam, paid for by sender.
can include regular email in this piece too.

HAL is flat sessions too, with each session linked back to a particular actor.
If the actors only execute in a trusted way, then whatever the actor says is theres, actually is theirs.

But what is HAL ? A repo that gets forked by sessions ?  A dedicated repo that each actor starts ?
Is it in the actor repo ?
Then actors start bots ?

? what about flattening terminals down too, so each one is just a fork of a base repo ?

Branch as an agent ?

If an agent session can come with the files of a particular repo, and its own files ?
Starting a session of an agent running on the current file system lets it make changes to this filesystem and then merge them back in.
Can be given permission to modify only some files.

Starting an agent that can then have multiple sessions with it seems a little different, but same ?
The agent boots off the image, where it really is a filesystem (aka a blank repo) then import the agent image, and then allow sessions to be started from this main branch.

Customer bot would be the fs of the whole crm, then access restricted to the customers folder, then the customer bot fired up, then a new session starts, which branches from the customer bot branch, which is always synced with master.
Then the session branch starts, and occasionally merges back to the customer bot branch, which then merges back into master and handles triggers to other bots ?

Some apps you clone the repo, others you fork the main branch.
A central state app is one that sessions can change in some way.
This can be tiered as well, like all CRMs can feed into a higher level one maybe.

Consider a model where all the customer records are in a file system tree, then you want to make a change to them - move up from there.
hit the main branch and request to fork into a session, with a given bot image, scoped to a certain set of files.  This would have a chroot applied so the bot only sees a specific path within the filesystem.  Could be limited to a specific commit or range of commits too ?

So a session can start with any agent image at all.


Allow an isolate to hook the processing of PRs, copys, moves - this is where we put the notification logic to make whatever changes are needed to other parts of the system.

Terminals allow actions that prove what machine something came from, and optionally what actor that came from, if you have been allowed to read that.

Map machines to actors ?  Use a LUT to speed this up ?

Should you be able to us the intelligence of the systems you assembled in HAL to interact with any bot on the network, and any system outside of the network ?
So then the actors are the base system, for each user, and then those sessions can interact with other systems, and can invoke different bots on them ?
The apps are ultimately filesystem stores, and we are free to use any intelligence we like to cause their updates and things to occur.

Things like checking formats would all be done inside the nApp, but figuring out what to change is optionally handled by anything you want, or we can supply some defaults - we dont' much care.
So the internal logic is handled by the provided nApp systems, but interactions are via HAL.

Could a terminal go and interact directly with a nApp ?

Actor repo is an nApp that holds all your files, and holds reference to bot images.
Run various bots as forks of the base branch, s* is for sessions, but a* is for agents ?

The difference between being in a session with a bot, and controlling a session with a bot at a distance.  3rd person.  This is the POV of the conversation.  First person is you are talking to the bot directly.  3rd person is when you are talking to one bot, and then it is interacting with the other bot on your behalf.

Having some AI logic that occurs in the app that isn't part of the interaction with it - basically holding the consistency is a bot.  Things like when a customer is changed, then we need to update the routes before we consider the change done.  Also these updates should be async, as in they can queue up as messages in a queue that needs processing.

Take the CRM repo, and fork a new branch of it, or a new repo, since branches indicate some shared space with others.  So basically clone a new version of the base image.

Tinker with a bot as child branches in a HAL session.
Actor repo is run by the system and acts as your home.
Then when happy, start its own repo as an agent image.
Start a new repo instance, or start a branch.
Ultimately set the repo free to make it run without controls.
start a new session with any other repo.

Branches do not carry enough isolation from parent to be a long term solution - the parent still controls and can see inside of these branches.

So actors may be not branches but stand alone repos ?
Branches are data cheaper, but you can't export them.
Machines are really attached to the hosting provider more than the actor.
If anonymous, could use an actor branch, if register, actor is its own repo ?
Then just have a table that mapped between machines and actors ?
Actor repoId could be generated from the machine public key that created it ?

? could we branch from the actor branch and do some kind of new image in that branch ?
The only thing not allowed is to modify the system files of the base actor repo.  Anything else is ok.

? should a terminal connect to a remote repo directly, or should it go from an actor session ?
It is able to go direct, but that would depend on whether its session was instructed to go direct.
It could go in relay mode, so there is still log of what happened, otherwise it is lost.

? How would a remote repo determine what actor credentials the machine represented ?
The terminal presents its actorid, or a signed token from the actor authority, which the repo should subscribe to, in order to be notified of revocations of a given machine.

? could the terminal be flattened too, and pierce direct into a session, where its session never actually changes ?  Seems different tho, as terminal is for all kinds of things, like reads and stats, whereas the session is for a focused thing.

To be without backchat is to be connected into artifact raw, and not via the AI interfaces.
So because of that, everywhere you go in the system, all your prompts route thru a HAL session.
? Make a terminal and a session inside of HAL, and make machines as simply the rights to pierce in ?
Backchat is a dedicated session, attached to the terminal, but sessions can be navigated around.
Can't really take over another backchat session, since this is equivalent to taking over the tab ?
Suppose it could be allowed, for remote control.
So the backchat session gets created by a machine, and is assosciated with a tab.
If it is one backchat per tab, is this suitable?
Start with your backchat thread and a default session, then use this to navigate around any way you like.
? what if everything relayed thru backchat anyway ?  Lets it run moderation checks and do topic switching in the background.
Even if you start interacting with someone elses backchat, your backchat stays persistent, and allows you to eject out.
Ban creating new repos until you are logged in, else we can't get those repos back
backchat routes your prompt inputs and decides where to put all your stuff, and backchat takes in the pierce from the device.

### steps to log in
prove the machine key
request a new backchat branch based on a ulid
server will respond with a full pid, which might be an authenticated actor or it might be a transient actor based on the machine key is supplied if this actor is not authed
pid is now `repoId/dc/HAL/actor_KTSV4RRFFQ69G5FAV/backchat_Y6BQ8S3N1WX5JVHD`
a new backchat comes with a new hal session, so backchat is like root session and the new session is where the prompts are being directed currently.



Resume is a request for a new or resume backchat branch, where we are supplying the previous backchat id `backchat_Y6BQ8S3N1WX5JVHD` and will get back the full pid that we can use, which might be as we requested or something different.

Inside the backchat is the currently targetted HAL session branch - this is where the prompts are currently targetted to go, and where the UI should read from.  

All the backchats are stored in files, which are periodically synced with master, so that all backchats can be aware of all other backchats.
All the session branches are stored in files

You would never make a new backchat session inside a backchat session - the only way is to open a new tab.  You might be able to resume a previous backchat session if you wanted to.  When taking over a session, now two tabs are interacting with the same session ?  this would only be allowed for the same actor, as an external actor needs to have their own backchat session to be able to interact ?

Store machines in a branch, with a pointer to the actor they are linked to.
Inside actors, store a reference to the machines.
To recover a machine, we read the machine branch and see if there is a pointer to an actor in there.
Authing the machine changes what the actorid is that it points to

How can we prove that an actor branch moved to a different one, or was otherwise transferred ?

Set the name of the actor, even if not authed.  When auth, offer to update the name or keep the existing one.  All actions use the actorId.

ActorId should be a ulid, and be short, so remove the timestamp portion of it.  `actor_KTSV4RRFFQ69G5FAV`

Recover from the deletion of a session file or branch by rolling back to whatever was previous, or sitting in backchat view waiting for instructions.

When running sessions, we can group them in a way that shows the images that were used to start them, what files are available to them, and how far along they are in running.

? how would we signal to the UI to show the backchat session ?
Just change the target of backchat to be backchat, and it will change the UI to be in backchat mode.

Back button would move backchat navigation around, giving you a way to do undo.
So backchat to edit a given prompt and then hit back button would roll you back to whatever the state was before, and carrying on from there would cause a branch in backchat.

Machines can be just a branch of the Actors repo, which is special in that it shares no files with each actor branch.
Means our backup is pulling a single repo, with all branches.  This backup would likely trigger a merge with every branch if they can't done one recently, and the push / pack the whole repo, then pull it back down where we restart the system.
Deployment then is a single repo, and making a single branch for machines in that repo, with the superuser machine key in there, and the superuser actor id.
Superuser actor can be special too.

In testing, HAL starts off bare, but can be provisioned to clone down from github.

Active session vs finished session depends on if the filename matches any branch name.
Can restart a session by opening a branch with that name.

So backchat is a stable ai chat session that keeps system sanity - you cannot upgrade this piece normally, but everything can be changed.  It is like the UI that chatgpt presents you - modifying it is likely to break base functionality.  Could upgrade it, same as any other bot, but we should allow a boot mode like safe mode, so if you break your backchat, you can back out of it.

Backchat should boot with the session giving a little intro and saying who it is.

Backchat can run remote repos too.
Would it allow resume of a prior session with a remote bot ?

So backchat comes with a new HAL thread already ?
Backchat has what API ?
Should backchat be the only thing that can do repo level controls ?
Is backchat an isolate, with an api ?
Then on the program api, this api is exposed ?

Make a fire and forget action, so backchat ignores replies.  Maybe the only error we care about is a redirect ?
Maybe the reply can update the accounting for billing purposes ?

Use folders to represent child threads, so they can all be rolled up to the top branch easily.

What does it mean to send a prompt message now ?
What about pierce to interact with raw isolates ?
how will external services update their files ?  maybe with pierce actions or with just PRs ?

Stories:
engaging with a bot directly
starting a new session with a bot
bot handing off your conversation to another bot
creating a new repo
using a bot someone else made on your files
