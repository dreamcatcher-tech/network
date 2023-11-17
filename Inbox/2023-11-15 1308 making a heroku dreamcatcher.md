
>[!tip] Created: [2023-11-15 Wed 13:08]

>[!question] Targets: 

>[!danger] Depends: 

Just using a postgres db as a kv store and a heroku instance as a means of making and holding libp2p connections open.  

Sync up copies of the root chains of each device, so we can analyze them using a superHAL type view.  Give each HAL access to view the HAL artifacts of all the others.

Might be able to do permission based systems in this way.

Use the blockchain as a way to trigger effects on the server.  Benefit is that we won't get spammed since it isn't just a relay point for openai.

So everyone connects their chains to this main server complex, and then posts what they want out of the remote chain.  So the polling of the openai api is handled by the server side.  You can only call the bots that we host and run in this way.  All your data is server side and you are simply syncing down.  You could move your chains to another server, that you host.

Everyone should be able to see everyone else for now.

BUT this makes it hard for the AI to do anonymity checks on what the person is entering.

Or, make the browser do API calls out to somet