
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

## Chains layout
The browse page should be created server side and updated with results from the eth blockchain and bnb etc, upon which it builds a chain that can be used by a client.
Could generate entirely from the ethereum blockchain, by getting the user to browse the blocks directly, then use URL calls.  Our url calls should be actual chains as the source of the data, with url lambdas providing a calling interface.  Given that it is ipfs, we should be able to simply use the pinning

## Metadata service
Upon creation, or proposal, urls will start to get hit to fetch the data.  These need to be uploaded into and need to respond to the browser and opensea requests.

## Links to github
Create a repo around each packet, or at least a new issue / discussion.

## Using Infura NFT api
Seems we might be able to make the whole site run with only their apis as the live access.  Use metamask mobile for signing transactions.  They would give us browse, and the ipfs data would just get pushed into the ipfs api.