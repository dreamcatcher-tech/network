
>[!tip] Created: [2023-12-20 Wed 12:14]

>[!question] Targets: 

>[!danger] Depends: 

After making modifications to sectors, advise the user that we are saving the data into a permanent storage as a backup.

Then trigger making a commit to github to update the content of a json file.

In this way, any time a change is made, we have taken a backup.

Recovery of the system involves importing this file from github so we always have the latest version.

Customers follows a similar pattern, but involves writing to moneyworks before it is considered saved.  Hopefully we can simulate this in tests, and see what the behaviour of the AI is.

Error handling needs to be presented to the user too.