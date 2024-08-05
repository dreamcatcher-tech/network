
>[!tip] Created: [2024-08-06 Tue 10:02]

>[!question] Targets: 

>[!danger] Depends: 

The issue with making the ai rewrite the whole doc each time is that it can lose structure.

Best is to break it down into component regions.
One bot can deal with the arrangement of the top level components.

Inside each component, we would suggest changes by running each chunk thru an ai to improve, in the context of the larger document, but its update window is constrainted to just the given paragraph.

It can then chat about that paragraph with the actor, and say why it thinks there should be changes, as well as provide comments higher up if it thinks other parts of the doc need to change.