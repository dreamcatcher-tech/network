
>[!tip] Created: [2023-11-15 Wed 13:08]

>[!question] Targets: 

>[!danger] Depends: 

Just using a postgres db as a kv store and a heroku instance as a means of making and holding libp2p connections open.  

Sync up copies of the root chains of each device, so we can analyze them using a superHAL type view.  Give each HAL access to view the HAL artifacts of all the others.

Might be able to do permission based systems in this way.

Use the blockchain as a way to trigger effects on the server.  Benefit is that we won't get spammed since it isn't just a relay point for openai.

So everyone connects their chains to this main server complex, and then posts what they want out of the remote chain.  So the polling of the openai api is handled by the server side.  You can only call the bots that we host and run in this way.  All your data is server side and you are simply syncing down.  You could move your chains to another server, that you host.  Otherwise its all stored on your local machine, and we have to do syncing to get access to it, but it will be quicker to talk to openAI.

We could also make users call openai directly from the browser, which is the fastest possible way, but then they can delete other peoples threads.  This is the fastest way to get going now, will be immediately transportable to the server, and is great for testing.

Everyone should be able to see everyone else for now.

BUT this makes it hard for the AI to do anonymity checks on what the person is entering.

Or, make the browser do API calls out to somet

Think we can add a playground link to any assistant that we build up, and allow people to program assistants in the assistants api, that we can then call with our users: 

`https://platform.openai.com/playground?assistant=${run.assistant_id}&mode=assistant&thread=${run.thread_id}`

Use meta on threads to add chainIds and paths, so we can look them up in reverse.
Maybe could store the whole block there.

## Plan
1. Get HAL working in storybook using calls out to openai in the browser, requiring no infrastructure
2. Get HAL working using a hosted version with some database on disk, probably AWS lambda and s3, or plex with a kv store.
3. Add some permissions managment in chain
4. Be sure about the permissions making us a defendable hosting solution that can multitenant

## Website display
Build a set of nuggets of text, pictures, and layout, so the LLM can decide to lay out different nuggets.  When click on one, it loads the LLM with some extra info, and also switches what the layout is.  Eg: initially list Funders, Actors, HAL - clicking on each one, goes deeper in the tree of knowledge and causes HAL to make some statements based on what you've asked so far.

As the llm results come in, it might rearrange what gets shown as a nuggest, and it might alter the text of the nuggests to suit.  These rewrites could be dynamic and in parallel.  Will be based on your conversation history.

Could use the streaming version to do some decorative text first, and then the larger text shows up later ? 

Then as the chat progresses, the widget text continually changes as the discussion continues.

## Mint pipeline
Being able to share the process of the nft minting tooling directly in the browser.
Users can submit something to be minted, and can see the checks it goes thru, and can navigate them all in readonly, plus can fork and run their own versions to experiment, and submit a PR back to main.