
>[!tip] Created: [2023-12-05 Tue 11:10]

>[!question] Targets: 

>[!danger] Depends: 

Instead of switch, we could just supply an object that matched the API ?

Then each api call, the payload could be checked for schema correctness automatically at the engine level, rather than manually inside of the request.

Supply a default function as `*` which runs always.

Give pre and post hooks that modify info and pass it down to the other functions ?

Gives more surety about the bond between API and reducer.

Could be offered as a parallel way to write reducer functions.

Means we can use types on the function args.

Might be better for the AI to interact with, as they can update just one dedicated function, rather than a whole switch statement, which has more chance of mis-modification.

Allows mocking of responses since we can mock out the state we want to see.  However, these advanced techniques are for humans, and the AI should be given simple tasks without need for tooling