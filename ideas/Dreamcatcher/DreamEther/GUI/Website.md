
>[!tip] Created: [2023-05-19 Fri 11:06]

>[!question] Targets: 

>[!danger] Depends: 

We need a webpage to manage the Dreamcatcher entries.  This should follow the UniSwap format, and launch the app when requested, but have all the info on the main page.

Compose button, then ask what they want to do next.

List all the packets and different types ?

Present packets as a bundle of components.  Make a graphical artefact that shows all the pieces together.

Could use snapshot as the way to process Dreamcatcher packets ?

Image generation tool that does a series of overlays on each image, and shows how the packet artwork will look under all different circumstances.

Connect with a wallet to provide login.
Optionally sign in without a crypto wallet.

Use [langchain](https://langchain.com/integrations.html) to be pluggable with many different APIs.  Use the API store to maintain their interfaces in Dreamcatcher format.  Write covenants that make these queries and can cause chains to be ingested in the embedding models to provide relevant data.

Have a workbench that leads up towards packet generation.  Maket this a component tho, so you can use the system like an inventors notebook.

Charge to generate chains, and then the chains get stored in S3 or github pages so we get free hosting of the data.  Or we can just run our own IPFS nodes and let IPFS handle some of that for us.  We need an IPFS compatible url anyway if want to use this on opensea.

Should provide some [[Obsidian Plugin]]s so that it is a single click to turn an idea into an NFT.

Cache metadata in the localstorage, and then seek to keep it in sync using one at a time calls to infura.  This would be small at the start, gets us going very quickly

Build up a local browser set of chains that store all the data we pulled down.  List to update events from eth, then present the whole lot as a dreamcatcher chain, so we can continue to use the methods and UI that we already use, rather than independent things.

## Chains layout
The browse page should be created server side and updated with results from the eth blockchain and bnb etc, upon which it builds a chain that can be used by a client.
Could generate entirely from the ethereum blockchain, by getting the user to browse the blocks directly, then use URL calls.  Our url calls should be actual chains as the source of the data, with url lambdas providing a calling interface.  Given that it is ipfs, we should be able to simply use the pinning

## Metadata service
Upon creation, or proposal, urls will start to get hit to fetch the data.  These need to be uploaded into and need to respond to the browser and opensea requests.

## Links to github
Create a repo around each packet, or at least a new issue / discussion.

## Using Infura NFT api
Seems we might be able to make the whole site run with only their apis as the live access.  Use metamask mobile for signing transactions.  They would give us browse, and the ipfs data would just get pushed into the ipfs api.

By using a predictable packet numbering system, we could allow many NFTs to be queried at once, based on status, or some other common dissection.

## Using eth api calls directly
Would not be able to search the NFTs based on metadata.
Could download an index file from ipfs that contained indexes of common words to rapidly look up.

## Central Server
Serve a chain with all NFTs as children on it, that all the clients stay in sync with.
On eth changes, the central chain is updated, and so all the clients update too.
But central down, means packets down, so we should use our chain for in browser only.
So pull in data from eth api and ipfs gateways is the best way.
Cache in local chains, and keep them up to date locally.
Store modified token ids in each block, so that we can rapidly catch up given any future block and any past block as the sync boundary.
Delete this data every day or so, or just every block.  Get a small gas refund back each time.
May need a central server to relay requests to private apis.

## Lambda servers
Can provide chain snapshots down to clients to give rapid synchronization ?
Seems best to have a powerful always on server that does the syncing of chains, and lets them pull down the big list of every NFT into the browser.
Post into the chain to upload IPFS content.

## Relay only
Central server that relays ipfs calls and eth provider calls, using api keys ?

## Full decentralized
Have some best effort ipfs nodes that people can upload to, provided they have a metamask account that has some credit in it.
Then run some servers that pin based on the chain material, 

## IPFS data format
Supposed to be chain format data, but might be also simplified formats so that opensea can receive the data directly ?
Opensea api would cause server to look up the pulse based on its ipfs hash, then extract out the data inside its state, which it would use as the response to opensea.

## Metamask plus chain gateways
Metamask gets used as it needs no api keys to run.  Reads the blocks to get the current list of NFTs.
Each token that the user looks at is checked to get the most up to date version of the data on funding, disputes, qa, and updated headers for packets.  Syncing all transitions will get all possible data, since nothing actually mutates.  This could be a backup method, and is what the serverside method uses to build up the canonical chain that it shares as readonly.

Grab the canon chain and subscribe to it.  Mark all tokens as unverified.  Roll thru all the ETH tokens, and check the ipfs data for all matches what canon says, so can mark as verified.  Means we can display data rapidly to the users, but then

Pull snapshots of the canon chain from github pages, then start building up from the chain yourself using metamask, plus seek peers for canon and sync up with them rapidly.  Have some backup ipfs nodes that ensure everything referenced on chain is available on ipfs.  Provide some peers that are only for reading from for pulses.  If under ddos, at least the github snapshot will be be available, and the chain itself.

If signatures were separate from content in canon, then each client should rebuild the same copy of canon themselves, and so the sync could be very fast.  Canon could be signatureless, and be a calculation only.  

## Lambda backend
Can be a generic backend for any of our chains that gets set up to return state based on a path to a chain and a pulseId of the relative root.  This is the same service that clients can upload into for preflight, and the same they can use for client persistence between machines.
Lambda post your pulses each time a new one occurs, then the lambda reaches down the connection to you and gets all the children it needs, verifies you are the signer, then stores it.
This is the same for any chain at all wishing to use some persistence helpers, and this can be configured to be private, if you sign in with metamask.

## Use metamask as a pulse signer
Can encrypt the signing keys of the node against the metamask account.  Then can encrypt all pulses and store publicly.  Metamask on any machine can unlock those keys.

## Client persistence
Push all client pulses to an IPFS pinning service, or to some services that we own ?
Let people talk to one another using inboxes ?
Require eth wallet for persistence, so if we see someone who is storing a lot but not creating packets, we can dump their data.
If everything they do is public, or can be turned on to be public, can get their wallet to send a small tx or sign something that lets us know how to recover their data on another computer.
Can encrypt everything to their metamask wallet.

## Create process
1. Generate an IPFS block that has the neccesary format in it, including the image as b64 encoded json.
2. Preflight - Push the pulse to a pinning service, and just general ipfs - distribute enough to be sure the data is available.  Use api ipfs to start, then write a lambda function that takes the data in, holds it for x days, but only returns it if an ethereum block is sent.  Long holds anything that sits in eth chain
3. Metamask to create the transaction

## Browsing
1. Use metamask or infura to read the NFTs counting down from the top
2. Keep updated on each change
3. download the latest canonical chain from github
4. browse by opensea api

Store the last block that you synced up to in case a rebuild is required.
Have a canon chain which holds all the data in our format, but be able to rebuild this from external sources, as our chain might die.  But if it didn't die, then we could rely upon this to be there, and have some strong nodes up that were always available.  Otherwise we might do a lot of calls using the metamask api as we build up each and every NFT.

Filter metamask on events from contract, so we can instantly update ourselves without waiting for the canon chain.  If we started loading from chain first, and race against canon, this is probably the best experience ?  Get NFTs this account owns first.  Storing a version of canon in the ghpages data is also most reliable, since it is guaranteed to work.

We can use infura without a secret, so can read data from it at liberty.  So we might just build up the library locally and not worry about hosting our chains anywhere at first.  Even the NFT urls work with infura using a shared api key, so we should build up using this, so that our calls are very direct.

Using infura NFT api, we can rapidly build up the list of all nfts, for the user and globally, then can build up a local view of the canon chain, which is synced to disk or rebuilt each pageload, then use the chain to make api calls and handle page navigation.

Do local search by building up the canon chain completely, rather than using the search function in infura.  By the time the