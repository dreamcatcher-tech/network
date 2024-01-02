
>[!tip] Created: [2024-01-02 Tue 14:31]

>[!question] Targets: 

>[!danger] Depends: 

It does provide good hints on how to display, but it should really be separated somehow.
This UI guide could be contained within the collection, or it could be stored as a child, or in some parallel item, or stored within the visual component itself that gets attached to the item.

? So do we remove the formData concept ?  Yes, because it has nothing to do with the data.

We could store info like this in the description of the field in the schema that describes it.

In natural language, we might want to move to something different.

But do we even need these tight schema definitions so bound up in the chain if we are moving to natural language ?  Schemas are a form of typing in the system.

Should we just dump the whole Datum concept altogether, and just use markdown ?
So the customer records are always stored in markdown format and we can just display them like that ?
Rather than burn the time with the schema display stuff ?

Could a collection just be a markdown table in text format too ?
Add a diff highlighter for when things change in the rows.
Markdown table gets generated, filter and sort by rows seems easy enough.
Doing text search on these tables is trivial to implement.

All the schemaing was really only for the ability of displaying guis and making safe api calls, but this requirement is removed by AI, since it can maintain all the format requirements of the system.

Ok so we're ditching schema completely for UI related elements.
We still need schema for machine things, like external calls, but everything else should be in markdown.

