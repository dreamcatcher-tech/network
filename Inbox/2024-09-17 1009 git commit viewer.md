
>[!tip] Created: [2024-09-17 Tue 10:09]

>[!question] Targets: 

>[!danger] Depends: 

Can make just unordered list items, and then nest them ?

This could be rendered in markdown too, making it simpler to display ?

How would the diff viewer work ? how to select the files for comparison ?  Need to be able to select multiple files.

If the selection was never wiped by just navigating away, then we could hold multiple files across multiple branches.

Branch explorer would link to the commit graph navigation, and allow rapid branch display.  Branch display would be in a chonky display.

Stack the views for branches, commits, so they can be composed any way we like.
When stacked, exiting out of one takes you up to the next higher dimension.
Or, if they are layed out on the same page, we can click around and see them load up.

Can provide a different frame that can be used by the AI to display different degrees of navigation

Supply each view type as a standalone widget, and then compose them in frames as required.

Or, an api can be locked to some config and shown next to some other config.
This would be set by the AI that laid out the stateboard, depending on the layout.

Toggle tracking, in case the tip moves forwards and you want to stay in sync with it.

Branches by convention can trace their parents by their names.  At any given spot, we can view the children directly.
So the commits we want, are only those on the path of the current branch  or the target branch ?

"update this repo"
- gitbot starts up
- walks the branches up to the root
- if it can merge them in, it does so, coming back down the stack
- Might ask for confirmation when pulling into the actor repo, since will change everything
	- memory would cause this to be done regardless, if that's how you wanted things

## Story: how to PR against parent
Select the branch you want  to PR against, and select the branch you want to PR from.
The git agent will be triggered and knows how to initiate these PRs.