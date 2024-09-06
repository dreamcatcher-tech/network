
>[!tip] Created: [2024-09-06 Fri 23:06]

>[!question] Targets: 

>[!danger] Depends: 

The player updates the prompt with the current position of play, so next time there is a prompt put in, it will be aware of the statebaord changes.

The function call to display it is the full api object, which just gets applied to the frame.

Clicking on clips can cause the player to skip to places rapidly ?  We would intercept the youtube links, and if the stateboard was playing, we would rewrite these links to intercept the click and show it on the widget, otherwise open the url.

Maybe add a youtube search function in there too.