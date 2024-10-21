A model of Upwork, using the [[Transmission Network]] model, suggesting the throughput improvements from replacing their UpworkRaw Router component with the Dreamcatcher Router component.  Also provided are metrics to measure the performance of both components.

This model considers only Funders putting work up, in varying quality levels, and Do-ers submitting work back to Funders, in varying quality levels.  This model explores the performance of the two router types under study during varying types of load, which are:
1. High Funder rate
2. Low Funder rate
3. High Do-er rate
4. Low Do-er rate

And all combinations of these 4.  Of particular interest is the burstability performance of different network components, as rates alter.  The burstability studied is both seasonal and daily, where for example timezones separate Do-ers and Funders.

Finally, we want to study a model that connects the Dreamcatcher router to the UpworkRaw router, and measure the performance enhancement of UpworkRaw because of this.  A discussion will be provided on the plausibility and effects of UpworkRaw transitioning into a Dreamcatcher router.

## Metrics
There should be a metric or metrics we can use to measure innovation through upwork-raw, and through Dreamcatcher using the API pipe from Upwork.

### Abandonment rate
Due to delays in brokering a connection, transmission offers are retracted, or not processed.

### Drop rate
Due to pessimism of the effectiveness of the router, how many Funders or Do-ers did not engage with the router.  For example, fearing their inbox blowing up from applicants, how many Funders decided to put their job up somewhere else, or not even bother.

### Stickiness
Once a transmission line has been used, how likely is it that this line gets used again ?  This is of interest since if the overhead of selecting initially is high, the chance that this is the best transmission line is low, but with high stickiness the network is doomed to a lower performance.  Cheap and easy switching allows the network to reconfigure itself quickly towards optimal thruput. Greater performance quicker means that, as environment conditions change, the network will spend a greater overall time near peak performance.

## The Upwork Raw Router
This is a manual router, that requires the participants themselves to negotiate their routes themselves, using a messaging system it provides.  In exchange for this service, the Upwork Raw Router charges 20% of the incentive throughput.

## The Dreamcatcher Router
This is a permissionless router that requires transmissions to be formed into Packets.