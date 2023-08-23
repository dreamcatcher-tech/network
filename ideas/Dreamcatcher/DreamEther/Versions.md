
updated packets preserve the shares portions
superseding an accepted solution to a packet
use any currency as payment
use any NFT as payment
moving payments inside the system should show up early
shares between solvers and packet authors
merging packets

data hashes are really the thing we're tying to get merged in.


## Oddities
Packets can never be rejected as they only get created when the packet header passes QA, and the contract is made so that once QA'd it can never be un QA'd.  That which is done stays done.

All traded NFT shares need to be fully withdrawn from, else they are something different and enable rug pulls, plus may have some weird securities implications, or other oddities since you would be trading the assets as well as the NFTs.

## TODO
disputes
merge and edit
defund during dispute windows
withdrawls of all token types
funds using exit balance first
revoke approval for preapproved contracts
transferring erc1155 to and from this contract
listing on opensea
## Viewer:
Diff view between versions, and even between packets.

## State testing
testing each state in detail, and then using state suppression functions to filter out all the paths intrastate.  This reduces the vast explosion of paths down.  Inner state testing becomes akin to unit tests.  The full model might be years to compute, but innerstate and then a few simple paths thru it for the sake of everything else might be sufficient.
Therefore in running all the innerstate tests, the majority of interactions with outside states should be covered.  Minute fluctuations about how each external state arrived as its final condition will have diminishing returns, and will drown the model.  Also many of the combinations are designed to occur or not occur and have no affect.

If break down actions that test the same function or have some invariants to test, then should use the `state` functions of the model.  This means that if we enter the `trade` state, then we want to do some checks about not trading with zero balance.  If we enter the `qaClaim` state, then we can check the claim empty test, which really doesn't change much of interest such as multiple actors balances, and we can also check the qa claiming from a packet when we are in the solved state

So the actions are reserved for things that keep the system moving forwards, and states can be used to make assertions about the states of things in the system.  If we don' t do this, then the number of possible paths in the system explodes.

Be ok letting a path die in a state - if it was to trade, and then conditions were not met, stalling in the state is the same as putting a conditional on the transition - it doesn't have to leave the state.

If there are some invariants to test, then use a state.  If there isn't and theres only one action to take, use an aciton.  `trade` state can be used to check everyones balances hold true as the model predicts.

We can also dispatch actions directly into the SUT which may have payloads that we can react to if we want to test different things.
## Notes

Make a flag that is set in the header

Make PC be a QA so he can pass or fail work ?
Or make him be an assembler, that is higher up the stack, so he doesn't get bogged down ?
Or have tech QA and artistic QA, and he can dispute anyone, but has some QAs that work for him ?

Allow devs to give progress update which will cause defund periods to increase ?  Must pass QA to show they are serious about it, so this would be change of type `progress`.  These progressions can stop the defund, or delay the defund, or their absence can allow instant defund.  Have an emergency switch that signals death of contract, where everyone can withdraw instantly ?

? could we split the distinction between packet writers and solution writers ?  Why not bundle them as the same ?
fees for QA should also count as funding types ?  If the qa fees were treated the exact same as funding, then there are less NFT types to consider.  NFTs commemorate being either part of the solution, or incentivizing the solution.

Treat users as a separate part of context, and track their balances and other things, then check this is matched in contract ?

Types:
1. Funding - provided capital into the project in any form
2. Solution - any type of solution contribution, including QA, packet writing, solution, and update.

We can still extract out what the exact contribution of each person was, but it will not show in the NFT types they have.  We should use different types of NFT to express those things we cannot compare ourselves, like the value of QA vs the Solution provider, vs the packet author.

QA is like meta - meta NFTs represent the governance of the packet itself.

Unify solutions and packet contents and modifications as 'state changes' and track them under a single mapping.  Then fee payment and refunds are all the same too.

Basically, any state changes require QA to weigh in, and QA always needs to get paid.

Can funding be bundled up in this same method too ?

Why not purchase QA funding units on opensea too ?
Anything requiring QA goes onto opensea for purchase.  Start with just DAI, move to multi currency with the currency badged into the NFT.  If it doesn't work with DAI then it won't work with multiple currencies any better.

