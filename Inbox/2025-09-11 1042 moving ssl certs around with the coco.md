
>[!tip] Created: [2025-09-11 Thu 10:42]

>[!question] Targets: 

>[!danger] Depends: 

spin up a coco, get a cert issued, then store the cert securely in the coco.

this means that, you can move your coco to run locally, and the ssl certs would still be ok.

can a coco be made so that, it won't actually spin up unless the environment is trusted ?
so it boots, and it measures its environment, and it exits if it doesn't match expectations.

so you could never get it, and trick it into opening up its secrets.

is it portable ? like it can be moved to other hosts ?  or does it need to know that list in advance ?

you could run it on multiple hosts, and share the same ssl around, making it part of the top level ssl root of trust.

so then so long as you set up your dns correctly, the ssl cert would show, even if you were running it locally.

so you could tunnel out, as pass the letsencrypt cert tests.  Or you could run it on another host with public access, then move it back inside your own local net, then set up your dns to resolve to that host, then you have local ssl certs just like the real internet.