
>[!tip] Created: [2025-05-10 Sat 15:48]

>[!question] Targets: 

>[!danger] Depends: 

Screenshots provide significant context. We should allow widgets to indicate that certain areas of their display are private. This would cause the div element to be blacked out with a privacy screen if a screenshot was taken unless the override privacy was explicitly opted into. 

The screenshot should also include the divs, and we can modify those divs to patch privacy holes or anything so that the context is still useful. 

Ideally, though, we want to get to a repeatable UI so that we only need to be aware of the current state and the UI should be fully reproducible. This means we probably want to snap the Zustand store so that the JSON object it represents can be passed up as well. The bots can run experiments using a headless UI to see how they can get the state to change to how they want it. This is very useful in the case of feedbacked UI development where the bots act like the tester as well as the author.

These closed-loop feedback tools will probably become quite expensive. 

Agent feedback development. We strive to make little stories or snippets or test functions or features. From this it could generate demonstration documentation, full documentation, help files, but also have a series of tests. If one of those was failing, it would need to make sure that the intent was not to actually remove that feature in which case it would rewrite its testing stories. 

Once it had the stories in a standard form, it could execute on them in parallel and give feedback like a normal test would, along with snapshots of the state of the screen at a specific place. 