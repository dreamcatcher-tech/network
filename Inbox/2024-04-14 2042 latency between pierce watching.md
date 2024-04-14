
>[!tip] Created: [2024-04-14 Sun 20:42]

>[!question] Targets: 

>[!danger] Depends: 

Load up a test where we cause a large number of commits to rapidly occur in an isolate, and see how long it takes server side and client side to catch up.

Suspect we might have a latency issue between splices taking too long to rebuild when watching for pierces.

We can either do parallel read calls, where the calls happen in parallel.

So the requests all get started as soon as the watch triggers, regardless of whether prior ones have stopped or not.