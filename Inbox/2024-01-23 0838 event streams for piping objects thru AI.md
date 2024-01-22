
>[!tip] Created: [2024-01-23 Tue 08:38]

>[!question] Targets: 

>[!danger] Depends: 

If you supply an array, or a way to get an array (like, load this file and then use the key of this loaded object) then you should be able to pass that to a slicer, which would break up each piece and redirect it, possibly thru an AI.

The objects often are small enough that they fit in the gpt4 window, so they can be interrogated and checked in this way.

So to import the sectors list, we would attach it as a file, sniff it as being like sectors, then call a slicer where we instruct on the path to the array, and then give a naming pattern for how to name each item within the file.  Then we make function calls, write out the data, read it back in to check it, then ask if the user would like to commit the changes we have made.

We would automatically have a reference to the file on disk, so can pass around by reference.

To edit the sector is to say "edit a sector", get walked thru choosing the sector you want, then the edit tool is shown on the stateboard, and you can start manipulating the sector, with the results being included in the prompt.  The results get written to a file.  Once complete, the changes are shown overlayed on each other in a comparison tool, then committed if the user approves them.

Combining all sectors into a single file for display should be done in the viewer component, where it is given a glob to match.  So the viewer would be chained with the reader, to do live combination.

JSON file combiner would read in a glob pattern and then combine all the objects as a single array or object, depending on parameters.  This set of tools would be basic filesystem tools.  They should favour key stability too, so the files are always written out in the same order.