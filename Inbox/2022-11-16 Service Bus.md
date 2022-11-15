>[!tip] Created: [2022-11-16 Wed 08:55]

>[!question] Targets: 

>[!danger] Depends: 

Do some jobs that test the utility of the blockchain as an [Enterprise Service Bus](https://en.wikipedia.org/wiki/Enterprise_service_bus) We would enable each connected service to act like a client or a server, and to have auditability built in. 

Provide jack points to do transformers on the data.  Once encircled, trace the data and provide mocks using anonymized data so that people can replace the services being used.

Identify some queries that are constant, so can be cached.

Deploy tools such as [[Agreemail]] to audit and visualize the data flowing on the bus.

Extract and maintain some reference data by taking regular data dumps, to pull increasing load off the black box system.

## Automated parallel testing
Make our own test apps on top of the bus to run side by side with the black box system.  We can then test in an automated fashion if the test app is producing the same data as the black box system.