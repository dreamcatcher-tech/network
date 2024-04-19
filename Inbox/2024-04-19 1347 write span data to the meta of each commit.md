
>[!tip] Created: [2024-04-19 Fri 13:47]

>[!question] Targets: 

>[!danger] Depends: 

Each time a commit was done, or an execution was done, we could attach some metadata to it, which would include computed spans covering different actions.

Turn those into mermaid charts for viewing, or just attach the mermaid direct to the commit object.

Depending on the config in .io.json, we can also attach higher stats, like queue length, cost, processing delay - anything else that would be shown in the commit instance, or any of the environment stats which are available during processing.

consequence tag that starts with the ulid of the pierce that initiated it, so we can do accumulated spans for the whole pierce.

When triggering something based on commit, we need to attach multiple items as the initiator.

So basically each action, we can see the cost and total changes caused by it.
Also the spans that show how much time each stage took to complete.

Ultimately want to have something like chrome network dev tools where you can click on a span and see more details about it.

Use horizontal candlesticks to show combined stats about many different executions.

Maybe show all executions of a specific isolate, to view as that execution directly ?

Generate a seqeunce diagram to view interactions between chains.
Check these diagrams against the spec to ensure correct operation looking at large numbers of executions.