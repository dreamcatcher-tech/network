NFTs represen the state of Packet constituent components.  Funder NFTs are either Funding or Funded but never both for any given packet.

Actors:
1. QAs - receive QA NFTs + ETH fees
2. Proposers - suggest Packet definitions and pay ETH fees
3. Funders - escrow money to incentivize solvers
4. Patrons - offer to buy apps

Collections:
1. Packets (includes Problem, Spec, App by trait.  Assigned to Proposers. inlcudes State as Open or Solved)
2. Quality Assurances (includes QA open and QA solved NFTs, and QA corrector.  Shows if the packet solved by trait)
3. Funders (includes Funding and Funded indicated by trait)
4. Solvers ()
5. Patrons

NFTs per packet
1. Packet
2. QA (open, corrector, solver)
3. Funding (Risk, Backing)
4. Funded (Solver - trait=Funder)
5. Intent
6. Finalized
7. Solver

Actors and Actions:
1. Patrons 
	1. Offer to purchase the solution of an App packet by puting in USD and getting back Offer tokens
	2. Purchase the finished solution of an App packet by converting Offer NFTs to Receipts
2. Funders
	1. Purchase Funding NFTs in exchange for USD
	2. Reject the QA marking the Packet as Solved, and thereby receive a Corrector NFT if the motion is carried
	3. Receive Funded NFTs when the Packet is Solved.