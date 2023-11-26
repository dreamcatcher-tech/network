
>[!tip] Created: [2023-11-27 Mon 09:23]

>[!question] Targets: 

>[!danger] Depends: 

if we can use a HAMT to manage the state in the same way that children are managed, why have the children at all ?

Does that mean a child is really just an alternate expanded form of key in the main state ?
Only when this key needs to be shared independently does it get changed into this form ?

Or, should large json state always be done using children, where each key at each level is a dedicated child ?  This might be the same same as having a HAMT to process the state directly ?

Is there a need for two types of chain - one that does calculation, and one that does crud ?
Should calculation shadow data storage, so that the whole tree becomes the norm, and the covenants become a separate layer on top, such that the statetree is the default, and the meta tree is separate from it ?

Then the AI tree can be separate again, overlaid in a different way ?

Inside reducers, we could use a proxy object like immer to do both reading and writing.
Reads need to pause while we go fetch the info, unless we use await, which is awkward.  Can toggle modes where sync mode can we set so the object is instantly available.  Or accessing state needs to be an await.  Could be `await useState( path )` which would amount to the same, but return a fully inflated object.

Child chains then, represent a permission boundary and a parallel access boundary, since a child can be modified independent of its parent.

Child chains seem inately heavier than pure state HAMTs.

Wish we could dump all the channel stuff and just deal in these pure objects, since the channels shouldn't be used for reading data, only for writing.

The state layer should be at the bottom, then the execution layer on the top, then the AI layer on top of that too ?