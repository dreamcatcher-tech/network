
>[!tip] Created: [2024-08-09 Fri 10:42]

>[!question] Targets: 

>[!danger] Depends: 

How can a test that drives the stateboard or does individual document editing be tested ?
Need to make some assertions about the stateboard state too.

How can the test drive be viewed while it is running, so we can see the interactions live, as they are happening, in another window ?

make the test viewer be able to switch stateboard focus whenever the test being run changes.
Stateboard gets set up as a hal viewer widget, wrapped in a thread navigator or something ? or a git commit navigator ? so you can tick back and forwards and see how the thing progressed.
The navigator might be only for message changes rather than every message.

Basically the test writes a focus id in the tps report, and the widget can watch this.
Give it a button "tip" where it fast forwards on to that tip.

Stateboard stacks and wrappers.