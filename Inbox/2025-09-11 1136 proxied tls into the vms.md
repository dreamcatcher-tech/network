
>[!tip] Created: [2025-09-11 Thu 11:36]

>[!question] Targets: 

>[!danger] Depends: 

the browser should have its tls terminated inside the coco vm.

so it gets its gateway tls terminated and then internally, it is a tunnelled tls stream.

it could be just pure http, since we have coco guarantees on the gateway, but seems easiest to do real tunnelling.

plus it allows a proxy redirect, where the proxy does no tls termination, just points at machines in the cloud.

then the browser has its connection with the remote vm, attestation passes, green light, coco on.