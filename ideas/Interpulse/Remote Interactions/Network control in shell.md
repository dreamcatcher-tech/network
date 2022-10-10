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
Due to difficulty with changing the listen addresses in libp2p, we could require the listen addresses to be specified at startup ?  Or, we would have to restart the networking if the listen addresses change in any way.
Wait till we have the latest pulse, and the network configuration, then apply the changes to bring the running system in line with requested.

What if an error occurs, or the listen address is infeasible ?  Should we send a failure back into the chain to change the listen address ?

For this reason, we may require listen addresses to be specified at boot for now.

## Proposals
### Boot raw shell with late net
Engine starts up with no networking, then when it wishes to communicate it creates a child chain called `net`. This chain has a side effect assosciated with it, which is the libp2p library.  This contains all the config we wish to enact.  Shell needs to tell net to actively start before it does anything.  Here if the listen addresses are problematic, we would reject the outbound io request.

If during running an error occurs, we would send this error back into the net object, and await further instructions.

## Extras
Share access to each root chains net chain, so peers can read and gossip their information as chains.  Implements our own gossip.  Should not make an action to do a read, so being able to read a chain is preferred, rather than a request.

## Hard coding server info
We can get vite to build with some ENV vars that get baked into the page, that the loaded blockchain can then inject into itself, to start running with zero config.  Ie: First time the webpage loads, the user should not have to do anything at all, but should be automatically connected up.

## DNS
The mtab mapping of names to addresses is a form of DNS.  A compound lookup may be employed if we want to make dns work for remote advisory chains.  We would still need a basic mapping to each DNS chain in mtab, but once we were connected we could do lookups to paths we didn't have hard coded.  In this sense, `mtab` is like a `/etc/hosts` file.

This would require the `mount` command to take `string: string`  form as well as `string: chainId` and a lookup strategy would need to be employed to ultimately resolve to a chainId. 

Charging for DNS lookups is done by charging for a request, or charging for access to the DNS table.

## Implementation
Based on the assumption that network topology changes far slower than chain topology, and that the number of chains to be subscribed to as subscription roots is small, we make the following implementation shortcuts:
1. Listen ports are required to be specified at boot time.
2. Libp2p config is stored in code alone, as it does not need to change yet.  When it does change, we would need to restrt the whole libp2p library as the simplest option. 
3. peerId to addresses and multiaddr mappings are stored in [[mtab]] as: `peerId: { multiaddrs: [], hardlinks: []}` where hardlinks are stored by name, so getting the address requires a network hamt lookup
4. Web client will automatically add the server it was loaded from as a default peerId, so that as soon as a mapping of peerId to address is made, it may have no use for a multiaddr addition.


## Problems
1. How to query the server for:
	1. what chains it has available ?
	2. what its public key is ?