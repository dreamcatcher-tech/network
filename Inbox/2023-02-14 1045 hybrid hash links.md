
>[!tip] Created: [2023-02-14 Tue 10:45]

>[!question] Targets: 

>[!danger] Depends: 

When refering to content around our site, we want to be compatible with existing browsers, but also use hash based content.

We may use a url scheme that uses part of the chainId and part of the pulseId to form a strong enough reference that trades correctness for convenience.

Then we can expand out ?

Or, just use a single pulseId as the reference, or a single chainId with a pulseheight / pulse partial, so the combination of chainId and part of the pulseId should completely resolve the content.

Means that any statements we make can easily be parsed into hash native protocols when these become available.  In the meantime, anyone can republish our sites using the software we make, and can swap out the base urls for their url, then recover the data instantly.