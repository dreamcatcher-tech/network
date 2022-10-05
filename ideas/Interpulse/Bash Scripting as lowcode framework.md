Most linux users have their own little scripts they like to use, and they often import libraries of scripts that others have found useful.

In Dreamcatcher, we can make scripts easily, since all program data is stored in a filesystem like manner.  We can easily make libraries of functions that can be composed together, and we can present runtime tools that can help debug these scripts easily.  The fact we have a posix filesystem is the key here - lowcode solutions are hard because the data they work with is relational or freeform, yet every human naturally knows how a filesystem works.

Scripting in this way may be more productive and easier to learn than the drag and drop systems that appear to be making headway.  Scripting is somehow more natural, since we all learn to read.  We can make the scripts have a lot of autocomplete help and other such assistances

Many people already know how to write bash scripts, so this could be a low learning curve for them.

We could make a UI version on top of the scripting engine, if people really insist on graphical elements, but it should be scripts under the hood.

## Debugging
If the scripts were treated like docker files, and each line made some system change, then we can allow debugging by running one line at a time.  Users can roll back in history, modify a line, and then rerun it to cause a fork in the chain, so they can experiment with the output they way

## UI
We can put basic UI on top of any script and can enable some gui based input creators, which are then turned into json-schema, so can be composed together using a script.