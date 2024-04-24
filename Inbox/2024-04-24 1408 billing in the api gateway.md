
>[!tip] Created: [2024-04-24 Wed 14:08]

>[!question] Targets: 

>[!danger] Depends: 

This billing is like a special system call that can update account balances and update stats collection buckets.  All gateway calls would be the same way.

Calls between repos that consume funds would follow the same format, but they aren't side effects so don't need to be treated in the same way.

Billing needs to have a minimum but extensible format, so that the relationship and usage is always clear.

The consumer needs to send how much the gateway is approved to spend, and the gateway needs to stop if it hits its credit limit, or reply with a standard error if there are insufficient funds.

all gateway services / external consumptions should follow the same format.

There can be some quoting mechanisms where a quote is generated, has a validity period, and must be upheld if presented, allowing consumers to digitally shop around.

This mechanism is like ethereum transactions and uniswap deals.

So openai consumption credits would be treated like any other.  Preferrably deno deploy credits would be treated the same, so people could shop around suppliers.  Also people should be able to have repeatable equivalent services, so that having hosting services from multiple suppliers should be able to form consensus with each other, since the computations are repeatable.

So paying multiple hosters and then paying extra for them to form consensus with each other gives resilience, diversity of hosting, and lets you switch suppliers any time, possibly in realtime, with the switch decisions being made by the consensus hosters.

consensus as a service.

We should make the initial consumption of helps billed thru this gateway too, so that would be the first earnings for our network participants, and we would have launched using ambient attribution immediately.