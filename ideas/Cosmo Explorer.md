
# Cosmo Explorer

> [2022-09-12 Mon 20:44] _[[Ideas]]_ 
> Targets: [[Pulse Explorer]] 
> Depends: [[Cosmo Viewer]]

The [Cosmo Viewer](https://cosmograph.app/run/?data=https://cosmograph.app/data/184R7cFG-4lv.csv) offers GPU accelerated graph display for graphs with millions of nodes.

We should be able to make a package that can serve as a good default viewer for Pulses, but also be easily extensible to view custom data stored in Pulses.

The viewer should allow provenance tracing, and attribution forecasting and auditing.  WhatIf scenarios should be allowed.

Obsidian itself uses pixi + d3, presumably with d3 calculating the force and layout, and pixi doing the rendering.  The obsidian graph appears performant under loads of several thousand nodes, and appears to lazy load.

Probably there is some clipping choice we can make, where any node further than X hops away is not rendered in very large graphs.  We should be able to view the whole worlds knowledge graph from afar without bogging down the viewer using this technique.
