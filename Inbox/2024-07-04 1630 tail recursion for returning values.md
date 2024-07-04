
>[!tip] Created: [2024-07-04 Thu 16:30]

>[!question] Targets: 

>[!danger] Depends: 

If we are to return the value of a promise immediately, we should be able to detect this, as it will have our symbol stamp on it, and so we know we can bypass executing the isolate again and go straight to the calling request.

This will skip a commit and execution step, saving on commits, and saving time.

If someone does `return await someCall()` we might not be able to help them there ?