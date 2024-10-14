
>[!tip] Created: [2024-10-10 Thu 16:38]

>[!question] Targets: 

>[!danger] Depends: 

If we make a global that we hook with a symbol, then attach a symbol to the pierce, or some kind of ID, then the next result that comes in with that mock id would call the mock function we supplied ?

This should actually be done with our actorId, so we can tell it to mock a given actorId ?

Or, even a given backchatId if we knew the source of the action we were parsing ?

Then we can just copy and store the results so we can get back reliable results when we want them.

Should write this to disk automatically and used the saved version by default, unless they get manually deleted.

Periodically we would remove all the snapshot files so they cannot be seen and we refresh them all.

Or set a global flag to compare them and ensure the results are equivalent still.

Or use pollyjs to do the request recording and replay ?

## custom mocker

If we hook the completions logic, we can indicate that we want to build up some mocks based on filename.

Get the test filename, and the test name, and store the mocks inside this file in a json object.  List the responses in sequence order.

? concurrent calls ?  PID should elminate this completely.

If there is not a response in the list, then do a real call and store the result.

Some tests do not need a recorder, they can simply stack some responses ready for the next call.

Then when there is teardown, the mock is released.  Error if a mock was set and then its supply was exhausted ?