We could make a rule that a solutionHash cannot be used anywhere else ?  Cannot have two parts of the system using the same state, so can nonce the state to get a new one, such as a timestamp change.
Map everything by the statechange hash, then can use the same mechanics for everything.

Solvers do state transitions, but funders only incentivize the state transtions.  QAs gatekeep the quality of the state transitions.

Transitions get numbered from 1, and then hashed to appear random so theres no value attached to special numbers.  This number is then used to generate NFT ids so each transition can have multiple ids ?  or, use ripemd and then suffix it with ints ?  So an incrementing number, then '-funding' and then ripemd or sha256 to get the nft id.  or bitshifting to get the id in there at the start.

? someone trying to replace the QA of a packet with another one ?  If there was only one QA pool then this wouldn't matter.  But they might be tryign to change the config the QA uses.

Trying to make transitions and packets be the same, so that the funding coding and veto process is all the same.
Funding a packet is no different to funding a transition.

QA might run a tool that auto finalizes packets, so they get published without any further action from any user.

Why is a solution not trying to merge / overwrite a packet transition directly ?
The first transition has no solution, then many solutions pop up, all trying to replace the placeholder solution.  When they replace it, the funds get held in veto, then dispersed ?
Seems better to leave the packet as an immutable wrapper, that never alters.

Rename a Transition to be:
1. Sublimation - funny bx turns gas to solid
2. deposition - the actual name for gas to solid transition
3. innovator - someone who effects change
4. catalyst
5. progressor

Defund timing should be the same as veto timing, where all the funds go into locked state ?

? How can we assign solution shares to a packet ?  Eg: if the packet descriptor should be due some funds ?  Seems the only one who cannot have any funds is the QA.

A cut of the shares should go to the platform packets itself.  This is done on packet close and accumulates.  Withdraw should blank the wallet in the packet, so give a gas refund, to make withdraw large amounts cheaper.

Broker contract has a special balanceOf relationship, as it can transact with opensea to sell tokens for funding.

Cleanup in Seaport - orders automatically timeout after 3 months unless someone puts in some funding, then it will remain present for another 3 months.  Historical items can be relisted by funding them directly in the contract, which will re-up the seaport offering.  Inactivity withdraws from seaport.

Must block anyone submitting a hash that collides with a packetId. Or store packetIds somewhere different.  Else could block contracts from passing by colliding with packets.

Each time a packet is resolved, then funds are imediately transferred to the solutionShare holder accounts.  Avoids confusion over an undrained and a drained packet.  Packets are instantly drained.  BUT this causes a variable gas fee to the QA, incentivizing less accurate share splits.  Also we cannot transfer out NFTs.  So, we might merely update a list of the packets that someone holds funds in, then require them to come drain it.  Store the original holders so their withdrawl ability is independent of share transfers that occured after resolution.

Cannot change QA for a packet, since this is tied to funding - people bought in to the packet based on their trust of the QA.

Make a contract to list packets that have not received QA appraisal.

If you did not withdraw defunded value before appealWindow opens, then your funds are trapped and may be consumed.  So you need to pull them out quickly.

Might make a separate mapping to hold each type of transition and then store them in a transition mapping using the type of transition to ensure no collisions, or avoid a central transition map altogether

QA contract must supply its own appeal process, since it is the expert in the field it offers.
The DreamEther contract can be walked to determine an appeal rating and quality, and people should switch QAs if they don't like a particular one.

Multiple concurrent solutions have equal weighting in the packet solutionShares.

solutions wrap packets.
product funds go to component funders and labourers.
labour and fund distribution based on a balance target.
attribution actor.
buyers.
Funds of product packets go to all component funds, + target margin, then residue goes to the builders.
Preset the dispersal from the funder.  Set an attributor by formula.
3 phase: 1) precontractor 2) formula + buyer 3) full AI
types of labour compared is the same as capital compared to labour, therefore should have an attributor.
appeal on the attributor ?
attributor doesn't attribute history.
premoney attributor history = 0.

should labour only get royalty after funders have their money back ?
per packet defund delays.
fund that starts at some condition or time.

How much should be due the smart contract author of the Dreamcatcher ?

Where should a project managers fee be inserted ?  Top level packet, component packets, independent ?

Have a top level statechart action that toggles the cursorid at any point, and drops into the last state that cursor was up to.  Cursors when being switched have their position stored.  Then we go thru switching the cursor at all possible positions.  Actually seems excessive.  

