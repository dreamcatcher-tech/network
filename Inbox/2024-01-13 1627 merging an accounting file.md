
>[!tip] Created: [2024-01-13 Sat 16:27]

>[!question] Targets: 

>[!danger] Depends: 

If we keep a record of all our used openai tokens per call, then we can store them in a single file to maintain our account balance.  As different processes merge back into main, there will be conflict between this file.  The merge here needs to be done by an AI where it will do some calculation, so it knows what the meaning of the file is, and it should pick up the help for "how to merge file /accounting" or similar thing.

Design the format so that each process marks how much it used each commit, and then we can merge based on what the totals were.

Then provide responses that can look up history to do calculations, like "how many tokens did I use today ?"  this would look up git history, and then get the status of the file.

These types of merges would be considered normal operating behaviour, and would raise to the human only in exceptional circumstances.