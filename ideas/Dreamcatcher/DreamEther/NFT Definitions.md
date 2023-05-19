NFTs represent the state of Packet constituent components.  Funder NFTs are either Funding or Funded but never both for any given packet.

Actors:
1. QAs - QA packets receive QA NFTs + ETH fees
2. Proposers - propose Packet definitions and pay ETH fees
3. Funders - escrow money to incentivize providers to solve the packet
4. Patrons - offer to buy apps before they are ready, purchase when they are ready, and indicate the split between funder and solver for their purchase.
5. Providers - provide solutions to packets

Collections:
1. Initiators (type = QA, Proposer, Funder, Patron & contribution = n of m)
2. Packets (type = Problem, Spec, App & state = Open, Solved) 
3. Solvers (type = QA, Funder, Patron, Provider & contribution = n of m)

NFTs per packet
1. Packet
2. Initiator
3. Solver

## NFT Table
| trait / NFT |        Packet        | Initiator | Solver |
|-------------|:--------------------:|:---------:|:------:|
| state       | Open / Solved        |           |        |
| type        | Problem / Spec / App |           |        |
| QA          |                      |     X     |    X   |
| Proposer    |                      |     X     |        |
| Funder      |                      |     X     |    X   |
| Patron      |                      |    Apps   |  Apps  |
| Provider    |                      |           |    X   |

Actors and Actions:
1. Patrons 
	1. Offer to purchase the solution of an App packet by puting in USD and getting back Offer tokens
	2. Purchase the finished solution of an App packet by converting Offer NFTs to Receipts
2. Funders
	1. Purchase Funding NFTs in exchange for USD
	2. Reject the QA marking the Packet as Solved, and thereby receive a Corrector NFT if the motion is carried
	3. Receive Funded NFTs when the Packet is Solved.

Packets
Because packets can never be owned by anyone, these NFTs remain the sole property of the Dreamcatcher smart contract, and represent a quality assured definition of what a packet is.

## Initiator
### QA
You receive an initiator QA NFT if you QA'd a proposed packet
### Proposer
You receive an initiator proposer NFT if you proposed a packet
### Funder
You receive an initiator funder NFT if you purchased it from the smart contract
### Patron
You receive an initiator patron NFT if you purchased it from the smart contract

## Solver
### QA
You receive a Solver QA NFT if you QA'd a solution to a packet
### Funder
You receive a Solver Funder NFT if you funded this packet to be solved
### Patron
You receive a Solver Patron NFT if you chose to purchase the solution using your Initiator Patron NFTs and you selected a ratio between FUnder and Solver
### Provider
You receive a Solver Provider NFT if you provided the solution to the packet
