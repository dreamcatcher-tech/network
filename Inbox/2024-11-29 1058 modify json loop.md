
>[!tip] Created: [2024-11-29 Fri 10:58]

>[!question] Targets: 

>[!danger] Depends: 

Often, when there is a config file, we need to make changes to it.

Rather than making the model aware of each option, we would simply provide a schema with good descriptions, and allow the model to generate this object, in full, each time, supplying the previous version as the expected output to decrease latency, and hopefully increase accuracy.