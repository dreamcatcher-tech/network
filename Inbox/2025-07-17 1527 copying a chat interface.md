
>[!tip] Created: [2025-07-17 Thu 15:27]

>[!question] Targets: 

>[!danger] Depends: 

librechat handles mobile, tuning, staying up to date.

we should be able to copy this verbatim.

keep one folder that is a canonical copy of the chat

Make the chats be in a frame, so they can be completely isolated.

We should be able to copy over the code, and then have codex make versions for us that work as we want ?

basically they would keep tuning the project, and updating it, and we would just update our code as required ?

to check bugs, we'd see if they were present in their demos, then look to fix them for them.

they handle all the pretty integrations, like search results.

maintain a list of the features we want to remove, and keep this in a doc of translations.
this is part of the rules the agent uses to know how to surgically cut bits out.

We piggy back on top, having hard won code that we just slightly modify each time, to achieve what we want.

Their problems are our problems.

They will keep riding high and solving untold numbers of bugs, we just inherit.

There isn't a more free spirited project around.

or, bail, and just limp on with our custom front end ?

Or snippet out just the bits that handle the streaming and rendering ?

I am supposed to be getting transcludes working.  This would delay that.
Then we need innovations, and finally agents.  This would delay that.
But it would in the meantime give use a very stable, high quality, pleasant to use interface.

However it has all of the features we need, 

So where are the cut points in this library ?
we could just take the chat view piece, and then leave the rest ?
or pull the rest in later ?

The key is to touch it as lightly as possible, and just silently / surgically snip bits off it, and inject our own backend stuff in there.

Making librechat be a frame is probably the cleanest way to keep it under wraps.
So we would have a repo, that made a branch that was our working branch, and we periodically cleaned things up, and documented the changes we were making to translate to our use case.

If we simply recreate the entire server side api using artifact, then we have within this system a fully featured user management app ?
And because of their incentives, we stay aligned with them almost fully ?

permissions turn features on and off easily.

So if we changed nothing, and just provided routes using artifact ?
then, if we used frames to give extended features ?

we should be able to mimick mongodb fairly easily, but we would like to expose more functions, like history.

we could run their project as a server too, and then replace the mongodb instance with our own.

Or use their exact project, but add repos in ?

Rather than trying to snip librechat at the data-provider junction, it might be easier to lift off its UI components.  Pull of just a component at a time, and build up our own view into it ?

Or, persist at undercutting the server side, and presenting a neutered version of the app, with some key aspects overridden.

They will always work on making a nice conformant UI for chatbots, which we can ride.
bugs in the interface will always be their problem, which we can push out to them.

could snip out some of the hooks ?
