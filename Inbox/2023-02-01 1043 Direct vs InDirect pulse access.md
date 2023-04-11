
>[!tip] Created: [2023-02-01 Wed 10:43]

>[!question] Targets: 

>[!danger] Depends: 

Inside a covenant, the reducer can ask to re

Writing seems to require direct access, but reading is done using indirect, where the engine reads it for you rather than requiring an action.

This is good for command and query responsibility segregation, and to quote: "Reading something does not change the answer"

The subtlety in our system is that to read something requires first a command telling a chain to read something, and from there it does not change anything