
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