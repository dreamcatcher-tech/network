
>[!tip] Created: [2025-03-01 Sat 16:15]

>[!question] Targets: 

>[!danger] Depends: 

Just like being able to provide a mutable socket to send low latency comms around on as tho we were writing to a file with a stream of bytes, we should be able to move these relay nodes between fly.io hosts.

If we discover that another host has a lower latency, or a host is getting congested, then both participants, independently, start sending duplicate packets to the new host, then once received by the recipient they stop sending on the old one.

Or we can do a few test messages, and then totally flick over if we want.

Timeshift could be gracefully managed between the two.