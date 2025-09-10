
>[!tip] Created: [2025-09-10 Wed 16:20]

>[!question] Targets: 

>[!danger] Depends: 

come in to the default path:
- if no default face, 
- if default face, then redirect to the view of that face
- if create face on arrival, then we will make a new face

view is always implied, if you're coming in from a browser.

a landing face might be one per new landing, or it might be one for all, so it never changes.

interactions are meant to allow face interactivity using tool calls.

a face an and interaciton could easily be bundled together so it presents as a single interaction, but the idea is that you chat with the face, so it is multi turn capable.

test the proxy function locally, by starting the server, and proxying thru to something else, like google.  This can be done programmatically.

or we can mock the whole system fetch, so that the proxy, when it calls out, will be passed in a mock fetch, so we can veirfy that fetch was being called correctly, and with what args.