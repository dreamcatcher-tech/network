
>[!tip] Created: [2024-12-21 Sat 12:20]

>[!question] Targets: 

>[!danger] Depends: 

The db holds what the reporting config of a call is, like which calls, and where the webrtc endpoint is.

So we only transmit what the user is looking at.

The call is only active while the user is engaging with the streaming, so the costs stay low.

We then push the shared state messages to the webrtc endpoint, which is then broadcast out to all participants.