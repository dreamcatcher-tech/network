
>[!tip] Created: [2025-03-09 Sun 15:35]

>[!question] Targets: 

>[!danger] Depends: 

Using Fly.io, we can have a relay capable server running in one of 35 regions around the world. If you have two people wanting to talk, they only need one server, and it needs to be the closest one possible for both of them.

What I'm proposing there is that for each user we find the closest region to them in terms of latency and that runs a relay for them or joins a relay if one is already running. That thing has no bandwidth constraints like a user's browser would, so if you have several different users, that container can stream out to all the different users. The idea is that the maximum amount of relay that you need is only ever going to be 35, and even if you're super busy, 35 streams seems doable from a Fly.io box. There may be some optimizations in there, like we could hop through other regions depending on how the latency works, but ultimately even if a particular region has a say 10,000 clients on it, we don't need to from the broadcasters client make a connection to all of those. We can just connect to one gateway or master relay that's in that region, and then it can relay out to its other clients. 

All these little clients should be able to find each other, so we get these sort of bandwidth amplifiers and it means we can do broadcasting in a flash for what should be pretty pretty cheap. The price should be quite low, I'd imagine. 

The core idea here is that each browser should have a representative client running on the edge as close to the browser as possible. This client would act as its chaperone or proxy to the world. It would have high bandwidth, be able to access data quickly, and be located on a backbone for fast access to other Fly.io data centers, allowing it to expose public ports. In essence, it would represent the browser entity to the world. 

Now, finally, this capability shouldn't be available to just us; it should be available to anyone running a napp. As part of the hosting platform, if your napp needs this service for whatever reason, it's there. It's available. The standard interface the AI knows how to control it, measure it, and there are widgets for seeing latency and all that. You can include these in your apps by taking the direct admin dashboard output and putting it in your own app to look super cool and give people feedback on what's going on. 

In a particularly busy edge (e.g., 10,000 clients), we may need 10 different relay servers. Crucially, that means that there's this topography where there's an extra hop delay that's introduced to the machine. This may be very small, however, we could also optimize that further by moving clients that are not using the service in a way that needs low latency can be pushed out to further down the stack so they can experience the latency more. If the topography was also application-aware and the application could say, "you know that it's happy with certain amounts of lag or whatever," then:

1. Firstly, the bandwidth can be cheaper for that tier of use
2. Secondly, we can free up resources for those that want the genuine real-time performance

For example, some people playing a game are also streaming/rebroadcasting that out to some viewers. Obviously, would want to prioritize the players way above any viewers as well.

And this optimization need not be purely for hops through the network; it could even allow for larger buffering to allow the transfer in big chunks to reduce the overheads of small packet syndrome. 

The last trick we need to master is the ability to hand over from one relay to another. We should be maintaining concurrent uploads to different relays in different regions from the browser because the browser can handle at least two uploads, and then we should be able to seamlessly switch where a relay node is talking to some other node and then it initiates the process of cutting that stream over; both the streams are brought in parallel and smoothly blended in, adjusting for the latency between the two. Alternatively, we can do a hard switch so that the peak bandwidth is only equal to one stream, whereas the graceful handover requires 2X the stream bandwidth. 

This handover thing we might be able to do really smoothly using Quick. The benefit of having Fly to I/O containers is that we can use our own protocols (arbitrary protocols like Quick or WebRTC) between all the containers. 

We could use this technique to switch between close enough regions when ever a region starts to go idle, and then we just move them over to a region where a container is already running, costing no one anything extra to make this additional connection. We can turn off our container in one region (or even within regions) once we notice that the sprinkle rate is high enough (there's an underutilized machine), then we can flick over and reduce our container count. 

Instead of offering just pure streaming media and audio, we'd be offering streaming of arbitrary data. This could be files that are being read from multiple locations while they're being written. It could be phone calls. It could be anything really. It's more like a generic broadcast system.

If we were also running on the back of WebRTC, we might start to look like a way that we could even get browsers to talk to each other locally and be a lot more decentralized. I feel like we can make a really big block of blockchain that has this real-time queue ability, where things are finalized in chunks. The criticality of this real-time aspect is to allow the producers of data to share that data preemptively - i.e., before it's been verified by consensus. It's sort of a look-ahead type of thing. 

At that point, you basically have all the features of the internet but now in this blockchain format where the nodes are in a market. The market is dynamic and highly available. It can run in hybrid mode (offline/online) and can jump firewalls, go offline, go near-real-time, and go real-time. You basically have all the properties of computing right up to real-time, highly efficient streaming and turnover of clients. 

fly.io has a fly-replay feature where you can immediately replay a request to a machine in another region effortlessly, so this would be perfect.