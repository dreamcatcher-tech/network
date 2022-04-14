![Anime-Beautiful](/nfts/DreamcatcherWebLiquidityPooling.png)

## Introduction

The Dreamcatcher transforms contribution events into contribution things, and then allows interaction with these things, including trading ownership of said things. We name these things Non Fungible Assets, or NFAs. The provenance and trade history of these NFAs is used to redisperse attribution.

Software development consists of imprecise and unrelatable milestones, so we propose transforming these loose and often unremarkable events into well defined things and attaching AI generated artwork to them, making them collectible and displayable, like trading cards, as a form of NFT.

The information in Dreamcatcher NFAs are a cumulative snapshot of the coordination of the resources that made up the contributions. They allow the recording of many dimensions of contribution beyond just software code, but we use them in this proposal by only recording money and QA contributions relative to code contributions.

Ambient Attribution is a method of micro attribution at the instant of revenue collection to all the NFAs that contributed, including virtual NFAs that are constructed to attribute to those contributions that are currently over the Dreamcatcher horizon, for example attribution back to Linus for the kernel that we’ve all used quite a few times by now.

We want to NFT all works of knowledge either intrinsically or extrinsically, and we want to provide the means to attribute back to those NFTs whenever profit is derived from use of those works.

## Concept

Every Venture on the Dreamcatcher is something that can be invested into. Each venture may have a pool of liquidity where people deposit funds that can be used for approved batches of work to be completed. Liquidity Providers are contributing minimally just by committing their money in the pools, and maximally by that money being used to purchase software services for the betterment of the Venture.

Work is only paid for upon completion, and investors cannot rely solely on the efforts of others, as they are required to select the work they want, how much they would pay for it, and how long they will wait for the work to complete, performing essential managerial functions in relation to their funds.

We have enough blockchain functionality to run this service on our own systems now. What we seek is an arrangement of incentives that results in self improvement feedback loops - a minimal system that can be used to build itself out indefinitely, depending on the preferences of its members.

## Securities Law

The essence of securities law in most developed nations is that investment promises are regulated for the protection of investors. We designed this system specifically to prohibit the making of investment promises by anyone, permitting exemption from regulation which would greatly hamper the speed and automation we want to introduce to the venture process. The price of this exemption is participation.

The NFAs go through three phases in their lifecycle, each one being treated differently by securities regulators. Those phases are:

1. Speculative phase, where their construction is undertaken, and may fail
1. Usable phase, where they may earn royalties due to consumers paying
1. Tradeable phase, where ownership can be sold to anybody

NFAs can transition from any phase to any other, with no limit on transition counts, but most likely we expect a linear and final sequence, ie: 1, 2, and finally, 3. Because we have KYC information on all members, anyone making investment promises at any point will be reported to the regulatory authorities, as we cannot have anyone eroding the nimbility and trust of the system.

### Speculative Phase

Here we want a thing to be made, and need some money to do it, the only people permitted to contribute that money are people who are actively participating in the project. The minimum participation level permitted is to select a proposed task and lock a selected amount of pooled assets to be released only upon its completion, with dispute ability if the work is not to satisfaction. We believe this level of participation, coupled with strictly no advance payments exceeds the protection levels of investors in conventional companies. No trading between any individuals is permitted.

### Usable Phase

Here the NFA represents something definite - the thing that was desired as a Forward NFA is now a proper NFA. It is usable by other projects, and hopefully those other uses are generating royalties back to the participants in the NFA’s construction. Those royalties (or the prospect of royalties) still depends on the activities of a clearly identifiable party. This is vulnerable to collusion between NFA owners and that 3rd party to pump the prospects, sell the NFA fractions, then abscond. No trading between any individuals is permitted.

### Tradeable Phase

Once the NFAs have reached Ambient Attribution status, where royalties are coming in due to the efforts of many unrelated parties, trading may begin, and it may begin to any other member of the Dreamcatcher who has passed KYC. The royalties and prospects of royalties are no longer dependent on any internal members of the common enterprise. This is a very strict bar to meet, as granting this status too early exposes our members to risks.

## Platform Asset Entry

Money is modelled as an NFT in our system, so we can always see where the funds came from to ensure KYC and AML compliance.

### Cryptocurrency Asset Entry

