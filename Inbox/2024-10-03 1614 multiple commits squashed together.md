
>[!tip] Created: [2024-10-03 Thu 16:14]

>[!question] Targets: 

>[!danger] Depends: 

If there was no transmission that occured, then the commits should be squashed together.

This avoids the need to have alternative accumulation actions that track when we read something, as we just make it an action, and then do a squash commit on it.

This avoids a whole class of problem in the io processing spec.

Skip flushing the json file at processing start if we are going to do a squash commit.

This means that commits can be sent to the client that give them feedback quickly, but they get deleted soon after.