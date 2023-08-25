
>[!tip] Created: [2023-08-25 Fri 17:59]

>[!question] Targets: 

>[!danger] Depends: 

On a low gas cost chain, we can start the beginnings of the dumb version of the attribution algorithm.

Buyers come and buy from the smart contract, and we take the asset and amount and record this.  We mint a buyers token for this.  We include the data they wanted, and weight this against the data from previous purchases.  We continually update what the median score is, so that payouts are very simple to calculate, and the dataset easy to update.

If there are no stats currently, then it splits equally between funders, buyers, and prior art.  If there has not been enough data, then it pools until 100 events from different addresses have occured ?  It always waits until enough data ?

Present this graphic as a 3D surface, optionally weighted for volume.

Volume is weighted against amounts, so that heavy amounts do not tip the scales.  Possibly using quadratic weighting, so participation is more important than volume.