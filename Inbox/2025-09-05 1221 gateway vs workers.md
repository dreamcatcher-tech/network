
>[!tip] Created: [2025-09-05 Fri 12:21]

>[!question] Targets: 

>[!danger] Depends: 

if we make it so that agents never have access to your app secrets, then we can run untrusted agents with strong controls.

ideally we would have no secrets in the app, just ciphertext on the volumes that stored our secrets, like openai api keys.

we can isolate using a shared firewall config, where only permitted agents can talk to other agents.
this snip can be at the connection level, or in actual firewall rules.

basically the agent container is considered lost, or untrusted, so everything on the network needs gated access.

access can be reported to a central place, and also suspicious behaviour can be reported.

some machines have volumes attached, these are the system volumes, and in there is where we would store ciphertext keys.

the gateway would act as an agent for relaying requests that need api headers and such.