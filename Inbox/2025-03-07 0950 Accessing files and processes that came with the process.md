
>[!tip] Created: [2025-03-07 Fri 09:50]

>[!question] Targets: 

>[!danger] Depends: 

We can implement a mechanism similar to thread-local storage for fibers, ensuring each fiber has isolated access to input and output files relevant to its current action.

When a fiber runs an action, it should automatically have direct access to files associated with that action. To simplify file handling, each fiber could have dedicated locations such as an "inbox" for incoming files and an "outbox" for outgoing files. These inbox and outbox paths would be reserved locations on the filesystem that exist exclusively during the fiber's execution.

The inbox would contain only the files provided as input for the current action. The outbox would initially be empty and serve as an ephemeral storage area, cleared at the start of each action execution. Any files placed in the outbox by the fiber would then automatically be included in the action's response.

When the fiber completes execution, it needs to clearly indicate which files from the outbox should be returned or persisted. A simple approach is to treat all files in the outbox as outgoing attachments to the action's reply, eliminating ambiguity.

For sending actions that require attaching files, the fiber can use a specialized method that generates a unique action ID (using something like async local storage to avoid collisions). This method would provide a designated "envelope" directory, where the fiber places any necessary files. The framework then automatically associates these files with the outgoing action.

By maintaining these clearly defined and ephemeral file storage locations, we avoid complicating function signatures with additional arguments or forcing complex data structures into the function API. This approach provides clarity, isolation, and simplicity to file handling within fiber-based actions.