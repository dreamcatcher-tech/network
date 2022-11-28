## Generating fake customers
Take the sectors object, randomly spread customers out around the bounding box of all sectors.

## Using covenant code in front end UI
Schedules component needs to do calculations of what sectors appear on what day.

## Manifest generation
Pick todays date, and generate some manifests for some past and future dates, to test how the scheduling component handles having no manifest saved.  To get there, we need to generate sector membership for customer locations, generate some products but start with every cycle being a collection first, 

## PIP triggers
1. When a location changes its gps, it removes itself from the currently assigned sector, and finds its new sector location.
2. When sector geometry changes, all sectors recompute for all customers.

This means there is a full computation mode, and a single computation mode.  We can start with the full computation, and redo this whenever any customer changes.


## Fake realistic data
Read in the real data.
Find which sector each customer is in.
Generate a random gps location that is within that sector.


## Working with real data
If an import path points to the private data,

We can maintain this json object in sync with moneyworks.

## Plan
Get the whole app working completely with fake static data.
Load up this fake data on the blockchain.
Set up an onsite demo using fake data.
Only once fully operational, move to live data.
