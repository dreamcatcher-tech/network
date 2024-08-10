
>[!tip] Created: [2024-08-10 Sat 12:18]

>[!question] Targets: 

>[!danger] Depends: 

Artifact should not test actual AI calls unless it is testing HAL.
So internal scripts should use an AI mock that gives back reasonable results.

Make a react storybook mock that also gives back scripted responses so we can see how things progress over time ?

Might be useful for making stateboard components to have a bit more control over that.

The quality of the ai responses is not artifacts purpose.
This lets us test malformed replies, and a range of error responses.