
>[!tip] Created: [2023-12-01 Fri 12:18]

>[!question] Targets: 

>[!danger] Depends: 

Issues all round.

Firstly the isolator should continue on an existing run so we aren't rerunning and rehooking all the time.

Secondly, whispers should not require a key, where the key is optional for the surrounding application to hook in.

HOWEVER we might not even need this, as we might supply context to each effect and the internal hooks can use the context to break out and recreate the same a

Then, we want to show all chain functions that resulted from running a single given action, as a way to see all the things we are doing.  Should be able to see all calculations that are taking place all the time across the whole app if we wanted to, presented as a log.