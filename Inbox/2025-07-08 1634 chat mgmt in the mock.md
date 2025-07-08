
>[!tip] Created: [2025-07-08 Tue 16:34]

>[!question] Targets: 

>[!danger] Depends: 

Perhaps the chat store should only have to track which chat is selected, and allow this to be changed by external means.

Then when a chat is loaded, we just use a hook to pull in from artifact at that point.

New chat is just calling the napp, and then setting the new chatId as the selected one.