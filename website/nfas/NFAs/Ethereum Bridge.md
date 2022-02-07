![Anime-Beautiful](/nfts/EthereumBridge.png)

A bridge between Ethereum compatible chains and the Dreamcatcher Network

Made up of a deployable smart contract and a deployable Dreamcatcher app. The two are bonded together and permit two way asset transfers.

## Requirements

### Must

1. Allow rejection of malformed bridging payments
1. Allow transfers to be paused in an emergency
1. Securely connect the depositing ETH account with a corresponding Dreamcatcher account
1. Be terminateable with reasonable termination conditions
1. Support DAI
1. Behave well during Ethereum forks
1. Pass all costs on to the users
1. Allow withdraws without the user owning any ETH
1. At most permit developers to pause withdrawals for a fixed period of time until bugs can be addressed

### Should

1. Allow depositors to pull back an unclaimed deposit they made

### Could

1. Contain within each Ethereum transaction the root hash of the Dreamcatcher
1. Allow any ERC20 token to be transferred
1. Allow any Ethereum NFT to be transferred
1. Allow any kind of ETH function call to be made, and any kind of Dreamcatcher Action to be invoked

### Must Not

1. Be controllable by the developers to steal funds
1. Allow Dreamcatcher bugs to result in loss of funds
1. Allow withdraws by users that have not passed KYC
