
>[!tip] Created: [2024-10-02 Wed 10:21]

>[!question] Targets: 

>[!danger] Depends: 

Take a closer look at the instruction being given to the model, when it has an image in its history. This would cause the model to execute a tool call, that would load up the image, or cause the image to be entered into the thread in high definition. For continuation in the next prompt. So typically the image would simply be loaded in low res, so that the bot knows what you're talking about. But if its focus is shifted to that message, then we would use the expensive high definition version to assess it. 

Possibly at the start we can just use the high definition version all the time, and see what type of performance gains we get from switching to lower res later.