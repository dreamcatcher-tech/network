
>[!tip] Created: [2024-06-26 Wed 13:39]

>[!question] Targets: 

>[!danger] Depends: 

Speculative execution of long running calls where some calls are gatekeepers is possible so long as no side effects or no actions that we cannot back out of occur.

This could involve some api calls, provided they are discardable.

AI calls are like this.

Means we can run some tests to see if this is a message that is a context switch, or if it passes moderation standards, without affecting the time of the operations that would proceed if these checks passed.

In this way, HAL or the topic management tool could interject when you're chatting and it thinks you changed topics.  This could be told to leave us alone, or temporarily disabled.  This should regularly generate stucks for processing.