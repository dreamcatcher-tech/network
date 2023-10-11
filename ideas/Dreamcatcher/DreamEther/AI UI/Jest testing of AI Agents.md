
>[!tip] Created: [2023-10-10 Tue 21:36]

>[!question] Targets: 

>[!danger] Depends: 

Provide a set of prompts and responses, and get the model to respond.
Fills out a TPS report card with all the outputs.

Jest test where the appraisal model can be different from the model under test. Can also have the appraiser suggest more tests and proceed to execute them.  It can list these tests under synthetic tests, and if the core tests are updated, the synthetic tests would change.

Would have a api call and some kind of cost output, as well as time to respond.
Some tests can be run on all outputs, such as 'no swear words' or other types of global objectives.

If these jobs could be treated like react components, then they could even serve to be rendered to the user to allow them to interact.  So it uses the server side rendering or cli rendering to constrain the logic neatly in components, and then also makes it human interactable on some other website.

Chat with your test results to interrogate further.
Update the tests using the natural language.

Ask for a memory dump from the provided solution to describe how it got to its results.  This will need to be in a standard format of some kind.

Example of some test cases:
1. Asks for high level briefing of what the Dreamcatcher is.
	1. Returns a summary of the information from Dreamcatcher.land
2. Asks something out of scope.
	1. Says no nicely.
3. Asks for what needs to be done next.
	1. Returns the next step in the process, based on the context of where you are.
4. Asks for what can and can’t be asked.
	1. Asks for background as to what knowledge bases are being used.

Use the LLM to generate tests, or pass in a verbatim test.
Be able to update the test spec file using the LLM.  Use a strict format, and check that it runs correctly.

Roll ups of a per file, or per chunk of a file that gpt rolls up shares and reasoning into every more summarized points.  To drill down, it changes its scope and loads up what it said at each point and begins its defense from there.

Attribution for for LLM type prompting should be different again, and should be much easier since it is less input and far more deleted things.  Then we use the agent codepath calculation somehow ?


Matrix testing where different models are used in the same test.

Graph showing the performance growth over time.  Could generate the graph using gpt as the outputer where it stores a file, and then modifies an svg to show the graph.

Swarm enabled where multiple people can submit tests for things they expect to happen to the tool.  The LLM can pass these thru initially by assessing if it sounds reasonable that the tool should be able to do that.  If so, then it will create a test for this type of thing.  These tests can be processed for finding conflicts.

Be able to make the LLMs call functions to write to disk, or log a bug.

Make a gui so that any time someone asks to see what the tests were, this ui component pops up that can be used to fluidly show them the status of the tests going on.

Recognize customer complaints about the bot, and show it has been filed, and in some cases if this passes the testing, show how this is now included in the AI and so won't happen again, and you will receive some attribution for your efforts, thanks.

LLMs as actors in the dreamcatcher, with adversarial goals.  Lets them choose what they want to do next, with some goals.

So the rollup would be like a merkle tree, and whenever code runs, we use the merkle tree to find the chunk that has the value in it that we were after.  It then sums up all the value measurements for each chunk, to roll up for a final value ?

Hit counts from coverage are interpretted too.  Its a better than nothing demo, so meant to be iterated upon, with people using the chat interface to submit issues, questions, and new ideas.

Make a format that is author, hit count, branch missed, code, then do chunking to make it fit in ram, and make it be loaded as context when any questions occur, along with rollup summaries of reasoning and shares.

The value to extract is the interaction between humans and AI that needs to be captured.

Elide a fault by the user talking about things that it doesn't understand.
Can maybe score each response, and file bugs based on it.