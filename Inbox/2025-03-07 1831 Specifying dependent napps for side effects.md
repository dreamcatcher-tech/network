
>[!tip] Created: [2025-03-07 Fri 18:31]

>[!question] Targets: 

>[!danger] Depends: 

It might be that for a particular napp to run, it expects another napp to have already run, which would've set up the context environment. We could allow the schema to specify what napps need to be loaded first or mounted first for this one to operate correctly. 

A simpler answer is to simply export the mount function of the dependent napp and then if there is no context we would run the initialization in the mount sequence of the dependent napp. 