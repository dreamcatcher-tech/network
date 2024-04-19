
>[!tip] Created: [2024-04-19 Fri 11:25]

>[!question] Targets: 

>[!danger] Depends: 

We can use a stats bucket for each api endpoint to collect per user stats on their usage of the gateway.  OpenAI should be one of these, as should deno deploy.

This should be thru the api gateway model, so that any api usage can be billed and metrics collected for it.

Each individual request will have its consumption backed into the actions and replies, but there will be some live stats collected in a sliding window fashion.

Per repo should be collected too, so all repos should have a stats branch ?
Or, the usage of the user is segmented into per repo usage too, and this safe namespace is used.
Might not store a top level bucket, but rather summarize.

Hard stop on credit reached.

Before running, check we have enough credits by comparing the usage and the credit amount.

Write a summary for the users total usage, then write summary for each repo that is consuming.

For each repo, can dig into the exact actions to figure out which ones used the resources in question.

Queue metrics, only we care about it ? or we should carry this on for each repo and user.
? how can we make deno itself be measured in the same way, using an api gateway call ?
Would be a bit of an inverted call, or it just has privileged access to the db to update itself as tho it was an actual api call.
Deno is effectively a gateway call, somehow....
The billing model is presented in the same way no matter what hosting service is in use, so hosters are offered in the api store the same as we are, and users can straddle multiple providers in this category.

Billing is probably a category in the gateway markeplace - if their credits are accepted within the ecosystem is up to the network.

Nobody cares abound failed atomics - this is a cost only we carry.
Atomic collisions are our problem, we log these differently - users see only what is in the commits.
A well designed atomics model would have almost no collisions.

Writing the stats to the bucket is also a cost too, so should count in terms of write units that we need to pass on to the customer.  Each queue message is like, x, and each file changes are done by the 1kB unit.  We charge for actions / executions plus file changes.

The billing and the metrics should be the exact same storage, to be optimal.