Every Venture on the Dreamcatcher is something that can be invested into. Each venture may have a pool of liquidity where people deposit funds that can be used for approved batches of work to be completed. Liquidity Providers are contributing minimally just by parking their money in the pools, and maximally by that money being used to purchase software services for the betterment of the Venture.

We must run our own chain to manage these pools, or else we look foolish asking for money, and we must be able to demonstrate that we cannot rug pull any funds. This document describes a minimal system that can be used to build itself out more, depending on the preferences of the liquidity providers. Assets enter the system from either fiat or the DAI stablecoin, and leave the system only via DAI.

## Platform Asset Entry

Money is modelled as an NFT in our system, so we can always see where the funds came from to ensure KYC and AML compliance.

### Cryptocurrency Asset Entry

On the ETH chain, we will deploy a smart contract that converts DAI into NVN. Entering the Dreamcatcher Network is done by sending funds to this address, then proving you own it by your metamask signature on your Dreamcatcher account chainId. Our website generates your personal chain, and then creates an ETH transaction for you that bonds your chainId with your payment into the gateway smart contract. Your balance immediately shows up on the dreamcatcher once ETH finalizes it. Minimum entry is around $5, which is used to complete your KYC information. The NVN is innately an NFT, but the pools make the asset fungible again.

### Credit Card or Bank Transfer entry

We will set up a services company that exists only as a means of interacting with conventional institutions. Upon receipt of a credit card payment, we immediately transfer those funds to DAI, and transfer them to the Dreamcatcher. The sender is transferred NVN with a condition on them that awaits the clearing period for credit card or bank transactions. Once cleared, the funds are sent to the user to do with as they please.

To an outside observer, our customers are paying for some software services to be provided, or to have their funds refunded. NVN is an internal currency to the platform, and cannot be transferred between members, only in exchange for software labour, or refunded to the originator of the funds.

### Investment

For those who want legal protections of investment, we will set up a liquidity company, that accepts traditional funds into a bank account. It offers all the protections of securities law and the users must be accredited investors. The funds are used to enter the network liquidity pools, and is managed initially by a management team, but ultimately will be managed by each individual shareholder through an onchain portal. Each shareholder will be issued a separate share class, to distinguish their funds, and allow instant withdrawals from the company bank account upon request.

## Platform Asset Exits

Withdrawal from the Dreamcatcher requires you to use the same metamask signature as what you created your account with, to ensure that it matches the KYC information. Withdrawals can only come from KYC verified accounts.

### Safety against software failures

The chain is prototype level, so we need the ability to halt withdrawals due to exploits on the system. There is a circuit breaker switch which Site Admin can throw for refunds, KYC is the ultimate finality of who gets what money. We reserve a 7 week period for complaints to be filed, after which distributions are final.

The ETH contract should be audited, and a pool will be opened to pay for that. Newly staked money in the pool must sit for 32 days before it can join the pool, to allow people to change their minds.

### Anti money laundering measures

All members must have signed the DPL to interact using NVN. All depositors of NVN must pass KYC and AML checks. All Pool Admins must pass KYC and AML checks.

## Connection to the real world LLC

A service company is formed, which holds the trademarks and the legally binding contracts with individuals and companies. This will ideally be a notforprofit or some other structure, but we haven’t the time now. Its funding comes only through the Dreamcatcher Network. It is kept separate from the liquidity companies as there will be only one instance of this company.

This company will initially hold contracts with the node operators and core developers to ensure safe execution of software.

## Website with liquidity pools

Using the Dreamcatcher blockchain, a website will be set up that shows the different pools available. When a user has passed all requirements, they will have a balance of NVN. These funds are able to be placed into the available pools on the website. Each pool is backed by a github repo used to manage the production of the asset of the pool. New pools are created by pull requesting against the website pool project with suggestions. The pools represent on chain state. In each pool contains the latest git commit hash, the github url, the pool running total for funds.

When the NVN funds are deposited in the pool, a pool token is minted and sent back to the depositor. The pool token is itself an NFA, and has the pool's current logo as its logo. Each pool has an ordered stack of Forward NFAs that they want to spend money on. As soon as enough funds are present, the amount the Forward NFA asked for is locked, and work may begin with certainty of payout for completion. Pool holders cannot withdraw locked funds unless the Forward NFA is closed, which unlocks the funds.

The locked forward NFA has its ownership fractionalized amongst all the pool holders who had funds in the pool at that time, and will show up in the accounts of the applicable pool holders, with whatever logo was chosen for it by the pool admins, probably auto generated using an NFT image auto creator. It is greyed out as a pie chart overlay indicating estimated completion percentage. Once a Forward NFA is realized, it converts to a Completed NFA, which will show up in the accounts of the holders with the logo that was chosen for it initially. Code contributors see a similar logo based view for projects they committed to.

If you withdraw your NVN from a pool, you will be left with a residual NFA encapsulating the time you spent with how much money in the pool. These may be bracketed so encourage some kind of high water mark driver, eg: to earn the $500/32 day class of NFA, you need to hold over $500 of free floating NVN for 32 days before you earn it. In this way we can both recognize and gamify capital contributions.

### Workflow

Because each pool is in front of a github project, the software development takes place there primarily. The pools record when git commits are made, and by whom. To close an NFA, someone needs to initiate the payout process for the NFA, which causes QA to inspect whether it meets muster or not.

The only functions available at launch are listed below, along with the permission level required, and the delay in days before finalizing:

1. Account creation and deletion (User 0d)
1. NVN purchase using DAI (User 0d)
1. NVN withdraw using DAI (User 3d)
1. KYC (Site Admin 0d)
1. Pool creation (Site Admin 7d)
1. Pool entry (User 32d)
1. Pool exit (User 0d)
1. Forward NFA opening and updating (Pool Admin 0d)
1. QA for Forward NFA opening and updating (QA Admin 0d)
1. Forward NFA locking (Pool Admin 7d)
1. Forward NFA sorting (Pool Admin 0d)
1. QA for closing, automated full or partial payout to contributors (QA Admin 7d)
1. Github commit synchronization with the pool (Site Admin 0d)
1. Upgrading the Dreamcatcher (Site Admin 7d)

All other functions are deferred until they are constructed. This appears to be the minimum required to boot as it connects capital to builders, with QA ensuring both buyers and sellers maintain consistent standards, and Site Admin allowing a safe place for these 3 parties to interact.

### Contribution Farming

You own nothing but your record of on chain contribution, which is either payment for services, or supply of services. This ownership is encapsulated in an NFA, with the Forward NFAs you have asked to be made being shown in your account too. Attribution calculations are determined once the software is created to allow this. Note that simply buying and holding NVN is a contribution, pooling and holding is even more contribution, and having your NVN consumed by a service provider is the highest possible contribution possible using NVN only.

### Goals

1. Expanding the awareness, dimensions, fidelity, and liveliness of contributions.
1. Assigning attribution back to the contributions we are aware of.
1. Maximizing the privacy options for all members.
1. Maximizing choices, connectivity, and bandwidth between all members.

### Initial Pools

1. Web Liquidity Pooling
1. Interblock
1. Dreamcatcher
1. QA
1. AWS block producer
1. App Store
1. Legalities
