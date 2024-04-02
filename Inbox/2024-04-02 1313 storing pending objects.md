
>[!tip] Created: [2024-04-02 Tue 13:13]

>[!question] Targets: 

>[!danger] Depends: 

Store the commit that we last ran from, so that to build up from blank, would have to walk backwards getting each from commit, which is used to execute at each spot.

But if we stored all the actions right up until everything was completed, we have less lookup time, but higher storage size.  

Much simpler to just store the commits as a batch.
Replay just notches thru the batches in order.
Later efficiency passes can tighten up this method.