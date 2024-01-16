
>[!tip] Created: [2024-01-17 Wed 08:21]

>[!question] Targets: 

>[!danger] Depends: 

The core of our system is the isolation of git filesystem views.
Could it be that the operations that pass messages around and invoke things

LLMs are good when there are a selection of well defined options, and in particular when the system is a state machine, moving from one defined state to the next.

GIT can be considered a state machine, and so the ability to move around could be left up to an LLM to operate.

We should make a git explorer, or pull one in, since being able to see inside these operations is crucial to our understanding, makes debugging easier, and will be used for the lifetime of the project.

If the LLM could be used to manage the software components, and to keep them maintained and upgraded and tested, that is probably the best place, as these operations need to run by machine for speed and offline ability, but they can also be deterministic, or very linear.  This is best handled by an LLM arranging a workflow and confirming it matches some pseudocode and passes some model checker test.