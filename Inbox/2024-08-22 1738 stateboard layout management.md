
>[!tip] Created: [2024-08-22 Thu 17:38]

>[!question] Targets: 

>[!danger] Depends: 

In a narrow screen, have a small button at the top right of the prompt, which can be used to show the stateboard.

It cannot be in the same vertical dimension as the chat thread, since the thread is supposed to feel infinite.

Could put it underneath the prompt, but then it feels like it is fighting for space.

On a big screen, it should go to the right hand side.

It cannot go above, or split the screen, since that messes with the scrolling.

The thread needs to be its own separate thing, so that the prompt always is present.
Make the message thread show always with the scrollbars. 
The prompt becomes always visible, including a stop button.

But if this happens, then the scroll bars are separate.

What does the stateboard do when backchat pops up ?
Browse your chats in a panel ?
Should be the same, but just inside of the backchat dialog.

In the space that the selection items go, there is a button for making the stateboard take over the view.
If your screen is too small, this button is present, otherwise it shows up to the right of the chat, and only when requested.

Some widgets would be narrow, and some would allow scrolling in them ?

Pop up the stateboard as a modal that can be dismissed which covers up the messages view ?
switch out the messages view with stateboard.
Input button shows the selections and also the stateboard button which changes to a messages button
Use window scrolling if this is too cramped.

If you select a prior stateboard, the button will change to say that you selected this message, but also that you can view this stateboard

Store topic summaries with stateboard so that stateboards can be fetched by NL.

If the user uploads a file or large text snippet, then they click on it, the stateboard should show what they had.  But how would they go back to the stateboard they were last on ?  Do we now need a button to navigate it ?
Or we could show this as a modal, as it is the uploaded thing, and not yet "in" the system ?
Modals occur for the file selector, so a modal viewer seems valid ?

If an isolate call returns a file, then that file should be browseable.  so in the UI, if you click on the tool call that shows the diffs, the stateboard should show the contents of that file.

If you deselect that from the messages list, the stateboard would go back to however it was before.  Or just do nothing for now, and figure out the best usage later.