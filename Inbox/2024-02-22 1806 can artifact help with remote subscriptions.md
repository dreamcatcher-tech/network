
>[!tip] Created: [2024-02-22 Thu 18:06]

>[!question] Targets: 

>[!danger] Depends: 

If we have a server that needs to be triggered remotely, then it should subscribe to the chain it is supposed to watch, and then it would receive chain updates periodically, and it would catch up on anything that it missed, and it could guarantee that it can process things in order.

So if deno deploy triggers an onsite service to pull down from moneyworks, this should be very reliable, rather than expecting the users browser to ping something locally.

Plus we could see when the local server was online, since the heartbeat would be alive ?

Make chains that are disposable that are for actions alone.