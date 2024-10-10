
>[!tip] Created: [2024-10-10 Thu 15:25]

>[!question] Targets: 

>[!danger] Depends: 

Make a proxy during testing that runs and intercepts any calls made, then writes those responses down in a file in the mocks directory.

This allows us to generate and refresh the mocks very quickly.

We should save the mocks as the name of the test itself ?

Also could provide hand crafted message responses, so we can control what we expect the ai to do, and exercise our systems, with responses that the ai would never give, however that is the job of dreamcatcher, and not artifact, so we can assume some control over the ai output is possible.