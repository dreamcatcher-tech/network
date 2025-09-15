
>[!tip] Created: [2025-09-15 Mon 15:32]

>[!question] Targets: 

>[!danger] Depends: 

so having the container run is one thing, but we should be able to also guarantee the host is running correctly ?

this can be good to know that the host is allocating resources honestly, so the whole box belongs to the dreamcatcher control plane.

If you want to use portions of this for your own work, this is absolutely supported, but the point is that each container can trust that its host is giving it a fair CPU slice, rather than over provisioning and not making good on the available compute promises that it made.

we could run certain hosts as coco gateways, which gives them a position of translating web traffic in and out.

they specialize in bandwidth, not execution.

They work by taking a small set of network coco images, and running them on their network enabled boxes.

Means that you can host, using dns, and rely on these endpoints to resolve, find your edge coco quickly, fire it up.

They are always in whatever region is close, and you can deny some regions or nations or any other condition you want.

The idea is that, these cocos do network work, and that's all, then they backhaul to execution hosts that specialize in doing heavy tasks, and file storage, possibly gpu.

these cocos are hardened.