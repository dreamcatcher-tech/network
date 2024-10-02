
>[!tip] Created: [2024-10-02 Wed 17:18]

>[!question] Targets: 

>[!danger] Depends: 

Perhaps we can do reasoning testing on user interfaces where the specification for what the interface should do is laid out and then a bot is able to call functions that enable it to do key presses, tabs, focus events, and other types of things. The focus events should be controllable by the named elements on the screen that relates to the requirements and so if we have some kind of web driver that lets the bot make a function call it should be able to generate interactions and expectations of what it could see. It could then take the image of the element and process that using vision. Now if it knew all that it should be able to generate a set of tests that would be fairly exhaustive of all the functionality but minimal in footprint. Those tests can be used as a benchmark of the compliance with the requirements that the system has which sort of implies that the test could be generated almost entirely from the requirements document. They would also include some best practice types of thorough tests like page load time, long extended usage, random clicking, viewing on small devices.