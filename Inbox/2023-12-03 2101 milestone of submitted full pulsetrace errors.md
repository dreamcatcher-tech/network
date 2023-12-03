 
>[!tip] Created: [2023-12-03 Sun 21:01]

>[!question] Targets: 

>[!danger] Depends: 

Whenever a client has any kind of error, we should be able to upload the pulsetrace so we have exactly what happened.  We can always solve it if we have this.

AI should automatically anonymize it, and parse it repeatedly to generate a clean repro before submission.  Initially we just file the error raw.  Initially we can sync with their chain directly, and we can broadcast the interpulses that come in from pierce and any other chains, and then we can run validation so that we see the error on our side.

Use AI to parse these records rapidly and converse with them, to be able to quickly know that your customer has successfully gotten the problem across to you no matter how fleeting.

I should be able to run my phone as a shadow of their main prod database, and I should be able to know how far behind syncing I am, so that I know I have at least one good copy of their database.  From there I know I can recover from anywhere, since I can do hash based scrubs to make sure the data is intact at all times.