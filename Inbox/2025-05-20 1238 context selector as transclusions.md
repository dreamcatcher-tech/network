
>[!tip] Created: [2025-05-20 Tue 12:38]

>[!question] Targets: 

>[!danger] Depends: 

if we add to context the ability to specify a range within a file, and optionally some transforms on the data, then a context set is actually a transclusion.

so in a document, many such things could be referenced.

the bots could use this format as the annotations format.  So when they cite something, they use a context object.

the context objects are first class objects, so they can be passed around.  They are aware of both ends, but what they point to might not be aware of them.

a document can include parts of a context object as its own content by referencing it in some way.
the context objects need to be attached to the document too, so the transclusions can be fulfilled.

knocking on Xanadu's door.

transclusion works in artifact because hash based systems are special in that they are the special case of a reference exactly specifying the totallity of the content they represent.

transclusions can be built up of other transclusions.

we can detect if some information is transcludable, which means it is context neutral.

A Transclude might include a widget, and so when you pass the Transclude around, it may also have a widget for presenting either parts of what's in that Transclude or the Transclude as a whole. The Transclude Widget can be an assemblage widget, which will pull together multiple widgets to let it view a compound Transclude in a visual way. 

user could turn off widget display, and could toggle it on and off if they liked.

passing a widget around as a transclusion is the same as data, it's just that rendering it is running it, which is no different to a document viewer.

because hyperlinks are not a thing / object, they are simply a string with no checksum, no integrity, no intelligence, and no first class means of passing data along - they do not contain any data except their face value.

make some convention for how to refer to urls in context.  can leave them as mutable, or can include a hash to a crawled snapshot of them, which we pool into a unified view, to solve the problem that the links purposefully mutate underneath us since we are viewing an application in a completely unreproducible state.

A transclusion could represent any snapshot of state.  Commits a specific repo states, but transclusions can transcend any one commit, either broader or narrow, or multiples.
An exact transclusion would be equal to a primitive, like a commit or a repo - these might be bare transclusions perhaps.  It manages relationships between multiple things, and can represent a processing pipeline too, so they can be chained together, these contexts.  The transclude represents a relationship between things.  A link then, is to point to a transclude, which in turn points to other information.

Is a stuck just a transclusion with a little snippet of a stuck in it, where the rest of the context is all about what supports the stuck.