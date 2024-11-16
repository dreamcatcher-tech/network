
>[!tip] Created: [2024-11-17 Sun 10:13]

>[!question] Targets: 

>[!danger] Depends: 

Each device does local signing and transmits using local radios or local networks.
Once the initial transation is sent, unconfirmed transactions are relayed too, so that the nodes gossip transactions they've heard.

This stops the local cluster from getting double spent against, and increases the chance of reaching the biggest network.

Relay fees can be included, to incent relaying.

Custody chain is required where the transactions are signed over using a transaction that doesn't have a double spend, so if you receive the tx, it risks a double spend accusation if you strip off the relay paths.

Multipaths have the fees balanced against them.

Treats where did something come from as the same importance as what is the thing.

double spend proofs are also circulated, so double spend wallets get flagged, as well as wallets that paid into double spenders maybe.