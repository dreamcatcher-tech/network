
>[!tip] Created: [2024-01-07 Sun 21:44]

>[!question] Targets: 

>[!danger] Depends: 

If the AI was given a function to write code to a file, and then could execute it in a sandbox, then we can run the AI thru the errors that occur and have it try modify the code and rerun the tests each time.

Because our functions are broken up into isolates, with little tiny functions with total isolation that are given a snapshot of the isolated filesystem to work on, we can recreate their faults and have an AI try to mitigate them.

When an error occurs in the isolate, the AI tries to fix it, and logs the error as a fault, adding on to the existing tests, then attempts to fix the fault.