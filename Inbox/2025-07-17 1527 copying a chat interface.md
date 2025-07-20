
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

replace the data service, so that it uses artifact to make these calls ?
We might be able to avoid syncing the whole repo down, and instead, we make calls on demand with the client ? or do the sync, but high prioritize the queries directly made, so that responsiveness is improved.

read each file in the librechat-data-provider package and check that they all use the data-service.
read each file in the client/src/data-provider and see if this is the insertion point ?

or, we could skip the syntax highlighting, and just move on with our own stuff ?
or just copy how they do syntax highlighting and chat display ?

if we make our own shim package, that is imported in the client as an api compatible drop in for librechat-data-provider then we can switch out this one thing from the front end, and now all the service calls go thru us.

Another junction point is to run their own server, but replace mongodb with our own db.  Issue is, now, to run the app, you need a server side app as well as artifact running.

so we would wrap the whole app in an ArtifactProvider, and handle our own sign in flows, then 

so we could either be a patch over the top of the data-service package, or we could be a separate package that is imported separately ?

It looks like, all we need to do, is modify the data-service.ts file and sit over the top of that.

would be really nice to use the ai-sdk to handle the messaging and tool calling ?

but we only need like, two providers off the bat - a pattern may emerge for the others.
we could probably do that, and just translate it on the client side into something they expect ?

request needs to be modified to handle the token refresh.  This would be handled purely by privy lib code.

we could use the routes they use as the filesystem paths that we store all the data on.
like shared messages are at `/api/share/share-id`

If we synced down the whole user repo, then our data-service queries could be just straight up reading from the filesystem.  We could present it as an opfs filesystem, so it stays at the latest value, making interactions easy ?

list of other candidates:
## open web ui
no because it runs python on the backend

## lobechat

## lobehub/ui
https://ui.lobehub.com/components/chat/chat-list
ui with nice chat components in it.
might be especially spliceable since they offer offline db in browser or server postgres, so we might insert ourselves as a 3rd switch.

## lobechat conversion
If we ran the nextjs server, this is the path of least resistance to get up and running.
then the filesystem is the git stuff.
the execution remains in the nextjs realm, and it just writes the data to git as a filestore, with no execution.
then how do we execute napps ?  This could be done via tool calls ?

This means that the desktop app needs no extra replacements either, and it just works, and only its database operations are altered in any way.

replacing the nextjs logic seems hard, and not really necessary.

many featuers can be disabled with feature flags.
getting frames working seems the crucial step.

burden on keeping in sync with their db schemas, particularly when they migrate or update, is hard.  so if we keep things running using browser dbs, and just leave everything the same as theirs, that is the least amount of effort.  Then we add in hooks to write to our own storage when relevant things occur, like the chats increase or something.

because file goes to s3, that might suit us for files anyway, easily.  we might be able to hook that one directly ?
so hauling in chats as context might be hard ?
repopulating the db based on git might be hard ?

to intercept at the app level, we would have to intercept everything in the src/services dir
or intercept at the fetch level, but then making an api compatible backend in huge.

would be nice to just lift off the front end.

running their docker image would be the easiest ? possibly then just intercept the postgres calls ?  or insert a frontend of our own ?

we could use their api as the way to do agentic chat calls from our backend.
So our backend is really about agents.
take the pg-lite version, and then gradually peel of functions that go into our backend ?

docker images
- pg-lite seems up to date
- lobe-chat seems outdated

so we could use the pg edition to get our basic functionality up, and get it connecting to our backend.
see how it uses s3 for files and stuff, and switch that over to us.
use the cloud deployment to see how these features work, and see how to manage them.
so we'll roll back to the last version that built the docker for pg-lite successfully, and then iterate on that.

See what we can change with feature flags, then start yanking code.
Check how plugins work, as we might leave that intact.
Or add on napps as the same way as plugins.

get up a version that we have modified the code on, first, in a separate branch.

??? can we make the ambient attribution agent using someone elses agent framework ?


We should be able to run mcp servers as napps, on a remote server, so they require no setup locally.
plus napps of our own, that show up like plugins.
plus frames, that show some graphics.

monetizing the external services that things connect to with a conveninence fee, as well as the fees from usage of things people make.

