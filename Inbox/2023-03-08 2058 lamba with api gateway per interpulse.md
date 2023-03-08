
>[!tip] Created: [2023-03-08 Wed 20:58]

>[!question] Targets: 

>[!danger] Depends: 

Because of websockets being long lived, direct connection to browser clients seems hard.
We could model the top of the engine as the api gateway, where it receives interpulses in.

In this way it would scale to the number of lambdas available.

[apex up](https://github.com/apex/up) may be a better deployment model than serverless apps.
it was made by TJ and has been abandoned, so we might get some kudos for picking it up again.