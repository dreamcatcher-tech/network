
>[!tip] Created: [2023-12-19 Tue 21:11]

>[!question] Targets: 

>[!danger] Depends: 

Using multiple iframes we can load up react code and other logic to be rendered in iframes with good isolation.  We can put an overlay on it so we can catch any input from the user.  We can then take a screenshot of the canvas and read it to make sure it isn't malicious ?

Or we can make those components all read only.

Or require some kind of AI audit to check for anything fishy before allowing something to be rendered.  Set some trust thresholds before it is allowed to receive input when in its rendered state.

Or, the inputs could be wired up in such a way that they can translated into chain actions, so we have complete control over them, and they are replayable.