making programs that can be directly consumed and shared in the platform that created them.

so because the remote server does not have a way to run untrusted code lightly, nor to package up and connect to it, that might be a lightweight gap they have ?

they pulled in prompt libs from FlowGPT.

the agents they show do not have tools that can run arbitrary code, or modules, no execution framework it seems, and no evals, no tuning process, no fault feedback and upgrades.

want t tool to go to npm, browse it, and pull in packages that can be used directly.
also can make little code sandboxes that themselves become packages.

agents should be able to call other agents.

they have frames showing as tool calls.

your server would reach out to the others you had to chat with and would organize the chat with them

sharing of messages and chats needs to allow live view as well as snapshot, and bulk selection of messages to share and include in the transclude.  Transclude selection is no different to sharing, as they are the exact same thing.

use this app as the way to make model calls, then make the server side and client side store and retrieve their data from artifact.  So that we can treat all data as git repos, so we can put them into context, and have more data controls over them.

Maybe intercept on the trpc calls ? the webapi calls seem to not matter ?
seems a lot of rsc components, so we should let that all stay serverside.

Really nice that they integrated the UI with all the models - calling the models in a uniform way is just part of it - making their outputs appear nicely is another thing altogether.

replacing the functionality of a server piece is easier than replacing the exact schema operation, since we don't end up hand fixing the result of automated schema migrations.

Files should be the whole repos thing, so that we can deeply integrate with transclusions, and so we can make it nice and uniform.

binary file operations go thru s3, so they are totally separte from the db anyway, hence this is a good place to insert.
repos has no place in their ui at the moments, so this is greenfields.
implement repos alongside the regular file uploads, and just move over gradually as we pick up more incidental knowledge.

Look at all the database code, and see where the deps are between the functions.
see where the orm packages are imported, to know where all the database operations are occuring.
there is some usage in the lambdas, but think this is transient, like task tracking.

If its all just reading and writing, then we could probably make a good translator so that we work with the orm directly, as a shim, then we don't care what they do to the schemas and all that ?
list all the orm calls that the project uses.

look at the createAdaptor functions to see if we can't make an adapater for artifact ?

replacing the db system and then allowing the db to be tucked back in as context ?
need some mappings between repos and tables, since there is one database per client.
some mapping tables can be computed on the fly, like luts ? these could be ephemeral ?

What if we attached the chats straight from the db ?
A transclusions table would simplify the whole app, since it groups things together.

Ideally we would run one instance of the backend per user ? or, at least, the backend would be treating each user like a dedicated db.

If we made a drizzle driver, then we have a new universally useful piece, and we can ride the lobe-chat UI with near zero changes.

If we override the db layer, then deploying to vercel may have benefits of server side rendering etc.
Keeps our deployment mainline.
Intercepting at the db layer is cleanest, since at the functional layer is subject to tangles, and requires a much higher bar.
So intercepting at an external interface is much simpler, since they will always strive for uniformity there.

Tap the postgres driver, so that when writes occur, we update our data structures ?
But we will need migrations to be handled, so we can stay compliant, altho this can be deferred.
Or, we could use sloppy placement, where we store the messages using an AI or make our own sloppy migrations ?

trpc interception might be another good area to intercept the execution calls ?

they seem to have a database adaptor, so this might be easier to intercept ?
one layer higher than postgres but doesn't handle migrations, as these will need to be done manually.

If all the src/database/schemas were overridden, then we could drop in a type safe replacement, without getting tangled up in drizzle ?  So it is compatible with how lobe calls the db, but nothing more.
These can already easily be turned into zod schemas.

One of the key shortcomings is that you cannot talk to the bots about your user settings on lobechat because the database is out of band from the application - it is not self aware or self accessible, with a wall being in place between those conventional functions and the ai functions, requiring people to still interpret UI layout for meaning, rather than ask a bot to do it.  Reflexivity is missing.

One of the key conceptual changes is one db per user.  This should allow people to go from lobe-cloud hosting to local hosting easily, and to choose other hosters, so long as everyone had a payment agreement in place to pay lobechat.

