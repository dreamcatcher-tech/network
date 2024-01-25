
>[!tip] Created: [2024-01-21 Sun 12:47]

>[!question] Targets: 

>[!danger] Depends: 

Periodically run some example requests from all known deno regions, and see which ones are best.  Then move the main app thread over there to perform best.

In many cases we need multiple RTTs between us and the AI, so we would want to be located with the lowest latency possible.  We would publish this info in a comparator, so that people could make a switch decision by just reading the chain oracale, and choose a region appropriately.

This would permit low latency and resiliency.

Latency measurements could be provided for all calls, and we just take the live sample calculation, rather than a dedicated measurement.