
>[!tip] Created: [2023-01-02 Mon 14:51]

>[!question] Targets: 

>[!danger] Depends: 


IPORM could be made to create the root prop automatically
Benefit would be that much of the class logic can be reused in the prop, since its the same thing, just with the asynchrony of IPFS replaced with a synchrnous representation.  A flag would be inserted indicating that what was shown was not fully loaded yet, which gets removed when loading completes.

Have built in functions for retriving past history of a specific chain.

> iporm basically is a reconciler already
> Basically decorate the object correctly depending on where it’s meant to land in order to eliminate impedance mismatch and still give good dx in each domain
>  - *@rexmondo*

if the IPORM interface was chosen wisely, then classes that inherit from IPORM could be instantiated as async chainland objects, or sync reactland objects
and the developer supplied class logic would be the same, regardless of the instantiation type

Reuse the same immutable maps used for the HAMT in both the sync and async representations of the models.  why have two different objects in ram representing the same data ?

I should be able to get structural sharing between the immutable map used in the HAMT as a cache, and the synchronous representation of that same HAMT used in React
Ie: if I have an async IPORM instantiation of a class, and I call `.snapshot()` I should get back a large js object suitable to be passed as a React prop that increases the heap by near zero.

it would extend IPORM with more fine grained reconciliation control, and by constricting the interface between dev objects and IPORM base classes, so that they can work nicely with both sync and async modes

### Separating IPORM functions from domain logic
Some options in the HAMT are there purely because of the async nature of the HAMT, such as has() and get().  These options should be provided as clearly defined to be part of the IPORM functions, and not actually part of the domain logic.