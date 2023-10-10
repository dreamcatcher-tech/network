
>[!tip] Created: [2023-10-10 Tue 21:36]

>[!question] Targets: 

>[!danger] Depends: 

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
