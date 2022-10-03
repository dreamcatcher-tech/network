>[!tip] Created: [2022-09-14 Wed 20:05]

>[!question] Targets: [[Crash Recovery at any state]]

>[!danger] Depends: 

This could be stored in the approot chain, where a hamt of every address and the latest chain for it is stored.
Provides a large LUT for blockmaking.

## Positives
1. Engine can know instantly if an address is local or remote.
2. Engine can find latest instantly, without using pathing


## Negatives
1. Huge bottleneck for processing
2. Does not leverage the rollup nature of the [[Supervisor Tree]]
