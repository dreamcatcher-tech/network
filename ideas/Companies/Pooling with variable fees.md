>[!tip] Created: [2022-09-26 Mon 16:11]

>[!question] Targets: [[Public Stock Pooling]]

>[!danger] Depends: 

One fixed parameter in defi pools is the fee or skim amount that the pool takes each trade.  Because this is fixed, the only market pressure on this amount is competing pools, which impedes open market discovery of a fair price, since switching the pools are not interchangeable easily.

A solution to this is to allow all stakers to set the lowest fees they will accept, allowing the market to increase the fee as demand to use the liquidity increases, and to lower the fees down as demand drops off.

This added dimension of trade cost incentivizes providers to get to the lowest price, and encourages takers to use this pool as they know the fees are lowest possible availble.

## Extras
### Global pool that connects all known pools
If the global pool concept is the optimum, then connectors to all known pools can be made.  Some of these connections can be at the protocol level, like between an ethereum pool and some of our pools, and others can use brokers.

Some can use the data sources of the other pools and rely on brokers to fulfill the swap, for a fee.  We can apply escrow internally to ensure the brokers fulfill their promises offchain.