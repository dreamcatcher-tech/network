
>[!tip] Created: [2025-03-10 Mon 09:27]

>[!question] Targets: 

>[!danger] Depends: 

https://www.npmjs.com/package/reproduce

These guys are making a tool that can take the Git commit that was published with an npm package and verify whether or not they can rebuild it. They are having to make different strategies to accommodate different build solutions, but they expect that about a quarter of all packages could be covered by their strategies. 

Another way to treat this is that we could take those repos and fork them, generating our own napp compliant version that might not need a build step like what they have. We would simply define a mapping or a way to convert their source code into something that we can consume, dripping out the kernel of their code and applying patches that they make over time. 

