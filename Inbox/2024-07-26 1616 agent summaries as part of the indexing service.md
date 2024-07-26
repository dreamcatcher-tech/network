
>[!tip] Created: [2024-07-26 Fri 16:16]

>[!question] Targets: 

>[!danger] Depends: 

If we provide a type of indexer, and give it scope, as in what files to process, and a way to sniff files, then we can register to provide summaries using the summarizer every time a watched file changes.

Eg: hook up an agent summarizer to the `agents/` directory, so that summaries suitable to be searched by the switchboard are always present here whenever the agents change, or when a new one is added.