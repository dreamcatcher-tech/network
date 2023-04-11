
>[!tip] Created: [2023-03-20 Mon 10:22]

>[!question] Targets: 

>[!danger] Depends: 

Cache nodes that sit on the edge, layers of hot data vs cold, basically all the nuances of the S3 service, we can offer in a decentralized manner.

Lets people use multiple providers simultaneously, rather than being stuck with just one.  Can run your own hardware, expand temporarily then get your own hardware, rent out your own hardware when it is idle - operate offline, or with complete privacy.

Can allow an existing application to be switched over to this model without rewriting the whole app.

Can be coupled with compute services.

? Can a model of dynamodb be made that runs on chains ?  So make it API compatible, but portable as to where it runs, with internal chain managed service guarantees.

Set up an API gateway where the function calls are met by chains.  Can be a webservice if you want, just by turning on that feature in the chain deployment.  Web endpoints then use a dns service to hit an api gateway endpoint.

The software we use can be deployed yourself, using our serverlessfunctions clone to manage your AWS infrastructure.

Make a static page host that hosts signed pages, that can be verified if you have a simple extension installed.  Extension just says if the page is signed or not, and if so, does the signature match, and is everything else on the page hashlocked.  Will also show the friendly name the signed site says it is, according to configurable name lists.

Serverless clone where all chain ops, like copy, mv, rm, all apply to underlying resources.
The complex has an intended state, and a current state (as determined by reading from AWS), and can make plans to transition between the states.  Can cp your whole infrastructure objects to a new place.  Can make interacting with your infrastructure within your application much more natural, rather than infrastructure being intentionally out of band with code.  In particular this would be good for apps that 


That thing is how do you take content addressable systems, and make a distributed computation device out of them ?