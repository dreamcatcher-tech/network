
>[!tip] Created: [2022-12-14 Wed 11:00]

>[!question] Targets: 

>[!danger] Depends: 

Avoids having large mock data sets committed to git, since all that is needed is the chainId of the mock datasource to connect to.  This can be committed in other repos, and a local peer started to serve the data, or something online.  Once we have the public chain, or the cloud chain for private data, it can be stored on there, much like how S3 is used.

Means the examples can reference standardized data by just using a hash.

Causes the engine to generate a complex at a very specific 

Config to say what parts we want to leave loading, so it never completes.

Means all the functions and responses are live.

Allows storybook stories to cache the chain data between builds, so download is reduced.

? how to include the covenant and the complex data together in a storybook, so it loads lightly ?