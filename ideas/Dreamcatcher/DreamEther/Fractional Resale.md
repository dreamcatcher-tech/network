selling a share of something cannot dilute the other shares.
This might need to be done by way of wrapping, rather than storing it inside the struct.

Transferring the whole thing as part of a sale need not always be the case - you should be able to selling an indefinite amount to anyone, and for any thing.

But this might get too hard to track.

Store the shares as fine grained decimals, and then selling is any amount in decimals you want.  Call a multiply function that shifts everyones decimals forwards, so that more amounts can be created for sale.  Limit how often this can be shunted and by how much.  Also limit to only if some address has nearly nothing.

Might be simpler for everyone to understand there is no method like this, and that the ratios are kept to 100 max and you need another packet if you want more fine grained splits ?

If you sell off everything you have, then that is somewhat your problem unfortunately, and you will be left out of any multiples unless we store the original split somehow.

