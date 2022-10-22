>[!tip] Created: [2022-10-21 Fri 15:13]

>[!question] Targets: 

>[!danger] Depends: 

Based on what the covenant in a chain is, we should be able to switch out what to render.

If the developers provide their own react components for their covenants, then we can render those for their covenants too.  Devs can also provide overrides for covenants if they aren't in the default library, or do not come with the covenant.

Untrusted code could be run in an iFrame and inserted into the DOM.  

We may be able to detect transparency, and simply draw pixels on our page, so a seamless UI can be presented out of components whose code we do not trust and have to render in an iFrame.

Components from the same source could run in their own iFrame, which each one receiving the container from where the parent page would like them to be.