
>[!tip] Created: [2024-04-17 Wed 21:27]

>[!question] Targets: 

>[!danger] Depends: 

Making built in multipliers for request ramp up.
A new type of queue message that is atomically run, which writes a marker for each boost message, then sends a queue message, which deletes it and does the queue amplification.

So the programmer never has to worry about ramp up, they can just do huge numbers of things in parallel, then the system does the boosting automatically for them.

? are large broadcasts slowing down the system ?

Goal is that we should be able to chuck any number of requests at it, and it should do them at maximum speed based on deno.

We should only do broadcasts for chains that are being watched, not for all things.

Make a multiplier function in the api, so that it generates more load.  This would be a map function that can iterate over collections of files, possibly in parallel.
Can run in parallel and ensure results come back serially.

If we want to iterate over a large number of files in parallel, we should internally handle that.
Supply us a path, a regex / glob, and a function to run, and we will run it over the whole thing in parallel.
Can run in a reduce pattern, where it runs reduce over all the results ?
Or merkle, where runs a reduce pattern in a fractal sense to get more speed.

Should try write a 10k customer file directory out.  Might require some tricks with dir splitting to stay responsive.
Time to create, time to modify all files, time to query all files, time to modify a single file.