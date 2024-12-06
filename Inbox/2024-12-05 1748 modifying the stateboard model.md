
>[!tip] Created: [2024-12-05 Thu 17:48]

>[!question] Targets: 

>[!danger] Depends: 

need to have:
- multiple artifacts being edited.
- historical version pulled up from clicking on chat events
- select any thing we like, including the default messages
- stuck loop criticisms on document generation, or stateboard selections


changes to implement:
- block.tsx needs to generalized, to handle any kind of widget
- title controls need to be standardized, and configured by the block item, with a `.copy()` method to get a text version of the content, even if it isn't copy able, for example
- maybe pass the whole chat and input objects into the block object so it doesn't remake them


We need this model inserted upstream, since it might be annoying to do it multiple ways.
Maybe click on the weather icon, and it opens up a map artifact.

Faults:
- scrolling in stateboard mode does not mimick scrolling one back in chat mode
- no scroll to bottom button
- document.tsx needs 'block' removed from its args
- blocks should be a standard interface so we can supply our own ones via package import