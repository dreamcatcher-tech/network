
>[!tip] Created: [2024-11-26 Tue 10:12]

>[!question] Targets: 

>[!danger] Depends: 

Could generate an api key which is treated as a secret on the vercel infra, and is required as auth in the deno infra.

So deno would reject anything that was not verified.

Deno would store the account balances, and would deduct from those balances.

Additionally, might be able to call vercel from deno to get arbitrary code execution ?

Ideally, we would run the full streaming ai call - the entire chat route - from inside deno, so that vercel only handles edge functions.

So we'd call the deno edge function, which would make the AI call and stream back the results, then when done it would push the results into the kv store.
Finishing off the tool calls would need to be done by pushing the results into deno, as a pierce, then awaiting the tool call results, which are fed back in to the model.

This means that vercel is not running the long running waiting functions ?