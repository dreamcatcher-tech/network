
>[!tip] Created: [2023-11-30 Thu 11:01]

>[!question] Targets: 

>[!danger] Depends: 

Define a list of user stories that HAL is allowed to do.  Use retrieval to keep the filesize down.  Use the list as the means of generating tests.

Only allow features that  are in the set of tests.

Record new requests for functions if someone asked for something out of scope - help the user describe what they wanted to happen as a story.

So write a set of stories, break these into tasks, then make AI powered function calls to loop thru them as tests.  These can be broken apart into jest tests, or can be run as a test suite so the results are presented as pass or fail for the sake of quality and integration with existing tools.

This test sheet can be used to set the guardian guard rails, so HAL will never try to do anything beyond its capabilities.  We can synthetically generate extra tests to ensure a broad range of similar inputs has the same result.  We can atomize the list and test all combinations of the tests, so this can become the fuzzing tool of the system.

Nested goals where top level goals can be set.

Arrangement is that HAL has a child named 'goalie' and 'ruler' which represent collections of goals and rules, and also include the AINode coding to interact with AI resources.

Add a goal, add a rule

? Should a goal be related to a path, or is the path merely where HAL is, in pursuit of this goal ?

When HAL browses around, whatever node it finds has its functions loaded up as one of the run messages

Retrieval for the goals, where all the goals are submitted in a document, which gets chunked.
This part is used to determine 

Stateboard should display whatever is at the path.  If we supply multiple paths, then multiple objects will be displayed.  If the user interacted with the stateboard, this is sent in with the next prompt, and will have some link back to recall how the stateboard was when it was sent in.

So there is only one thread per goal, the thread is run by HAL, and may call functions across the complex.  HAL specializes in navigating around the complex, and learning what capabilities it has.  Each run, the API tools available at each location are loaded onto the chain, as well as a list of rules are input to remind HAL how to respond.

Some rules might be segmented by goal type perhaps.

At each point HAL is called, it is given the extra tools at that point, and is re-prompted with the current WD, and the set of rules it needs to follow.
### Running a goal check
Pass in the current prompt
Pass in all prior prompts 
Generate a summary of the goal so far, possibly updating the goal
Start with putting in all current goals, then later upload a file to get chunked ?
Update the goal and description.
Break apart the prompt if it belongs in multiple goal threads.
create new goals.
switch to prior goal if needed
Create or load the thread that the goalie chose
push the latest message from Dave onto this

Goal status: new, in progress, unachievable, resolved, paused, obsoleted

Sequence is:
Dave
Goalie - sets up which thread this message belongs in, based on the goal
Guardian - checks any new goals if the goals have been tested enough to proceed
HAL - drives the blockchain and learns about functions it can do.  May be aided by documentation, can discover it if it is well written enough.
Ruler - checks the response, and may cause HAL to reconsider if it finds fault.