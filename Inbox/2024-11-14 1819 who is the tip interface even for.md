
>[!tip] Created: [2024-11-14 Thu 18:19]

>[!question] Targets: 

>[!danger] Depends: 

It should possibly be fully an action interface, from the start.

Then to call the tip function, we call using action creators.

So local tip takes a narrowed form of action that would otherwise be addressed off chain.

Making it be the same as the api interface helps a little bit, but then we have a conversion problem between the two.  Being the same means it could be passed in as part of the api for testing, rather than relying on the action translation system ?