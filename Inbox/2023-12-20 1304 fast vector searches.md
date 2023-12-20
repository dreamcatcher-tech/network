
>[!tip] Created: [2023-12-20 Wed 13:04]

>[!question] Targets: 

>[!danger] Depends: 

If centroids were computed for clusters, then we can use them to quickly orient ourselves in vector space and get quick results.

Make something like a b-tree.

Ideally would function in a distributed way with pieces missing, where the search for centroids includes clusters of nodes too.  The nodes favour clusters.

So a query comes in and a cosine distance is computed.  Then since we have already stored the vectors to all the other centroids we have indexed, we can go towards the one that is most likely.

The envelope of the centroid can tell us if we need to do piece by peice search or not.