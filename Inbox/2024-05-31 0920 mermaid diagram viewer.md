
>[!tip] Created: [2024-05-31 Fri 09:20]

>[!question] Targets: 

>[!danger] Depends: 

This needs some looping, since the diagram might not render correctly.
We would need to try parse the code in mermaid, and feed back errors into the chart, whilst continually appraising if it meeds the instructions.

Then the human should be able to chat and manipulate the generated charts.

So long as it has this check test, and the diagram is treated separately, we can display a nice UI for logic to the user.

So the [[2024-04-30 1642 spec reconciler for security of an application|spec app]] can use sequence diagrams based on the spec of the app, and can ensure these render correctly and represent each step accurately.

Errors could actually be detected in the UI and sent back up to the model ?

Seems best if the error parsing loop runs inside the model.

Error loops will clean themselves up, and delete the messages that it went thru to fix the error ? don't want to present this to the user.  Or we just tag the message so the user doesn't see it, but keep it in thread so it doesn't happen again ?

Errors should get included in our fine tuning data.