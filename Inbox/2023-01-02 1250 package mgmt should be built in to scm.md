
>[!tip] Created: [2023-01-02 Mon 12:50]

>[!question] Targets: 

>[!danger] Depends: 

Installing a list of packages should be links to a distributed SCM system that indicates these are hashes, not to be fully inflated.

Means they can be lazy loaded only when required, and have tree shaking by default as only the required code is loaded.  Even files can be partially loaded and executed as soon as each chunk that is useful becomes available.  Would finally allow sharing of code dependencies between web applications, rather than the bundler destroying all that deduplication.

Then the clients can become servers just by running their browsers to fetch the code dependencies.

Means can be run from the source repo too - no packaging / build / install step required.  So no bundler required either as the code runs directly.

Have mappings between compressed versions of packages, or non sourcemaps versions if required.

Each package has the chainId and current hash.  Version numbers used as hints to start from.