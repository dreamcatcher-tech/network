Typeof: workflow

Fork is the process of creating a new Object from an existing one, where the genesis block of the new Object points to the block in the old Object that was the latest block at the time of the Fork.  
At the Dreamcatcher level, this results in the new Object having the same data as the old at the time of the Fork.  Forks can be configured to allow or disallow changes in the Origin Object after the Fork to be considered as changes to the Branch Object, an operation which is deconflicted at the Architecture level or through highlighting conflicts in the UI for resolution between the instigating parties.


A Forked Branch Object may have no access to the history of its Origins’ chain. The Branch’s Chain cannot add a block to its Origin Object Chain as this block would be rejected when attempting to verify the right to do so using the ChainID as it would be rejected while walking the Origin Chain back to the Genesis Block.  The opposite is also true in terms of the Origin attempting to add a block to its Branch. 


The new Object can be created in the same hierarchical location in the same Project (e.g. forking a Wish into another Wish), a valid different hierarchical location in the same Project (e.g. Forking a Wish into an Issue), or in either of these in a different Project.


When Forking a Project, the Governance of the new Project is set to the Governance of the Project that instigated the Fork.  