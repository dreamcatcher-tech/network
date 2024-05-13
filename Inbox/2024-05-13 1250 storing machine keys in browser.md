
>[!tip] Created: [2024-05-13 Mon 12:50]

>[!question] Targets: 

>[!danger] Depends: 

SessionStorage stores the exact session pid so that when you restart the tab, you get the experience of the existing session popping up there.  We might store the last known data there as well, for instant reload while we reload in the background.

localStorage needs to be used to store or generate the keys in the background.

The engine only ever provisions on Deno, not in the browser, so it can access env vars.