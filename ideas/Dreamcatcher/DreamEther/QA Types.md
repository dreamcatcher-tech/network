QA is represented as a single address to the contract.  This is so that we can define arbitrary combinations of QA, else the DreamEther contract has to deal with voting systems of the QA.  We might allow this to be handled with a separate QA module that can be configured to create QA types of predefined combinations, like a clock plus a person.  Then selecting an array in QA type requires all of them to pass.

Create a mapping of QA id to a QA struct.  
```solidity
struct QA {
	combination: 'AND' | 'OR' | 'N',
	addresses: [a1, a2, a3]
}
```

? how would fees be split in a multi stage QA ?

We can make some inbuild special QA types.  They are:
1. Clock QA - passes after some time, but not before some other time
2. Solver specific - only passes if the solver is on the allowlist
	1. individual address
	2. kyc passed person
	3. geofenced

? Can the dreamcatcher interact with other instances of the Dreamcatcher ?
If a subcontracting company respresented itself as a smart contract, then it would submit solutions on behalf of its members.  So then if they ran a dreamcatcher contract, they might be a packet, and the packet can be controlled to submit solutions ?

? can a packet be a solution ?

