
>[!tip] Created: [2023-12-19 Tue 09:26]

>[!question] Targets: 

>[!danger] Depends: 

If we format the helps as something executable, then we could run the scripts in a sandbox and assess the result and the cost of execution.  Allows us to run untrusted code instantly, and if we like the result, use it.  Have a pattern of exploration then once the full discourse is ready, the net changes are presented to Dave to click a button to commit the changes.

statechart workflow for the whole stuckloop with key parts as modules.

Special permissions like unfettered network access would need user approval.

Alternatively we could make the helps just be plain language, and get interpreted, and allow the LLM to execute multiple commands simultaneously.

Helps could include what models they had been tested on, and could run on gpt3.5 for speed and cheapness.

Could have sections, like set of instructions, checks for 'do you have a crm installed'

Nesting would be "do you have  crm installed ?" if not, then you need to use the search for CRM help, which guides HAL thru making a CRM decision.  Or it could be if you have multiple CRMs installed, you need to pick which one you mean.

"Ensure you have a crm installed"

There appears some format that helps have that the AI can generate, humans can read, and the AI can consume.  AI should be able to deduce what the help is, after it has been walked thru the process by a human, to reduce down what was required.

List of requirements, so we can provide the set of commands and environment conditions that are required.  The checklist is there so that the bot can go off and solve these problems first if needed.
eg: I want to create a schedule.  Get the day required, check all customers for this day are routed.
So the routing requirement would trigger if not everything was in order before we started, so we'd walk thru how to solve that problem with the user.