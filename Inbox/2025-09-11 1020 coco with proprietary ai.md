
>[!tip] Created: [2025-09-11 Thu 10:20]

>[!question] Targets: 

>[!danger] Depends: 

even tho we call openai, we can use coco to know that, we did indeed use the openai api.

the tls would not have terminated if anyone in between messed with us.

coco can also solve that problem of calling a proprietary api and guaranteeing that it was in fact called.  By using a coco that has the SSL cert chain baked in to the docker image, we can be assured that the openai api was indeed called, since the ssl would not have passed if the call genuinely did not hit the openai servers.

so by proving the coco, we also prove the proprietary api's that got called, which could be bank statements, AI inference - anything really