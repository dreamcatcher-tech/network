
>[!tip] Created: [2024-02-13 Tue 10:12]

>[!question] Targets: 

>[!danger] Depends: 

Making testable components, rather than these long strings of functionality that are annoying to troubleshoot.

If it could be put into blocks with defined interfaces, and each interface was exercised tightly ?

- commit a single action
- commit multiple actions
- using the .io.json file directly, short circuiting git
- call the raw isolate functions directly in tests, with a thin queue listener
- provide a test cradle that has no queue

Turning the queue off
Ensuring that promises are never detached.
Inject deps so we can orchestrate thread edge cases

And then where are we trying to get to ?
- streaming chat session with continuity
- splice streaming to watch what is happening
- hono api server
- react page that can browse the outputs
- github login
