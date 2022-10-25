If we can set the state of a child during blockmaking, we can avoid making 3 blocks, making just 2 - the new child, and the parent, which would include the update from the child.

But we would lose the pooling aspect for the child, however this might not happen in practice, as very unlikely something was pooled from elsewhere.

It would give us a guarantee that the change had been applied to the child during blockmaking.

Nesting this deeply, we could do arbitrarily deep nesting with `number of blocks = (changes + 1)`
vs worst case `number of blocks = 2 * depth`