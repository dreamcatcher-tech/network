
>[!tip] Created: [2024-10-08 Tue 09:00]

>[!question] Targets: 

>[!danger] Depends: 

Should expose artifact isolates that can be called externally via the json rpc, so this is the covenant format.

Should indicate expected cost to run, and provide some example runs by way of a git branch or something so the cost to run can be assessed without actually running it.

Dreamcatcher format would define attribution as well as operational interfaces ?
A feedback mechnism and a forking mechanism.

Should be able to wrap other package formats, like js, jsr, go, python, etc.
Provide a nice way to interface these into an LLM invocation model, which is almost always json parameters.

Can run its tools in isolation.

Only reproducible builds could be used in blockchain mode.
Luckily JIT languages like js and python can be blockchained since they are compiled when run, so no predictability needed.

Definitely the package manifest should be inert, and not require any execution to understand it.

We will need to set up a registry system, so we can upload these nApps.

Whilst you wouldn't run the linux kernel on artifact, you might use artifact to manage the git repo that it runs on.  Like a wrapper around github.

Need to define a stateboard interface and widgets config, where widgets may be depended upon.  Stateboard widgets should be buildable from source.

Being git branch based would mean that upgrading a package only pulls down the diffs.  Having a signature means you can receive it from any source and know it is valid.

Not sure if semver applies for an NL interface ?

Use case branches of actual usage need to be linked to it as well somehow, so you can walk around and pull in places where the package was used in anger.  If there is a public version of the package and you choose to publicly use it, then this is cheaper, since much of the data is shared, and you get cheaper resources since it is of general good for people to see how it is being used.

Making an AI native package format means it is chattable.

Once we have AI tools to manage this spec, then we should do it, since it takes a lot of work to do without AI help, but with AI, it could be quite easy.

They include files that come with it, which might be starting formats and templates, or a knowledge base, or a prepopulated database file.

We should export functions in an artifact interface, which allows tools to be exported from the nApp too.
The benefits of exporting a tool in this way is that it is tied to the dreamcatcher ecosystem, and is attributable, it is callable in a standard way.

Some nApps might be able to run in the browser, and be run in an iframe or other isolation mechanism ?

Lifecycle hooks, like when the agent is being run, ended, and other times, we can run some kind of function that will update state to keep things relevant ?

## Presentation
It should look much like jsr.io, and should present what it is meant to do, provide a test playground where you can chat to the package directly, can ask it what it does etc.  Can also use a deeper tool to interpret what it advertises so you ask meta questions about itself, vs the interface it advertises.

All apps should now how to hoist their call if they are incapable of answering, and so meta style questions should be hoisted.

Then it would show files, which lets people browse the package and see what is in it.

Docs would be the exported info about the package, like definitions, terms.
Language would be what NL flavour it was in, and show show translations between the different languages so people can read in different languages.

Cert the translations, so the tests are rewritten in the other language and the translation is affirmed by some people.  Probably monetization in doing this work.  Tools can make this happen rapidly so people can just read very quickly.

The tests and the latest tps report can be shown, and can be engaged with immediately.  Show the languages the tps reports have been run on, too, using both input translation and whole prompt translation.

To call on this thing is to simply chat to it.

The classical code tools are exported as json interfaces, and can be called on using the llm to chat some params, or manually entering params, or a combination, where a widget is shown that has blanks for you to fill out, which you can chat with and get them filled out with suitable example.

Basically the LLM bundled with the napp knows well how to make the tool calls, so you can play with it in this way.

Changes and more tests can be added directly to the package, and you can try solve them or want an AI try solve them.

The publication page should be no different to the workbench for working on it.

Versions lets you navigate to past versions.

Contributions shows the indifidual contributions that were made, and any contributions that were large enough to warrant an NFT being made prior to commencement.  So can see the effort gone in.

Attribution lets you trace how the payment for these things was dispersed.

Tokens burned shows burns during creation, a typical test burn, and also the current usage burn.  Scores from all the LLMs that are appraising its usage are also given, like some kind of guardian network.  You can take the one provided, or run your own.

Running the classical code would run it in a branch and show the effect.

To call it publicly may cause a link to the invocation to be logged against the package.
To call privately means you link to this git branch.
You can update the execution stats, or hosters can update the stats without disclosing actual runs.

Have scores to show all the things a good napp needs.

Can try it with different llms, and show the different test scores when running under each one.

Independent comparisons with other packages.

The tooling code can be any language, and is run in a serverless fashion.
So this format could also be used for serverless apps to call on it using just a web call.  Can make it easy for code writers to bundle up their code and publish in this runnable way which means zero setup to start interacting, as it can be called using the json functions.
Slap an LLM in front of it and make it easily demonstratable with no environment setup.
Plus we are selling hosting services.

Each package is capable of being run without any network connections.

Permissions required is stated, like it might need some access to the api gateway, which is how to access everything, it might need filesystem access to be granted for it to work effectively.

If it needs something exotic and stateful like a sql db, it should come with an example bundled in.  

Users can run it on a dedicated fork if they want to keep it private.

the tests of one napp can be applied against another to show switchability - the hash of the test folder would be the same.

Mock responses for its tools can be provided, to allow testing without making expensive or slow calls out to the api gateway.

If you can chat with a napp, then you should be able to chat with the collection of napps to find the best one for your needs.  Generate some example responses you want, and ask the user to confirm them if they have time, then crawl the list and run queries against each one looking for suitability.  Raise an issue if needs are not met with ones that come close.

Napps should be aware of their costs, and they should be able to estimate accurately the price of their invocations.

We can test this by sampling real invocations and asking it to estimate those parameters.  A good estimator score means you can rely on the results it gives.

It should be able to show its widgets that it exports too, and show scenarios where they exist, as well as how they can be combined, which an LLM should exercise for you.  Then when you chat, you can have a mini stateboard show what you would see, and interact with it there.  Also show the selection integration so you can know how it feed back into the prompt selection ui.

## Notes

Peer deps say other napps that this thing expects to call but that aren't children of it.

? Do we need a standard for the comms between these napps ?
like an sbar type of method, which is proven to be effective in medical and military settings.  This should be overrideable and so plain text is possible, but this format is preferred, and the napp should indicate it is tuned for a particular request type.

Or maybe its on the caller to call in a specific way that is proven to be beneficial ?

Needs a section for api calls, also a filesystem map / chroot, as it might need some config data about where to write things.  Also network permissions, maybe on a per isolate level, or at least at the napp level, so we can lock down the package access.

All network should go via that api gateway, which is an action driven network interface.  Streaming of sockets would be a speciality service, but again that could be standardized in terms of what packets and what addresses.

Worst case we can allow some special access in cases that need it, and we'll work to standardize that access.

But if we passed in the whole folder, then it worked on it in isolation and passed it back, that might be enough, so they waouls be little minibranches that only alter the narrow file content that it was allowed to access.