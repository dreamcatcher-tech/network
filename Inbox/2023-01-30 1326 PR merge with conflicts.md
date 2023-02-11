
>[!tip] Created: [2023-01-30 Mon 13:26]

>[!question] Targets: 

>[!danger] Depends: 

Eg: CRM has unique customer numbers, but if the app is offline and generates these, will collide on merge.

This can be solved by having some conflict resolution logic for handling children conflicts.
The logic can keep the same chainId for new customers, but rearrange the name to avoid conflicts based on first in first served.
The requester can then recover what the merged child name was by using the chainId.

As long as the client logic knows to look for these merge resolutions, detect them, and present them to the user for review, the app can carry on as usual.
Any globally unique id needs to always be referred to by reference, or require quorum.  For example if the email invoice generator needs to include the customer number, this cannot operate offline, since it knows it needs to present a coherent view to the outside world.