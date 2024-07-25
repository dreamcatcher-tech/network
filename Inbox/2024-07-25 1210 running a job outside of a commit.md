
>[!tip] Created: [2024-07-25 Thu 12:10]

>[!question] Targets: 

>[!danger] Depends: 

If a job ran as a side effect, then we could commit back in during the runs, so it keeps it running ?
Means that we can save out the intermediate states of the call.

OpenAI calls have a idempotency key, so we can ensure that we are submitting the same key to stop duplicate runs.