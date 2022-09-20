
# Order of Updates

> [2022-09-15 Thu 15:53] 
> Targets: [[approot]] 
> Depends: [[]]

In order to be deterministic, the order that updates occur must be predictable and guaranteed to be stable.

To guarantee maximum recoverability, updates should be applied as soon as possible.

Currently we have no way of guaranteeing the order of these operations being repeatable.  If a solution cannot be found, we can at least verify that the order of operations is acceptable.  This is unideal as malleability should never be given to validators as it is an opportunity for abuse.
