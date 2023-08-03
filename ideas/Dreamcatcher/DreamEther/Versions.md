
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

## Notes

? could we split the distinction between packet writers and solution writers ?  Why not bundle them as the same ?
fees for QA should also count as funding types ?  If the qa fees were treated the exact same as funding, then there are less NFT types to consider.  NFTs commemorate being either part of the solution, or incentivizing the solution.

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