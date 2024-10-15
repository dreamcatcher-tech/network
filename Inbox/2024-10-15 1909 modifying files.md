
>[!tip] Created: [2024-10-15 Tue 19:09]

>[!question] Targets: 

>[!danger] Depends: 

By default the session shows the live files in the users home directory.
When working, it will modify these files in a branch, and the view will indicate that files have been modified.  To save is to merge, and the dirty files are PR'd against the parent.

It can also indicate when upstream changes are present, and suggest you might like to update them.

The thread that is running is indepednent, and can only be viewed by going to /proc or similar, or using the thread browser to browse the git branch. and view it that way.

It should refuse to make modifications to any running branch ?