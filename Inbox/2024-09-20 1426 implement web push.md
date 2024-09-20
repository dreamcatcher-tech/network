
>[!tip] Created: [2024-09-20 Fri 14:26]

>[!question] Targets: 

>[!danger] Depends: 

Allows subscriptions to be low power and to stop costing our edge isolates to need to be online.

When a change occurs, the repo checks if there are any listeners written to the db, and if so, triggers a notification to them.

These notificaitons batch over 2min intervals, so that any clients should use the short term liveliness checks, and switch to push if nothing of interest happens.

https://web.dev/articles/push-notifications-web-push-protocol