
>[!tip] Created: [2024-12-08 Sun 11:10]

>[!question] Targets: 

>[!danger] Depends: 

If the chat context widget has history in it, what does it mean to show the diff of it ?

Since the widgets are live, it doesn't make any sense to show a diff version ?
Diff view would show the raw json underneath, if this widget allowed itself to be represented like that.

Would could show a behind the scenes view that could be turned on, or we could just show the item at that point in time.

Might want to show a prior version, but without a diff view, there is not comparison, it just shows as the current version using the default display widget.

But we need our own format for data, too ?
If we are going to allow any widget to be displayed, it should have some kind of a data type of schema for its data to be moved in and out ?

That is probably going to be a zod schema, and it should by typed ?

Or, since nothing but our object cares about the types and structure of the data it is being asked to view.
Would need to pass versions of the data, too, so the widget would need some kind of migrate script or export to move the data between versions ?

Sometimes we would want to leverage the history strongly, like 

So the widget needs to be able to trigger when it wants to move to a specific version number.
Version numbers below zero mean was changed outside of this chant.

BUT what about changes that occur in parallel DURING this chat ?
These should trigger and show in the chat somehow ?