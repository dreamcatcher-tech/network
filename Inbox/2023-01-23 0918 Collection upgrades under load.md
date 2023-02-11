
>[!tip] Created: [2023-01-23 Mon 09:18]

>[!question] Targets: 

>[!danger] Depends: 

If upgrade could be processed by checking the entire tree whilst still allowing exisitng actions to drain, then we could upgrade without halting the performance of the chain.

If the upgrade was a switch in the parent, and then children are treated like a fork, and only upgraded when written to, this is the least possible load on the system.

However reading needs to be upgrade aware, and should run the upgrade if it wants to read the latest view.  Lazy upgrading can then proceed as a background thread, or not at all.

Not at all is best given that multiple upgrades may take place before a write to a child ever occurs.  Minimizing data churn is a good thing, at the price of recomputation.  The readers can cache the outputs so they can rapidly look them up if needed again.