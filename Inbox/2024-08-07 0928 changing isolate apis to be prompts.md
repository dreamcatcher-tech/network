
>[!tip] Created: [2024-08-07 Wed 09:28]

>[!question] Targets: 

>[!danger] Depends: 

Having a mapping where the description of the function is supplied to the model and is decoupled from the actual function call being run might be advantageous, as we could change what the description is without changing the isolate code.

Functions could be a file that is referenced in the frontmatter, which lets you prompt the bots with freedom, and the actual isolate call is separate, where you just supply a mapping back to how to call a specific isolate function ?