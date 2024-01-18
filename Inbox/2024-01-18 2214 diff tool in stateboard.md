
>[!tip] Created: [2024-01-18 Thu 22:14]

>[!question] Targets: 

>[!danger] Depends: 

Simple component that is diff aware.

Shows the merged diff, but has tabs so you can see the original and the current or turn off the diff view.  The LLM could render the component with any of these options pre configured, since it would pass in the props to be rendered.

"You are a react component render, and here the props you get to pass"

side by side diff view, if there is enough space.

Can do N-way diff, so if we were reconciling a record, show the differences between all of them.

This nway diff could show all the history of the file forever, at all version states, with all the reasons and traces of who changed it.

Can have a resultant that failed to reach agreement between all parties.

The diffs can be controlled by the AI to be scoped, like only show changes on a particular region, or changes of a particular type, filtered by some rules.  This would use the commit filtration and then pass that to the diff renderer.

zoom in on a particular block of text, and so from then on only changes happen on that area.