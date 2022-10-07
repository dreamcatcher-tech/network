The shell should be able to control aspect of the networking behaviour of the system.

## Storing network data on chain
The shell should store config info, and dynamic discovered data on a slice in its chain.
This work may be offloaded to a child chain.

## How to fit the side effect model ?
Problem is that the networking side effect needs to be loaded before the chain starts to operate.  Primarily the repo needs to be available to store Pulses in before any actions take place.  Also the traffic is heavy with these particular side effects, as the are the sum + overhead of all actions on the system.

Could make all engine services be action controlled, and sent down the `@@io` channel ?

Repo could be started and then connected to the `@@io` channel like a dependency injection.

Ideally only control instructions should go to the side effects.

## Issues
### Specifying listen addresses
Due to difficulty with 
Restart the networking if the listen stats change in any way.
Wait till we have the latest pulse, and the network configuration.

## Proposals
### Boot raw shell with late net
Engine starts up with no networking, then when it wishes to communicate it creates a child chain called `net`. This chain has a side effect assosciated with it, which is the libp2p library.