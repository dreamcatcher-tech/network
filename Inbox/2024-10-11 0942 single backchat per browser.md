
>[!tip] Created: [2024-10-11 Fri 09:42]

>[!question] Targets: 

>[!danger] Depends: 

If a shared worker or service worker was handling all the backchat operations, which meant zero load on the ui thread, then 

msw might be good for storybook so we can fake or mock responses from the widget api, since this is a shared api and no easil made static by dropping in props from on high.  Can also model loading and offline responses.

Especially since there might be many instances of the api running ?

BUT having pure props means that we can deny network access for the widgets easily.
Pure props means we can tick a change along by putting in a single new splice.

If the backchat branch was per browser, then it just makes a new thread each time a new tab opens, which it does already, anyway.

? what is the advantage of multiple backchats anyway ?
They can actually process concurrent requests, since while one pierce is awaiting, another can continue on ?

OR pierce the remote thread directly ?
Then the tab session stamps the pierce so we know which tab session did what ?

Saves the creation of a new backchat branch each time, and allows a shared worker to be in charge of a single backchat.

The core problem tho, is that commits and things are taking too long anyway, so speed isn't the reason to do this, but a more efficient data infrastructure is the reason - central worker that handles network and binary tasks and can pass big binary data around by URL to take all load of the ui thread.  Signing messages and other operations.