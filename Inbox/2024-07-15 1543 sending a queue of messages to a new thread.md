
>[!tip] Created: [2024-07-15 Mon 15:43]

>[!question] Targets: 

>[!danger] Depends: 

The later ones must be able to be sent even tho the thread does not exist yet, since the prior ones are going to create it.

So if we detect a thread creation event, then we add all these other actions on to that creation event to be pooled only when the thread is instantiated