The more people we can get to fight or lean on people for their fair cut, the more it helps everyone get their cut, so we can all band together reasonably, rather than a few loud gougers taking more than their share and being rude / extractionist.

transcludes needs to include a translation step, so going from raw messages on disk to context packed chats is required, plus we may introduce some conversion or translation steps too.  This can be done using the database view initially, removing the need for all chats to be in a repo ?

Git repos could just be thru a mcp server ?
but then long term we want to be able to host mcp servers and treat them like things rather than services.

If we could get git repos connected up as context, then get chats up as context using a translator ?
Transcludes - the transcluder - would allow context assembly from many sources, including RAG.

Override their rag generator with the transcluder.

Keep the postgres db, but tap it, so that we write to git each time they write to the db, so that we are not using the git repos per se, but we are able to gain access to the chats and tables and things, and then add them in as transcludes.
Key is it lowers the bar to usage, so we don't have to store all the data, we just store enough that it can be transcluded, and then we gradually bring across the features, to ultimately intercept.

It seems unavoidable that we need to be the db layer, and we want to intercept there, since their arch is built to this interface.

Then present the whole installation as an mcp server that can be remotely accessed and deep researched over.

We need to introduce the concept of commit based editing of files and other settings.

Adding repos in as something that can be browser and added to context seems key ?

if we focus on sidecaring the data flows, but work hard to get transcludes working, repo browsing and management going, then we can have all the ai benefits of our approach without the up front hit that being the actual data layer would entail, so we can online gracefully and gradually.  We can ride their exact almost unaltered server.

consistency relationships should be described in each folder, so that if we go to write there, those constraints are always upheld, no matter who is doing the writing.  fk constraints etc.  schemas for the table.

migrations should be straight forwards since we have good strong transactional guarantees.

how can we attach all the files in full context ?
perhaps the best start is to make the transcluder piece, which we needed to anyway, and then see how that goes just using regular files, as they have provided, then move up from there.

We can experiment with group chats and the social aspects of things, possibly using a single db to relate everyone without awkward blockchain related semantics ?
So maybe just keep the full db, add some features in using that db, and then extract out blockchain stuff once we have the features complete, and a reasoning platform to help ?

The current conventional build seems to offer the fastest way to have a reasoning platform to assist us in our goals.
Things that go against the computational grain are large slow projects.
Rather than being fully git independent, we use this to iterate thru based on end user utility, and then migrate to self sovereign data structures.

Must be able to select files, and then do something to add them to a chat, like into the transclude widget.

make an mcp server or a plugin that gives files completely, but the model has to call for it ?
stuffing them in context might actually not be the best move ?
Transclude function needs a translator module so we can manage and see what it is.
It should maybe show up as an artifact ?

Make tasks show up as artifacts.
If the model needs some answers, it can commission and agent or long running thread to find them before it continues, and this progress should be viewable, and you may wish to tick it off or confirm it, or interact with it, before continuing, like browsing thru large numbers of images.
Altering what this reponse is, changes the higher level model output substantially so control, multiverse, and experimentation, reusability, switching tooling - all very importnat.

### where pg is used
all operations seem very simple, with just primitives, except rag which uses vector.  Transactions is only used to remove the file chunk embeddings at the same time as the files.
Everything else is strictly in the src/database/schemas dir, as this is the only place that imports from drizzle-orm/pg-core


## Plan
1. deploy version using latest code using feature flags to turn things off
2. get artifact repos showing in the files section of the app, replacing the s3 operations, using all their existing UI around upload and download, so keep a full db running of theirs, then replace all the s3 stuff with our repos.
3. stamp our brand on it
4. get frames working on the front end
5. set up auth for our systems, may or may not use privy ???? timewasting

Seems best way is to proxy calls thru the db.ts object, and intercept everything while it is still in schema form, and start with a tap that writes to artifact.
This is the least amount of effort to get up to speed, and allows us to bail, still keeps data sort of sovereign.

Vercel deployment is much faster, since we don't have to build a docker image each time.
We *could* technically run a docker image, but this is a fairly slow and inconvenient way to deploy things, as takes about 10m to build.

Vercel for rapid iterations, test deployments, analytics, and general ease.  Fly for the artifact backend.