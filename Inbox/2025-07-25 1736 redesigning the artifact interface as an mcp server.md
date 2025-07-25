
>[!tip] Created: [2025-07-25 Fri 17:36]

>[!question] Targets: 

>[!danger] Depends: 

so the model would browse around the mcp ?

so would napps be behind the mcp server, or in front of it ?

if they returned their commits, and a key indicating if they were repeatable or if they included or caused side effects, and possibly what those results are, then that can be included in the chat too ?

Could it be that artifact is just an mcp base ?

Present the web interface as an mcp server ? the models should be able to interrogate their own platform.

if we strip back the syncer functions to make it show in the UI, and instead we use mcp servers in the UI front end, then we can simplify front end dev a lot, since the perf doesn't need to be super.

We can still use special tools where like a full customer list is important.  then we do watching, and patch the customer list, but we write those as custom pieces, so we get fine control over them.

proxy out calls to other mcp servers thru artifact, where artifact logs the call and makes it repeatable and saves the call in the db.

can return iframe components down as mcp responses.
? those iframes could in turn support mcp protocol calls into them, so the agent can manipulate them further.

they have shopify remote-dom for frames, which seems a much better way to do things.
so if we could vibe generate, and agent test these little snippets, then we have a jitter market working.  remotedom means the components are much nicer integrated, but the dom is still sandboxed in the browser.

The clicks then would likely go back to the mcp server, which could also be used to pull down some data into the component, which could be large, like a whole git pack file, to provide a high speed search, and then keep patching that thing.

it might be the only thing we need to make is an artifact mcp server, then the models work well with it, and all the backend becomes

Weirdly, artifact needs to make ai calls thru the nextjs app, so that billing is funnelled thru the same place.  And then the storage tap also writes the messages to artifact.

the artifact front end library is better as an mcp client, since we can sit atop all their work, and get the same result ?  then the lib is the same in the front end, in the cli, and in the backend between the napps.

make a portion of the mcp server for testing, where it flicks over to the test napp and starts allowing self test and experimentation.


mcp makes like a portable api server.