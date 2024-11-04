
>[!tip] Created: [2024-10-27 Sun 17:03]

>[!question] Targets: 

>[!danger] Depends: 

Show how your code can get called from multiple diffrent AIs.

Part of the tooling we provide is to eval your code against different AIs.

We are a hosting provider, and offer being able to run your serverless functions easily.

The other tooling is the automatic generation of header info for all the different languages you might want, like python, rust, js.

We would auto generate all the different sugar that makes packages easy to consume in their native language.

Make this registry searchable easily, so people making AI apps can play with all the functions offered.

Coming in with multiple languages, and all have a gateway api access, so they can be hosted, and can call out easily.

Multiple apps can be connected together, probably live in the registry app, with the interactions being debuggable.

It is also portable, so we offer some hosting, but anyone can offer hosting with various guarantees.  We only show those that adhere to dreamcatcher payments systems.

So we would really a general serverless compute registry, offering secure, scalable execution of any language.  All packages run in isolation, on your machine, or ours.  We offer high levels of parallism on execution.  We offer perfect repeatability of the infrastructure to aid in debugging and tuning.

Our registry would generate versions of a package that was usable by every other language runtime that we support.

People could publish very thin wrappers around popular packages.  These could be done largely by AI, and would represent the first large scale AI coding task undertaken.

You should be able to download the whole registry onto your own computer, and should be able to get paid for seeding the packages like how torrent servers work.  Leechers get asked to pay more, and in general everyone is encouraged to pay a small amount, in money, or in bandwidth.

We would crowdsource the registry maintenance using AI and the dreamcatcher.  As seed funding comes in, it gets allocated to package conversion and testing.  Missing packages are defined by their interface.  Faults with packages are monitored inside the dreamcatcher.

Dreamcatcher about the automated allocation of funds as well as the attribution systems.

By making the registry be decentralized, it becomes the stickiest registry available, since it is the only one where everyone is free to leave.

Current package registries do not make the packages directly deployable, since that isn't what the design of the package is.  Yet with multiple options to connect hosts, and portability options for hosting, one can compose an app on the registry directly, with the help of AI, and then deploy it and monetize it.

Solves the supply chain issue since all packages run in their own isolated sandbox, and the messages between them are explicitly declared, declarative, and the permissions are narrowed down to that individual package, rather than the whole app, defaulting at nothing.

Can have benchmarks, action cost, and AI token cost benchmarks running constantly, as well as consumption stats about the actual execution of the functions.
Can supply your computer to do free operation of certain libraries that you like, or people can pay for some kind of consensus managed execution, or closed hosted, or dual closed hosted.

Show extra tools like tokenizer to analyze the outputs, and be able to build eval helpers.

Have an online debugger for timetravel debugging, with AI assistance of your choice built in.

Seek to specify the format we use like the ietf does: https://datatracker.ietf.org/doc/rfc8927/

Json type definitions, or JTDs seem like the standard we need for interop ?

Additionally, could we use Request and Reponse from the web definitions ?

So the standard would be to export JTD out of the napp.jsonc ?

? Why does it seem that having a napps registry is closer to having AI do anything you want for you than having any other form of system ?  We should be able to offer any functionality of any AI no code system using purely this registry.  This encourages people to make their versions of the innovations they see unfolding, in a pluggable way, where peoples data stays with them during switching, since they never gave their data up.

The days of sticky platforms because the users data is with you are gone - AI can migrate any data anywhere - the best tooling is to make the data universally acceible anyway, then the sticky platform is the one that understands this unrestricted format, revealing the universal blockchain, as opposed to designing it and defending it.  It is what remains when all central interest is removed.

In an app store, moderation and payments is crucial.  In an AI moderated system, this overhead reduces to near nothing.  

Advantage is that we get massive multithreading for not much effort.  This need not go via a blockchain, and could just be pure rest based invocations.  So the packages would get coded up as single threaded, which is easier to reason about, then their invocations are managed by a napp interface, so they can have queue management and load balancing handled outside the code - it just asks for everything and may hint at a priority - the host should figure out the optimum thruput.

Ideally we could have a napp host built in to deno or nodejs, so it gets called directly in band with no network losses.  Deno coud just use workers the same as the browser.

Make a version that works in a browser to do the same thing for running browser compatible napps in multiple worker threads, to max out  the local computer resources.

This immediately shifts the browser to be a direct window into serverless execution.  The browser need only be lightweight, fast, and visual.  It makes all programming languages directly compatible with browser based control and interaction, with no glue code in between.

Its not that its nocode / lowcode, its that its zero code orchestration.  Its allowing the browser to call arbitrary code safely, in any order, without anything in between doing the wiring.

Focusing on providing apps for LLMs to use as tools, and hosting those tools, vs trying to do things with the LLMs directly.

The transformation efforts:
1. converting all packaged code into json functions
2. converting all API services into side effects

Further proof is the adoption of RFC for JTDs which indicate a shift to cross language types for programming.  

Three unrelated things:
1. securities free project funding
2. ai function calling
3. ai control of humans

Makes packages become apis, just as we can call apis regardless of what language it was running in.

Must be running offline mode.  The reliability should be in finding the hashes of the pieces that make up the package, not the availability of a particular network service.  Should be able to pull from peers, local cache, the works.  Then we have a few strong hosts, and the network has practically perfect uptime.

## Competitors
We should make a map of all the major package registries on the internet, map out their control structures, incentive structures maybe, and indicate how they may have been subjected to a control that's not in our best interest, and show that there's an opportunity for a unified package repository that stays open and has incentives built into it to keep it sustained.