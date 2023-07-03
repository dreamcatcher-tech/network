
updated packets preserve the shares portions
superseding an accepted solution to a packet
use any currency as payment
use any NFT as payment
moving payments inside the system should show up early
shares between solvers and packet authors
merging packets

data hashes are really the thing we're tying to get merged in.

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
1. Sumblimation - funny bx turns gas to solid
2. innovator - someone who effects change
3. catalyst
4. progressor
