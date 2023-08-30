QA is represented as a single address to the contract.  This is so that we can define arbitrary combinations of QA, else the DreamEther contract has to deal with voting systems of the QA.  We might allow this to be handled with a separate QA module that can be configured to create QA types of predefined combinations, like a clock plus a person.  Then selecting an array in QA type requires all of them to pass.

Create a mapping of QA id to a QA struct.  
```solidity
struct QA {
	combination: 'AND' | 'OR' | 'N',
	addresses: [a1, a2, a3]
}
```

? how would fees be split in a multi stage QA ?

Where would the veto system get stored, and who should use it ?  QA fees should get stored in escrow until the veto period passes.  So veto might be a separate contract ?

We can make some inbuild special QA types.  They are:
1. Clock QA - passes after some time, but not before some other time
2. Solver specific - only passes if the solver is on the allowlist
	1. individual address
	2. kyc passed person
	3. geofenced

? Can the dreamcatcher interact with other instances of the Dreamcatcher ?
If a subcontracting company respresented itself as a smart contract, then it would submit solutions on behalf of its members.  So then if they ran a dreamcatcher contract, they might be a packet, and the packet can be controlled to submit solutions ?

? can a packet be a solution ?

bonds should be required to be on the QA list.  anyone can enter, but misbehaviour will cause loss of bond to the appeal court.
Then allow people to pool their funds to back certain groups of QA, and earn some passive income on that, by trusting the QA pool.  Then the users of the QA service have more trust, and the QAs need not stump up all the funds they need.

## Appeals
These should be transitions, and if the appealQA resolves them, they would cause a prior transition to revert.  If you are appealing solutionShares, then the prior transition would apply with the solution shares modified.


`appealResolveShares( id, shares )` used if the resolve is fine, but the shares are off.
`appealResolve( id, appealHash )` if you don't think the resolve should have occured.
`appealReject( id, appealHash )` if you don't think the rejection should have happened.

the brutal beauty of the system is that appeals cannot conflict.

Before the appealWindow closes, all appeals must be in.  Only these appeals will be considered, and no appeal will be passed until this window closes.  Upon window close a new window opens which gives the appealQA to process all the requests.  There may be multiple appeals for different reasons.  There may be multiple share appeals.

If an `appealResolve()` is passed, then all `appealResolveShares()` are refundable.

There should be some punishment against the QA if they are found in error.  Corrector tokens result for the solutionShares and funderShares of appeal transitions.

Defunding of an appeal must be able to occur before the window closes.  So at window close, if a packet is defuned, then it is not considered to have made threshold even tho the funds are locked.

All appeals must be either rejected or resolved before the packet can close.
There is a timeout period where if not settled by time x, appeal will auto close.

QA should never change, since funding is put against a change based on trust in the QA.
## QA NFTs

There is a QA medalion slot available to every change, and this should be assigned when the change has enacted.  So to avoid requiring a transaction to activate it, it should be minted as soon as qa has acted, but is not tradeable until the timeout.  Can be used as a way to know the packet status.

Upon rejection, QA is minted a rejection medallion, but they cannot trade it until the dispute window has expired.  Revoked upon dispute upheld.  

Upon resolve, QA is minted a resolve medallion, but they cannot trade it until the dispute window has expired.  Revoked upon dispute upheld.  

Upon a packet being resolved,  QA is minted a packet medallion which is green, or something differentiating, which is their reward for performing all the QA tasks required to get the packet to fruition.

Super QA gets minted, instantly, and is transferrable, a superQA token, which is the QA slot on a dispute.

Rounds can mark where the dispute list index was up to.

Rounds slot stores the length of the downlinks array at the resolution of the last dispute round.  This means that any subsequent dispute rounds only need to consider from this index onwards as valid disputes in the round.  Each round can only have one winning dispute, and all others must be dismissed.  SuperQA is only minted a token for the winning one they choose.

We should also store the winning index of the round, to avoid having to loop thru everything to ensure that only one has been chosen.  This means that all disputes will be immutably recorded, but they will never clog the processing of any outcomes.

QA medallions may exist between multiple QA addresses in a packet, if the packet was merged.

Super enacting a dispute should instantly claim, since there is no pending period.  So every dispute that passed the threshold should be enacted, and only then can the packet proceed ?  Or can super enact them all by a single function call ?  If super dismisses all, then the dispute can never be altered.  A dispute can never be acted on directly, and super can claim from them any time.

Really need the dispute status to be related to the change they are about.

Share disputes need to be exact.

A dispute round is deemed open if there is at least one dispute in the current round, regardless of the funding applied.  QA can dismiss all disputes in a single tx, so no chance of gas dos.

What if the solution window was the same as the dispute window ?
Then we would not need to use the `isJudgeable` call to determine other valid solutions
packet close could be a separate enactment, so you have to get a solution passed, then you have to pass a packet, where other solutions are considered like disputes and block the packet being enacted ?


So only once the packet is solved, then the QA is minted a special NFT with a single unit

Preallocate some base assetIds before anything starts, and use those assets.

So if the solution window was equal to the dispute window of the solution, then you have until that window closes to get your solution submitted.  If it is not funded enough to be considered by QA, then it is not considered as being submitted.
## QA Steps
### Header approved
1. dispute approval arrives
2. dispute shares arrives
3. super rejects both disputes, closing the round, and allowing enacting
4. change can be enacted

1. super accepts a share dispute
2. round is closed with the dispute index selected
3. change can now be enacted as the round is closed

4. super accepts an approval dispute
5. round is closed and header moves back to open

### Header rejected
1. dispute rejection arrives
2. super accepts a dispute
3. header moves back to being open

1. super dismisses, closing the round, header can now be enacted

## QA Failure modes
1. Took too long to pass a solution
2. Took too long to respond to a dispute