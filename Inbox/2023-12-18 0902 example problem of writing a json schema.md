
>[!tip] Created: [2023-12-18 Mon 09:02]

>[!question] Targets: 

>[!danger] Depends: 

This is an example of a function that will make some AI calls and then also has a UI element to display that can be called on as a component in a jitter.

## The problem
If I have several object instances and I want to form a json schema out of them then I don't want a program that does that, I want an intelligence.  It should ask questions of the user for parts it doesn't have answers to, and the user should be able to refine the schema based on some chatting.

This would be provided as a set of functions the AI can call, so then exact AI is agnostic of the solution, but the tooling simply allows the examples to be run thru the schema to check its correctness.

`setSchema( schema )` validates the schema itself
`addExample( example1, example2, ... )` adds examples to the test set
`focusExample( exampleId )` focus in on a specific example

Then the AI works with the user to get the schema to a satisfactory place.
Schema editor shows changes the user is making, in a GUI format.
The example browser shows a UI of each example loaded up in the schema workbench.
Errors are highlighted and the user can address them by modifying the example or modifying the schema, or removing the example.

Extra synthetic examples can be generated to test the schema, or act as a source of random data.

So in this way the AI may need to ask a few more questions of the data and it makes it act like a form in an app that gets filled in.  This step can be translated or modified but ultimately the app should be provided in a way where it could provide its own AI which has been tested with some particular model and set of config, or it could be driven as just simply artifact calls into it with functions and UI, so that the consuming jitters can ask the AI questions of the user in any way they like.

This tool should be found in the 'app store' during a search for some kind of goal, and then if this piece matches what the user needs, it gets pulled in as the tool to use.

Apps then become more a dynamic assemblage of tools.  This is in effect what you are doing when you use your computer using more than one application plus maybe a web browser to accomplish some task.