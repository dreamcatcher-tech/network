
>[!tip] Created: [2025-03-04 Tue 10:15]

>[!question] Targets: 

>[!danger] Depends: 

Sometimes, if we make a database instance, we have all of the different functions and things already in the correct format that we could call from a NAP. In this case, it would be very convenient if we could just simply do the mount function and then for all of the NAP functions that are presented or exported, we should be able to say that we just wanna pass it through to the context object. Instead of giving it paths to get to in a module and a function name, we could keep the function name part but instead of a path we would say context and in context we would look up the path that was being referred to and we would be able to use that to fulfill the NAP request. 

The benefit of making the database instances be NAP format compatible is that it means that we can swap out the NAP for anything else. We can test the NAP. We can call it directly from the LLMs. And we can even run it on Artifact itself in a simulation without requiring all the heavy overhead of a database.

So we could make a mocked version that didn't have any context, didn't have any mounts. Still exported the same stuff. 