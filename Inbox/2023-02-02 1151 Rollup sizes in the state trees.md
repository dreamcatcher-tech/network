
>[!tip] Created: [2023-02-02 Thu 11:51]

>[!question] Targets: 

>[!danger] Depends: 

When building the state trees, we should also include the total size of the bytes in each tree.  Diffs between trees can be used to figure out the bytes changed between any two points.  Useful to see where the data cost is going.  

Can also include the total joule cost to generate the current tree from all its ancestors.  If this rolls up then we can get total joule cost between any two points.

So we would have a size total that would go up and down, and an entropy total that would always increase.

Possibly include number of pulses referenced too ?  This could be computed from the joules tally.

