
>[!tip] Created: [2024-02-22 Thu 21:05]

>[!question] Targets: 

>[!danger] Depends: 

Need not actually make any external calls, just needs to take in some text prompts, and return back the responses.

Can do some streaming results too.
Put in a flush command on the isolate-api, so that rapid writes don't do anything in the fs, and only on flush does all the string conversion happen.





