
>[!tip] Created: [2023-06-12 Mon 18:40]

>[!question] Targets: 

>[!danger] Depends: 

If you send your NFTs to this contract, you can then start to split them between owners.

A service overlays a split icon over the top of the NFT so that the artwork appears correct.

Could just use identical artwork but add an extra trait somehow to indicate it was split.

You can sell and trade the split shares just like any other NFT, but to undo the split you need to own all of them in the same wallet and issue a merge shares command.

Possibly issue a rationalize() function, where it finds the lowest number to assign to each person to represent their splits.

### `withdraw( tokenId )`
Undo the fractionalization, and send resultant back to sender.  Only works if the sender owns all the splits in their wallet.

## `add( contract, [number] )`
Which contract would you like to split, and into optionally what number ?

## `split( tokenId, number )`
Whatever the amount you hold, how many would you like to hold afterwards ?
Increases everyones count in order to give you the number you want.  Can be reversed with calls to rationalize.

## `rationalize( tokenId )`
Caller must hold some of the token.  Reduces the held number down to the smallest possible number.