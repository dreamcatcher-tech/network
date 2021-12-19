Governance handles the voting rights and decision making process around accepting or rejecting Pull Requests that are submitted to it.  Every Project must include Governance.

Governance is passed a single question: should this Pull Request be accepted or rejected?.  When passed a Pull Request, the Governance applies that question to the Pull Request and, if Yes, applies the Pull Request without further interaction.

Governance consists of one or more governanceAlgos.  These can be combined in a combinerAlgo.  Governance (that part of the voting rights) may also be devolved to other Coordinator Objects, with the result being passed back and combined for a final decision.

Contracts which have been signed by a Coordinator Object may override the authority of the Governance of that Coordinator Object.  E.g. when selling rights (Attribution) to a Trace, the Trace itself cannot, through its Governance, change it’s only Attribution to remove those rights.  Such ‘locked’ objects within a Coordinator are always referred to the Coordinator that caused that lock to be in operation.  

A history of the decisions reached by Governance can be recovered from the block history of the Project.
