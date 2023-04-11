
>[!tip] Created: [2023-03-09 Thu 13:23]

>[!question] Targets: 

>[!danger] Depends: 

What if we loaded an index that was used to provide an omnibox search function which returned a list of aliases that could then be loaded and baked as required ?
Search object should be binary layer, so it takes advantage of diff patching to avoid garbage collection.

? Pull down the state tree rapidly so have this object first, no bake.  Loading the state tree and using this instead of the channels would be massively faster.  Then can feed this into the table component, and can prioritize which keys to load up

So the server would stream down all the blocks required for the complete app, but they would not be populated until they were actually called upon.

As the number of customers gets high, so long as loading a specific row stays low, we should favour loading on the fly.

Have a priority queue and a dribble queue - slowly we process all customers, but as soon as we have some direct rows, we favour those immediately, and possibly look them up in parallel.

Loading a single row appears to take about 6ms max.  That means that a screenfull could be loaded in 180ms for 30 rows, which would appear instantaneous.