On the ETH chain, we will deploy a smart contract that converts DAI into NVN. Entering the Dreamcatcher Network is done by sending funds to this address, then proving you own it by your metamask signature on your Dreamcatcher account chainId. Our website generates your personal chain, and then creates an ETH transaction for you that bonds your chainId with your payment into the gateway smart contract. Your balance immediately shows up on the dreamcatcher once ETH finalises it. Minimum entry is around $5, which is used to complete your KYC information. The NVN is innately an NFT.

### Credit Card or Bank Transfer Entry

We will set up a services company that exists only as a means of interacting with conventional institutions. Upon receipt of a credit card payment, we immediately transfer those funds to DAI, and transfer them to the Dreamcatcher. The sender is transferred NVN with a condition on them that awaits the clearing period for credit card or bank transactions. Once cleared, the funds are sent to the user to do with as they please.

To an outside observer, our customers are paying for some software services to be provided, or to have their funds refunded. NVN is internal to the platform, and cannot be transferred between members, but can only be exchanged for software labour, or refunded to the originator of the funds.

### Registered Securities Entry

For those who want legal protections of investment, we will set up a liquidity company that accepts traditional funds into a bank account. It offers all the protections of securities law and the users must be accredited investors. The funds are used to enter the network liquidity pools, and is managed initially by a management team, but ultimately we hope will be managed by each individual shareholder. Each shareholder will be issued a separate share class, to distinguish their funds, and allow instant withdrawals from the company bank account upon request.

## Platform Asset Exits

Withdrawal from the Dreamcatcher requires you to use the same metamask signature as what you created your account with, to ensure that it matches the KYC information. Withdrawals can only come from KYC verified accounts, and you can only withdraw whole NVN units as they are NFTs. All members of the platform must have signed the DPL to interact using NVN. All depositors of NVN must have passed KYC and AML checks, and the same goes for all Pool Admins.

## Platform Asset Safety

We need the ability to halt withdrawals due to exploits on the system. There is a circuit breaker switch which Site Admin can throw for withdrawals on the Dreamcatcher side, and there is a Pausable switch on the ETH side. KYC is the ultimate finality of who gets what money in the event of total catastrophe.

A balance check function will be provided that can compare the balances of NVN on the Dreamcatcher side to that represented on the ETH side. The ETH contract should be security audited, and a pool will be opened to pay for that.

## Service Company

Clear connection to the real world is required, and to that end an independent service company is formed, which holds the trademarks and the legally binding contracts with individuals and companies. This will ideally be a not-for-profit or some other structure, but we haven’t the time now. Its funding comes only through the Dreamcatcher Network. It is kept separate from the liquidity companies as there will be only one instance of this company.

This company will initially hold contracts with the node operators and core developers to ensure safe execution of software before we achieve decentralization.

## Liquidity pooling

Using the Dreamcatcher blockchain, a website will be set up that shows the different pools available. When a user has passed all requirements, they will have a balance of NVN that are able to be placed into the available pools on the website. Each pool is backed by a github repo used to manage the production of the assets of the pool. New pools are created by pull requesting against the website pool project with suggestions. The pools represent on chain state. In each pool contains the latest git commit hash, the github url, the pool running total for funds.

You own nothing but your record of on chain contribution, which is either payment for services, or supply of services. This ownership is encapsulated in an NFA, with the Forward NFAs you have asked to be made being shown in your account too. Attribution calculations are determined once the software is created to allow this. Note that simply buying and holding NVN is a contribution, pooling and holding is even more contribution, and having your NVN consumed by a service provider is the highest possible contribution possible using NVN only. The types of NFT you can earn are:

1. DPL, KYC, AML tokens, when you pass those checks
1. Participation tokens, for putting your NVN into a pool
1. Commitment tokens, for locking your NVN into a Forward NFA
1. Forward NFA NFTs, which have a percentage complete, and a percentage of ownership
1. NFA NFTs (sorry….) which have a percentage of ownership that you share
1. NVN received as payout for services rendered towards the completion of an NFA

## Workflows

Because each pool is in front of a github project, the software development takes place there primarily. The pools record when git commits are made, and by whom. To close an NFA, someone needs to initiate the payout process for the NFA, which causes QA to inspect whether it meets muster or not.

The phases you can be in within a pool are as follows:

### Participation