Concerns from Ben:
Hanging of funds - getting stuck in the contract with no way out.
Appeal window from a solution coming in during appeal window - gaming of the solutions if an investor wanted to take funds out.

Run multiple instances of the test machine on the same chain concurrently by mapping the ids between them.  Ensure that each one only ticks forwards one iteration each per block, so we have predictable outcomes.  

Packet solving another packet must be in the solved state.  We need to ensure that no loops can occur - that problem solution tree is DAG

Share splits as a datum so display and edit are the same.

ticking clock for dispute and defund

URL sharing so people can share links to things on our site.

Include trading activity in the events feed

Submit results to google for indexing.

The GUI must check if a particular token has approved the contract for transfers.

Present a view of the funding summarized in USD or whatever other currency you wish, which also appraises the value of 
Then show what future values of the token could be, based on projected decentralized revenues.

withdraw of only some funding assets then a transfer of only some contentShares is a problem ?
If can only transfer after max claim, then seems safer ?  No confusion or rug pulls, no delay mechanism required.  isTradeable() function can determine if any claim is possible.
So withdrawls would be a bool, whether or not they had withdrawn their share ?
But needs to be an amount, as can combine wallets in different states.
If the wallet was just the mirror of withdrawls, then can move both the wallet and the withdrawls around freely.
Does some transfer amounts of contentShares become blocked since cannot move the corresponding portion of withdrawls along with it ?
Could always transfer the withdrawn contentShares first, so only if you transfer more than you have withdrawn does the  withdrawl not get altered.
_Simpler to block trades if your contentShares can claim some funds_

BUT the fungibility is always guaranteed as withdrawls matches 1:1.  So we could allow partial claims, but really just a complication rather than a feature.
Trouble is the value is different depending on whether the contentShare is loaded or not.
Blocking trades until fully claimed is easiest.

Claim amount will be the biggest whole amount that can be withdrawn.  So basically signed integer math which truncates down. So you can only claim solution shares that have not been maximally claimed.

Making a single state struct and passing that around seems to add only another 4k gas to transactions that use this method.

? Can we break down the contract into different levels of functionality, so things can be tested in isolation, like the trading and defunding functions ?

What if we could configure the end state we want in context, and the machine runs every way it can possible get to finished and have the desired end state ?
Then the tests are just defining some end conditions ?

onERC1155Received should be called when QA submits.  Then the tokens should be minted, but their transfer is restricted until enactment.  Disputes burn those tokens.  Means that receivers can do something about their recievings, and stops human errors from QA.
## Misbehaving contracts
defund and claim are susceptible to a misbehaving token contract taking all the gas, or reverting the transaction and blocking all the other assets from being withdrawn.
They are also susceptible to high withdrawal costs.
Lastly, a transfer of many small amounts can expend excess gas if each move inside our contract also updates the external contract too.

One solution is to make claim and defund simply move funds to a top level wallet where all the assets accumulate based on a single address.  Then withdrawal can be done by a specific ID, rather than complicating the packet interaction logic.

Making these functions difficult to use is less of a concern than getting funds in. 

These assets could be treated like any other NFT in the contract ?

But how can we fund things from this withdrawal staging area ?

What about funding one packet with shares in another packet ?

### Tracking funding tokens
For every funding asset, we have to generate a unique token id that represents:
1. the changeId that is being funded, ultimately linked to the packet
2. the contract address of the asset
3. the tokenId of the asset
Further, within the change, we need to track the amount of this token that each address holds during the funding period, and how much has been withdrawn after the solution is found.

We could avoid storing the funding shares inside the packet, and rather just track all the assetIds that it contains, with the balances being held in a global map.

Could make the tokenId be the packetId, but the traits are different in the metadata.

Solution share trading can be done before or during or after the funds are withdrawn, so how to track what each share took out ?
Move the funding share and the withdrawn balance as a stapled token, where they move together.

What if claims were measured in contentShare units ?
Could then, transfers of unclaimed funds be permitted easily ?
Claims would be a struct
Using the exits pool there is no need to worry about misbehaving contracts - any claims are fully done.  Claims are always maximum possible, and always the full amount.
If you did not have enough shares to get any piece of the funding, then those who remain get your share.
Claims then, is a count of how many shares you hold have been moved to the exit pool.

