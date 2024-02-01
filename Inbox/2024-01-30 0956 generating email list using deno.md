
>[!tip] Created: [2024-01-30 Tue 09:56]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to load up the customers list, and generate email lists, then present to the user, all within deno deploy, by end of day.

Take the xml file, break it up into chunks.  Process each one at a time, generate markdown files for each customer, along with a template.

Search for current customers - this would involve walking the fs, in parallel, interpreting them as current, and outputing the results.

Read in the xml, use a function that breaks it up into individual files, and writes to disk.
Call the AI to check each and every new file written, to ensure it came out completely, where the AI might use xml checking tools as well.
Once all ok, take each xml and pipe out a .md file representing its contents.