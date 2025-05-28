
>[!tip] Created: [2025-05-27 Tue 17:01]

>[!question] Targets: 

>[!danger] Depends: 

if we send each action in transmit using an id, then the outcome can come back tagged by that id so we can unbundle it.

but transmit is always called with stream, so we know in advance if we are doing a stream call or not.

maybe message ports is best, since can be used for invoke as well as stream ?

so, for binaries, we would want to use transferrable objects to send binaries from parent to child.

structured clone is fine for now.

requests and replies need to be wrapped so the system knows which are which, so this system should be extended for handling streams ?

CHANNEL=stable DEST=$HOME/opt/cft npx -q @puppeteer/browsers install chrome@$CHANNEL --path "$DEST"