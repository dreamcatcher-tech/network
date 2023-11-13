
>[!tip] Created: [2023-11-10 Fri 17:33]

>[!question] Targets: 

>[!danger] Depends: 

? does this degrade from our control of the ai ?
We could copy this behaviour but some of the features are too advanced, like the code interpreter.
So we have to use their service, and attempt to build our own, or benefit from other shared efforts.
The tooling is so general and so powerful that the incentive to build an open source version is tremendously strong.

For now, the latest features appear to be getting added in this threads way.  So we should use it to get the latest features, but we should look to get off that.  Getting tangled in their features makes it hard to run an open source version.

Seems hard to keep it closed how it worked in the background - the steps being shared seems important to building high quality tools, so it will likely always stay openish.

Multibot would look like just an api call to make from HAL, so it could be placed in the app store with full functionality, if we exposed an API endpoint for our chains to respond from based on path.
## Handling commands
"add a customer to the crm"
Need to instruct it to keep looping `ls` functions until it finds something that looks like what it needs.  Or provide a large set of embeddings made up of all the descriptions of all the covenants in the system ?

Probably a natural language manual for the model to read and learn how to call the right function.

Key is getting it to navigate to learn more about something, rather than needing a man page.  Could be we need to generate all the functions using the covenant map from the installer - teach it about nesting and generate a summary for each parent, to say what its children can do.

But then if a covenant was added at random, ad hoc, we wouldn't be aware of it.

If each covenant had a description with it that talked about what it did and what its children did, then the assistant would be encouraged to learn more about it.  This means that an almost unlimited size of tree could be navigated the same way, where we just look at each layer and choose the most likely layer, or say you don't know.

Best place is the installer of the covenant, since it says what a thing is in context with where it is installed, since a datum can be used for many different things.  Installer would have a sort of manual that can be used to find out how it works a bit.  Installer could override what the bots at each place do.

The description could be auto generated, or at least patched each time a stuck was caused when a good description would have avoided it.  Then the description is patched and the rule that created it is baked in so that no matter how it changes in the future, this piece is checked for regression.

Almost like we need to make embeddings of all the apis of all the covenants at all the paths ?
Or a two way mapping between covenants and paths, so each covenant can know what chains it is used in, so that when the embeddings are searched for meaning, then we can see what paths to use ?

But how to use the path as a means of scoping ?

When an app gets installed, it should install some man pages, that the AI uses as reference to figure out how to call things.  If it can't find something that sounds like an app, then it needs to offer some solutions, such as installing the crm from the store.


