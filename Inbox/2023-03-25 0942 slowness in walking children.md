
>[!tip] Created: [2023-03-25 Sat 09:42]

>[!question] Targets: 

>[!danger] Depends: 

To walk all the children seems to always be slow.
Diffing can give us what changed rapidly, but to know about state changes requires the tree to be written, and querying the prior latest for a given channel.

Is the new condensed block format able to give us a way to know rapidly if the hash of the latest PulseLink for a given channel changed in between the hash of some prior Pulse ?

We can rapidly find what channels changed by using the Pulse contents to give the diff.  Then, of those channels that changed, we can rewrite Pulselinks to be a pointed to some hashed info.  Then we can know when this hashed info changed last.

If PulseLinks were replaced with a pointer to some hash info, rather than being hash info themselves, then we can rapidly detect if they changed within the Pulse diff ranges.  So from a single pulse and the hash of a prior Pulse, we can instantly know if the `latest` key in a channel has changed since the prior was signed.

Also the hash of the Rx slice would have changed, and if tip changed, latest would have changed as well, also if only latest changed, Rx would have changed.  So if we look up where the last Rx change was, we can know instantly if the child has updated within the query range.