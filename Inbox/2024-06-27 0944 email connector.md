
>[!tip] Created: [2024-06-27 Thu 09:44]

>[!question] Targets: 

>[!danger] Depends: 

Make this a service that uses SES to manage sending and receiving.

Multi tenant.

Use AI interface to handle all aspects of the SES service.
Can be managed by the provider, or it can be managed directly in AWS using the SDK.

Decouple the send and receive functions from the storage of the inbox.

Linked to the dns service so you can purchase or rent subdomains.

Automated spam trackdown processes, with filing of complaints.