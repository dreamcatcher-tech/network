
>[!tip] Created: [2025-06-07 Sat 16:36]

>[!question] Targets: 

>[!danger] Depends: 

We could do direct imports using npm, and then publish versions of a front end that have different dependencies, and so selecting which ui you want means picking from the deps, and possibly having it built on the fly.

This is needed for cases where there is heavy UI interaction, like tool tips, popovers, and other pieces that are deep inside of another element.

The swapping can't be iframe isolated, but it can be switched out by configuration.