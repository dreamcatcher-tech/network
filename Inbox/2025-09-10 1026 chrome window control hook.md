
>[!tip] Created: [2025-09-10 Wed 10:26]

>[!question] Targets: 

>[!danger] Depends: 

if we turn the chrome extension into an mcp server, then we can:
1. troubleshoot remotely, with live connection
2. replay the state that we knew about to see how we should have reacted differently

so if it is on some os that we don't have on hand, like macos, we can have the user join, and we can see inside what all the stats coming from the extension are.

so if we have all the programmatic hooks available, then we can experiment to see what gives the good results.

Then we basically change the prompt, or some of the code snippets to match.

the idea is that, because the actions are LLM driven, we don't need code to make things happen, so bugs are really just, solvable by the LLM having the real thing to play with as it experiments around to find a good placement, like a good window layout algo.

it can narrow down problematic funciton calls, or other nuances, and then call these out so that the decision making llm, or the code it makes, knows.

so we are updaating only server side code, since all the operations run server side, so client side just stays ultra thin, where it's just mcp'ing the user environment, like browser window placement.