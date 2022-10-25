>[!tip] Created: [2022-10-20 Thu 16:01]

>[!question] Targets: 

>[!danger] Depends: 

Be able to create a link to another chain, and receive updates whenever this chain changes.  These updates may ignore [[Supervisor Tree]] updates, and notify the reducer when these updates occur.

The `@@UPDATE` action is dispatched into the reducer, and contains a single parameter: `path`.  Using `path`, the reducer is expected to use hooks to read the new pulse into execution space, and decide if it wants to change its own state or not.

Loops can be created here, and this is legitimate.  We may track these changes to stop loops propogating more than once, but it is up to the developer to prohibit.