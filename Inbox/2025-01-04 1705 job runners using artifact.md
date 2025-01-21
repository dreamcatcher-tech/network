
>[!tip] Created: [2025-01-04 Sat 17:05]

>[!question] Targets: 

>[!danger] Depends: 

Have different servers that log in to artifact and hook in to job queues, or put themselves in a pool where they can run at a cost.

They can do repeatable or non repeatable things.

Once the machine is auth'd, possibly with a long running token, then it sits and waits for instructions.

Machine can report its own stats.

It gets controlled by the reliable serverless management service, and the jobs get distributed using artifact to these workers, which are available in a pool.

Pool size is managed using artifact, so if a worker is saturated or unavailable, it will switch to another runner, or fire up some docker containers or servers on aws spot or otherwise.

Can use the seedbox as a job runner for the processing of the files.