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

### Self organization
How much did multiple Do-ers coordinate with each other to tackle a task piecemeal ?  How much did Funders coordinate to save their costs ?

## The Upwork Raw Router
This is a manual router, that requires the participants themselves to negotiate their routes themselves, using a messaging system it provides.  In exchange for this service, the Upwork Raw Router charges 20% of the incentive throughput.

## The Dreamcatcher Router
This is a permissionless router that requires transmissions to be formed into Packets.

## Implementation
We can operate this model using UpWork as it is right now, and present ourselves as a freelance company that bids for work, then publishes the jobs we want fulfilled on upwork too.  We would seek to deduplicate Funders so they can share their costs, and we would seek to engage Do-ers.

Ultimately we would seek to have Do-ers themselves taking over some of our roles, and so long as everyone honors ambient attribution, we would all benefit fairly.

The attribution model is what we hope leads to greater coordination between competing Do-ers, and coordination between Funders.

We would be the salespeople of the Dreamcatcher way of doing things to Funders.  We may need to float some of the jobs with a small amount of funding to entice people in at first.  This should be very cheap compared to the lessons we will learn.

### Tooling
1. Some searching tool that helps narrow down jobs that would be suitable for us
2. Store the UpWork screen grabs on our own chains, if permitted to do so
3. Chat for Do-ers and Funders to communicate and make promises to each other
4. Pull the status of the UpWork escrow and jobs into our system


### Problems
1. Can we do this on non blockchain work ?
2. What if Funders make use of the work and pay no Royalties ?
3. Is pulling info out of UpWork breaking T&C's ?