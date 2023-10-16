
>[!tip] Created: [2023-10-17 Tue 09:59]

>[!question] Targets: 

>[!danger] Depends: 

The user chain should record the interactions with the AI. 
It would have all the required records to display.  All GUI rendering should be local.

AI calls should go thru the server tho ?
If the user did the api calls, then wrote them to chain, we still see what those were, but there are less chain round trips.

Search may still need to be available in crude form, but the AI search is much richer, so we should do that by default.

Server side searching would still be used for very large searches, but in full local mode, there would be local layers built up to speed up next time.  But, this could be polluted, and so some queries should run on server so that the results are trusted and also available to all.
Do group searches where no node has all the data and so they coordinate to search all the data, possibly trading with each other to pay the bills.