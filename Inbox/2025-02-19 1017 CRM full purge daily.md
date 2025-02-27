
>[!tip] Created: [2025-02-19 Wed 10:17]

>[!question] Targets: 

>[!danger] Depends: 

To avoid any issues with clock changes, and other things, we should freshly purge the data every morning.  Doing a full sync would mean that we can tolerate time travel, when they set their clocks forwards.

We could avoid the time travel problem such that if time travel is detected, we just don't update the last modified time, until everything is in the past.