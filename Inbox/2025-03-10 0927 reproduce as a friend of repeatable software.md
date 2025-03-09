
>[!tip] Created: [2025-03-10 Mon 09:27]

>[!question] Targets: 

>[!danger] Depends: 

https://www.npmjs.com/package/reproduce

These guys are making a tool that can take the Git commit that was published with an npm package and verify whether or not they can rebuild it. They are having to make different strategies to accommodate different build solutions, but they expect that about a quarter of all packages could be covered by their strategies. 

Another way to treat this is that we could take those repos and fork them, generating our own napp compliant version that might not need a build step like what they have. We would simply define a mapping or a way to convert their source code into something that we can consume, dripping out the kernel of their code and applying patches that they make over time. 

Reproducible builds are good for producing reproducible code. 

We could make an addition to the reproducible build step that also verifies the reproducibility of the code itself by way of fuzz testing as well as code analysis. And running the code in hooked environments that can determine when any changes in the environment would change what the code does. 

`vlt` is part of a group of companies that are attempting to make open source financially sustainable as well as highly secure. Our position is that the economic incentives are required to be aligned in such a way as to make the security incentivized. Security is a desirable purchasable thing that everyone understands they must pay for.