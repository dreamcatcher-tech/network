
>[!tip] Created: [2025-03-20 Thu 15:45]

>[!question] Targets: 

>[!danger] Depends: 

fly.io cannot run these services directly, but we could use it to manage docker containers running in enclaves.

consensus on confidential loads spread across multiple providers with a reporting service to detect compromise.

There is a separate type of load which is public computing, that can be verified without consensus.

Often times only the napp or only the data will be confidential, and in fact the container that it runs on can be public. This makes the service of this confidential computing even simpler to provide because the same container can be spun up with all manner of runtimes for different languages, and because it occurs confidentially, the outside world has no idea what exactly was happening here. 

We can provide a sort of a service where we can spread the confidentiality around giving one layer of protection. We can also add diversity so you purposely pick far away different nodes to carry the loads and so by making it so that even even if the confidentiality layer was compromised the loads are all so spotty and all spread around the place that even that makes it hard to piece things back together. 

The ultimate security is running your own devices, but that may not be practical. To be truly serverless, you kind of need this confidential peace to occur. Ideally, only your Ethereum wallet or one of those keys would be able to decrypt what was inside this information, and then you only have to hang on to that one thing without losing it. 

So if you want to, you can run purely off an eth key (or a native key that we supply) and this gives you access to all your private data on these enclaves, that are not only confidential, but also private in that they only give the encrypted data out if you can prove its yours.

Then you have all your data, and all you had to do was turn up at anywhere on the internet with the private key to your eth wallet.

Its probably more trusted than your local computer, since it is guaranteed not to be compromised, and the hardware manufacturer assures that.  Your workload is moved about the place, so it isn't a single target to hit, so you can't be denied access to it.  Plus it has elasticity, so you can burst up and use huge amounts of resource briefly.

Even the coordination data could be public, and the workloads and data kept totally secure.  All that is known is that some job was done - it should be hard even to link the jobs together.

So long as someone somewhere is offering confidential computing, then you can stay alive, even with no permanent base, and no public information.