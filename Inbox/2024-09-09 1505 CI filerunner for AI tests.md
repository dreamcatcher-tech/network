
>[!tip] Created: [2024-09-09 Mon 15:05]

>[!question] Targets: 

>[!danger] Depends: 

Run the given test file.
Read in the tps report.
Use Deno.test to check things off in the tps report, so that the failures represent the tps report outputs.


In this way, we can use the filerunner to exercise our bots, but inside a CI environment, which is useful while trying to code parts of the system.
This can also be done to give surety before merging in a PR to make some changes.


Ultimately we should be able to mock the AI responses, so that we can assure the mechanics of the system, separately from making AI calls out.