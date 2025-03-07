
>[!tip] Created: [2025-03-06 Thu 16:20]

>[!question] Targets: 

>[!danger] Depends: 

We can complete this module if we can cover all of the formats specified in JSON-C, and we have executed tests that include files and streaming and streaming with files as well as the regular request-reply options and ensure that everything has strong type checking. 

I think the best way... Is to have the simplest working version of the system and then make sure it works end-to-end. Then come back around. Start a requirements document to add in extra features so that the types get incrementally changed rather than being very confusing. The typing seems quite a mess...

It might be that we need to export or calculate the types ahead of time as a Cogen step because the inference might be just simply too heavy. The primary issue is that the Zod schema can come in with so many options that we need to resolve the schema down to a standard format before we can do the type inference anyway, and that might be a little bit beyond or further than what TypeScript is supposed to be used for.

After all, the napps are intended to be public publications as opposed to dynamic things, and so a build step in the publication to the napps registry may be warranted.

The NAPs registry would be special in that it would be a registry for all types of code and languages. That would be a meta-registry. And so having a build step or an auto-code gen step seems kinda on par. 

Once people start using the registry, they'd be able to also use virtual compute resources on it - start running things immediately, hook up an agent to help navigate it, host the agent on the platform, and all those sorts of things. 

If we take all of the functionality that we are asking for out of the NAPs format system and put each one into an individual file, then that means that we can upgrade each individual piece or work on it in isolation as opposed to these large monolithic things that keep occurring. The key seems to be first of all defining the requirements and then assigning one requirement to each file. 