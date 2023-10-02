Using Auth0 we can let people do anything they like with their account, and to pay by credit card.

If they want to move their account to self managed using private keys, then we can, with a delay, pass over their private keys.  We can require them to sign in to two different browsers to use the account, as a safety step to prove they have the keys to recover from.

We can generate a new public key for them, and then let deposits go to this address.

If they are self managed, then chain interactions require metamask to sign, or some other web3 wallet.

free gpt4 queries are public, but we do parse the info to ensure no harful data has gone in, using moderation ai.
at cost gives you privacy of query, or you can use your own api key.

Auth0 is easier for us to use, since we handle all the key signing in the backend.
We always show you what your public key is, but we keep the keys internal.