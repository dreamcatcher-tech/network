
>[!tip] Created: [2024-10-11 Fri 11:50]

>[!question] Targets: 

>[!danger] Depends: 

To test a specific agent, we should be able to mock the responses of another napp, so that given the responses, we want the behaviour of the agent under test to meet certain expectations.

The outputs of the call should be the prompts that get input for that test ?

Unsure how this would work for variations, but it could be locked down, or processed by a toolgenerator - a toolgen is a function that takes some input and then is specialized at generating variations, so you can see what it is generating so it can be mocked correctly.

We might provide specific results to the tool call.
Control what the prompt responses were so far by setting the expectations so the tool call, whilst static, is still correct for the scenario.

The tool simulator would take code outputs, and make variations of them.  So in the mocks section, we would add variations for tool call results.