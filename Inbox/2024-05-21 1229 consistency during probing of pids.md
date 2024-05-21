
>[!tip] Created: [2024-05-21 Tue 12:29]

>[!question] Targets: 

>[!danger] Depends: 

If during execution, a check is made to see if a pid exists, how can this be made repeatable ?

If it is remote but under the same host, we can do this instantly.  But perhaps it should always be an execution ?

Pull in the head as we saw it so that it is repeatable within some reasonable tolerances.

If consistency is bound up to the fs, then requests to check pid existence or remote fs objects would be replayable by way of this consistency boundary.

These items should become merged in to the commit that made them, as they are required for repeatability.