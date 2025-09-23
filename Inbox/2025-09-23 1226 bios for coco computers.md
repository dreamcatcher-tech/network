
>[!tip] Created: [2025-09-23 Tue 12:26]

>[!question] Targets: 

>[!danger] Depends: 

a little standard coco that boots and makes decisions about keys to unlock.

this thing would boot from sealed tpm keys, so that it was completely impervious from the outside, and even from the app that it controls.

so the top level chain is the bios host.

when traffic comes in to a coco, we use the bios to know if we should wait it up.

it can set a firewall with some ssh or other creds, and other conditions to wake it up with.

otherwise it can be woken by anyone.

pay to wake means the caller has to pay for it to wake.
or it can cover its own costs.

if caller pays, then firewalling doesn't help much, since you deal with auth inside the bios.

its like wol settings, to wake it upon proof.
the request still has to pass the deeper checks, but it stops credits being wasted by spam.

