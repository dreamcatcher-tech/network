
>[!tip] Created: [2025-02-27 Thu 10:14]

>[!question] Targets: 

>[!danger] Depends: 

This is an idea for making a very simple form of NFT project management with the core idea being that the NFTs are made up of parts where the parts are like simple large components that are required to complete the NFT task.

1. The first part is the basically the task agreement where both the offerer and the receiver have both agreed that the task definition is acceptable.
2. Secondly, there is some kind of a deposit event where money has been escrowed or placed into the NFT account
3. Then there can be one mini milestone drawing or draw downs that occur during the NFT cycle.

Ultimately upon completion, the invoice for the final funds is submitted, buyers they assess it and once everything's been approved and accepted then the final NFT is minted. And this represents the closure or the sealing of the NFT.

It is possible that the NFT structure allows nesting, where an overall large project can be formed of these little sub-projects. The sub-projects could be referred to as the milestone events, and the format of each NFT would be identical to the larger one, providing us a way to do summary tasks in effect. So that even if the overall task fails, the child tasks can be viewed in isolation and they effectively get done. We avoid this notion of all or nothing. And we also allow for the enclosing NFT to be modified as time goes by, provided there's agreement on both parties.

Additionally, part of the display interface is going to show sort of like the mini voting capacities where both parties can propose changes or complaints using the official change method. And then once accepted, the information about the NFT is updated in some predictable way. 

So I guess what we're trying to make really is an NFT viewer. Once we get the basic mechanics of those NFTs, then we can work out what the smart contract is that makes it happen.

So we could have a portion at the tip of the history of each NFT because each individual NFT should be viewable individually with its historical events and its planned events that are dictated by the nature of its lifestyle. The fact that it is a task with a plan and then these can also be rolled up to show the status of a summary task or a higher summary task.

These connections of events can be related in any way whatsoever. But crucial is that during the tip of the execute and execution of the task as we're working towards completion there needs to be a space where people can raise objections, suggest ideas, basically seek to make some changes or reach some agreement or ask some questions. Ultimately they should have some simple tools to propose a change. Their change can either be accepted or countered by the other side if it ultimately results in a minting event.

The next minting event is going to include all these ephemeral changes along the way so that the viewer of these items can present and show all this information that took place along the way too. 

Calculating the delivery date - each minting event is a baseline event, and so we can show the historical timeline slippage, but between events we can also dynamically calculate from all the component events.

These are simple two party tasks.
Each task can have issues, and these issues can have bounty against them.

We should make a simple bot that can generate a project plan based on a discussion, or it can update an existing on based on a transcript, where it might ask some questions where it is unclear.

So if we can make a basic UI block for displaying arbitrarily nested items, then we can have as many complex things as we like.

Dispute mechanism ?

issues register, where each issue can also have an impact assosciated with it.
The issue is independent of the parent NFT, but when the parent wraps it, the parent includes a time impact assessment.

Artifact would be used for the pre mint data, and after minting, artifact relies on a sync with the eth blockchain.

So the base properties, like due date, and history - these are always present.  The changed versions of the tasks can be viewed as these are on chain.

If both parties agree, then they sign a transaction, and only if both sign and supply enough gas, does the transaction get broadcast.

Contingincy cost is something that is calculated as different subtasks go over budget.

Need to allow some seed events, like NFTs being moved into an escrow or something.

Then once you have produced an artifact, like a set of rules, then you should be able to make a new task that seeks to modify that, where the task may have some funding, it may require acceptance from the project manager.

We can set human roles in place for any of these things, where we aim to replace this with AI agents once they get better at it, but the basic format can stay very much the same, like for example the email format - still going strong nearly 50 years later.

We might need task dependencies relationships, too ?

Simple management is with two party, changes can be applied, and then the other party submits the change they want.  This can be set outside of the system tho, so the project owner address can be configured separately to the primitive ability to create and manage a project.

Then tasks can have dependencies that are completely independent of any given project.

? Adding in QA that is separate to any party ?  This is separate too, as this is just the project governor.

Must separate out the two parties, the funders and the doers.  The contract should handle the submission of complete and rejections.

QA is an addition to the contract, which can be turned off.
QA can be arbitrarily complex.
If QA is just an external control that can only do pass or fail, then even the dispute process can be handled over there, since they can declare they are about to approve something, and invite disputes.

So if we have a basic task definition structure, and the completion of this task is configurable to be either external, or two party, this should be enough ?
Initiation of completion should always be done by the doer, since they say when they're done and submit the evidence.

So there's a very small set of actions to be done.
1. mint task, which is done by the doer
2. fund task, which is done by the funder
3. update profile (allows the contract to track a doer and funder profile that can have info attached)
4. progress update, which is done by the doer
5. work complete, done by the doer, which might 
6. work accepted, done by the funder, which transfers the funds.  The NFT now passes to the funders to control.  They can update with usage update, and then could re-open the NFT for work ?
7. alter, which will modify some parameters, needs to be accepted by both funder and doer, where if the cost of the task changed, the funder needs to add those extra funds in with their transaction.

Milestone payments would be handled by making a dedicated task for each milestone part.

Put a clearout function, that can pull all the funds from the contract, in case of emergency, which can be severed.

What happens if the house needs maintenance ? the original NFT should somehow be opened up again ?

Creating the building permit is an NFT that is started by the doer, with specific artwork,


Setting the price - this could be set in any NFT or any currency, and so a building permit could be set as x USDT, plus y NFTs from land blocks.

Task could be set with no escrow, which is simply just task is completed when the payment is made.

Legal contracts could be tied to the events of the contract.
The timeline of events should be very simple and plain.

How to mint an NFT that represents the asset once the job is done ?
The doer would create the NFT as the work to be done ? so this would be held by the task as the asset marker, and it could be any amount of NFTs or anything at all.  We are trying to make it real, and that NFT can actually have status determined by the status of the build task.