### Managing funding shares and content shares as one
If upon change creation, there was an NFT created representing the content shares, then this is managed in the same structure as the funding shares, as it simply represents an nftId.

### Avoid normalizing shares by waiting till all are settled
As long as isPossible() returns true, avoid allocating any contentShares for the packet.  Once the final solution is settled, only then does the summation of all get done.
Until that point, we can know that the contentShares are not assigned as there will be no holders.

### Nesting of ipfs data for different token types
If by default the app generates a small filesystem, which composits the base NFT image with some decorative data like header, dispute, qa, solution.  Then it also contains different metadata for each type, which includes some traits that get displayed with the token.  Makes the token flavourings a bit better.  May include some basic token types, like DAI and ETH and USDT, NFT, ERC1155.

### Separating the erc1155 contract
Contract size limits being able to have these functions together.  If the balances of everyone was kept separate, then the bank contract could be kept separate from the packet logic, reducing size and allowing a hardier implementation as we would be standards compliant by using openzepplin contracts.  So the front logic just manipulates the erc1155 logic in place.

Could split out the storage logic from the manipulation.  So the types and the storages all goes in one contract, then the front end interfaces to that.

Or just try do without using the erc1155 contract then work out how to include things at the end.

### Solution to a solved Packet:
Should be allowed, otherwise packets never improve.  But if they want funding for it, they will need to make a new packet.  An improvement on a solved packet should divert solution shares.

Simpler to just say that later solutions have no solution shares change, since that is only used for funding allocations.  Avoid QA choosing best between all solutions, and let the consumer make that choice, as it could be subjective.  So late solutions, once past QA, are just as important

Finalizing the packet with the final solution makes a summary of the solution shares of everything, and treats them all as equal.  This sets the solutionShares of the packet itself, and this is used for claiming funds.  Withdrawls then look at what you have withdrawn, and then what you are entitled to, and let you pull that out.  There is no central wallet, it just comes back to the callers address.

On your final withdrawl, you get a gas refund as we mark you as fully withdrawn.

But how to point the packet at the chosen solution, particularly if multiple solutions ?  Is it with the downlinks order, as accepted solutions that are higher are considered better, after starting as better ?

### Bidding on opensea
If we abandon the notion of lazy listing on opensea, then we keep the token supply sane and genuine, and people can still buy on opensea by offering for funding shares.  If the offer covers the costs of funding outside of opensea, then a bot should be able to take profit by fulfilling the order.  We could allow instant defund within an hour, so that nobody gets sniped.  Basically, don't waste money, use our contract directly for funding.

DAI nfts should be minted with every change, so they show on opensea without any funding required to be put in, and a supply of zero.

### trade fees should go to the shareholders
Any trades would send some fees to the content shareholders.  We don't know how to split this between funding, but we should definitely split between content holders, as a further incentive to own these shares ?
NO there should be no rake on the contract - focus on the AI to attribute to everyone.
### Making an internal wallet mechanism
We could make the withdrawl mechanism also take deposits.  Then these can be used to fund different packets, particularly as doing a fundBatch type of operation.
Be able to fund packets where it is known that the funds are split between multiple packets, going to the first to complete, instantly defunding the others. Could be done as a form of erc20 token

? Should fund() deposit into exits first, then disperse to the packet ?

If gas pricing was insignificant, then having a funding balance at all makes no sense.
If a burn function was provided for assets inside a change, and if single withdrawals were enabled for each packet, then there need not be a top level balance.
Withdrawal of everything is still possible.
Defund becomes the same as claim.
? multi packet withdrawl mechnism to reduce gas ?

Or if we abandon using exits as a funding mechanism, we still have grief protection, an lose no features.
### Shadowing the main contract using QA, so that opensea listings use the QA address
The QA should be used as the listing agency, otherwise the main contract can be spammed.
So the QA should be the one that emits the events.

### Using polygon
tx is so cheap that we can fund the accounts directly.
If people sign up, and deposit some credit card funds in our system, we will keep their wallet topped up with matic, and replenish so long as they are using our contracts.
We might be able to make relays like using gasstation to let users have no gas.

To overcome hurdles in UX, we could let users sign in using auth0, then we would manage their transaction operations, and so we would keep wallets we control topped up and operational.