When the NVN funds are deposited in the pool, a Forward NFA pool token of a bracketed amount (50,500,2000) per 32 days is minted and sent back to the depositor. Over time the Forward NFA matures, and ultimately becomes an NFA, marking that this person has held funds in this pool for 32 days. Once their funds have passed this cooldown period, they may begin to select what to spend the money on, if anything at all, as their balance is always withdrawable at any time. Bracketing and logos are done so we can both recognize and gamify capital and labor contributions.

### Negotiation

Each pool has an ordered stack of Problem Forward NFAs that they want to spend money on, and each Problem Forward NFA has some Solution Forward NFAs targeted at them. A liquidity provider with cleared funds can select which Problem Solution pairs they want to spend up to 10% of their funds on, how much they want to spend, and how long they are prepared to wait for those things to become reality.

### Commitment

As soon as enough funds are present, the amount the Forward NFA asked for is locked, and work may begin with certainty of payout for completion. Pool holders cannot withdraw locked funds unless the Forward NFA is closed, which unlocks the funds.

The locked forward NFA has its ownership fractionalized amongst all the pool holders who had funds in the pool at that time, and will show up in the accounts of the applicable pool holders, with whatever logo was chosen for it by the pool admins, probably auto generated using an NFT image auto creator. It is grayed out as a pie chart overlay indicating estimated completion percentage.

### Delivery

Once a Forward NFA is realized, it converts to a Completed NFA, which will show up in the accounts of the holders with the logo that was chosen for it initially. Code contributors see a similar logo based view for projects they committed to. We should end up with a list of outputs that looks similar to the history of the [RFCs that made the internet](https://en.wikipedia.org/wiki/List_of_RFCs)

## Functionality

The only functions available are listed below, along with the permission level required, and the delay in days before finalizing:

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
1. Forward NFA prioritizing (Pool Admin 0d)
1. QA for closing, automated full or partial payout to contributors (QA Admin 7d)
1. Github commit synchronization with the pool (Site Admin 0d)
1. Upgrading the Dreamcatcher (Site Admin 7d)

Being a self improving system, this list will likely change in response to member actions. This appears to be the minimum required to boot as it connects capital to builders, with QA ensuring both buyers and sellers maintain consistent standards, and Site Admin allowing a safe place for these 3 parties to interact via KYC and AML.

## Initial Pools

1. Web Liquidity Pooling
1. Interblock
1. Dreamcatcher
1. QA
1. AWS block producer
1. App Store
1. Legalities

## Implementation

### Dreamcatcher to Ethereum Bridge

The signatures of a gateway chain can be used to trigger a smart contract payout. The gateway chain is operated by distinct individuals, who have signed legal agreements, but the vulnerability still exists that they might collude and pay out all the funds to themselves. The smart contract will be configured so that funds can only go to existing NVN holders that have passed KYC and AML information.

Until this KYC and AML flag is passed, whomever owns NVN can burn it and recover the DAI. Once this flag is set, only the Dreamcatcher chain can burn the NVN and send the DAI, but only to a previously KYC’d address. This is done by making the Dreamcatcher chain sign using ECDSA signatures and a data structure understood by the Eth contract. So it can instruct the contract to send funds to a KYC’d address by minting a block with such a request in it.

### Implementation Steps

1. Deploy the Dreamcatcher-to-Eth bridge on the polygon chain, which is an ERC1155 smart contract that mints NVN in NFT notes denominations (10,50,200,500, etc) in exchange for the denominated amount of DAI. This contract is listed on opensea for discoverability, but can also be called directly. These NFTs cannot be transferred to anyone else, and their uniqueness is because their kyc and aml information is retained. The only action free from kyc and aml verification is to withdraw your own funds.
1. Buy these tokens with DAI to gain access to that Dreamcatcher Pooling. Anyone can access the dreamcatcher but you cannot provide liquidity without owning one of these tokens and passing KYC. The DAI can only be released by the dreamcatcher gateway chain releasing it.
1. Participate in the dreamcatcher, where you can earn and spend your NVN by pooling, and bonding to NFAs
1. Withdraw your NVN based on the ownership record of the Dreamcatcher. You sign a transaction in Dreamcatcher, and you reconfirm your eth address, which triggers the gateway to burn the NVN that you control in the Dreamcatcher, and send the released DAI to your confirmed ETH address

### Implementation Time

The Dreamcatcher needs an IPFS like decentralized mode of storage, then it is ready to be used for this liquidity providing function. The ETH contract is about 1 week. IPFS plus the application is about 2 months.
