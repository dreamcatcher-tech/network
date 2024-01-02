
>[!tip] Created: [2024-01-02 Tue 18:34]

>[!question] Targets: 

>[!danger] Depends: 

Some items, like when the next possible pickup is, need to be calculated on the fly.

We should show the base markdown first, and then in the template it would highlight dynamic fields and draw these as calculating while the AI quickly goes and works out what we mean.

If we cared enough, we could write some code in there to calculate it, but this should never really be done as code requires maintenance and can behave strangely.  Pure AI can be fixed by anyone.

Use a slug to be able to swap out the dynamic field rapidly in ram.

Pass back the selection in a stateboard item so that it gets included in the next prompt in plain text

Date picker for schedules can be shown in chat, and creates a new message each selection, erasing the last from history each time.  Stateboards shows when a dynamic part is rerendering by the AI.