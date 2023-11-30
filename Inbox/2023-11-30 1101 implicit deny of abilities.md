
>[!tip] Created: [2023-11-30 Thu 11:01]

>[!question] Targets: 

>[!danger] Depends: 

Define a list of user stories that HAL is allowed to do.  Use retrieval to keep the filesize down.  Use the list as the means of generating tests.

Only allow features that  are in the set of tests.

Record new requests for functions if someone asked for something out of scope - help the user describe what they wanted to happen as a story.

So write a set of stories, break these into tasks, then make AI powered function calls to loop thru them as tests.  These can be broken apart into jest tests, or can be run as a test suite so the results are presented as pass or fail for the sake of quality and integration with existing tools.

This test sheet can be used to set the guardian guard rails, so HAL will never try to do anything beyond its capabilities.

Sequence is:
Dave
Goalie
Guardian
HAL
Ruler