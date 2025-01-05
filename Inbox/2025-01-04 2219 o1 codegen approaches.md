
>[!tip] Created: [2025-01-04 Sat 22:19]

>[!question] Targets: 

>[!danger] Depends: 

Select from a bunch of components as to which ones are relevant.  Turn that into a glob, then include that in a concat.

Generate instructions for the cursor composer to implement when changing one project into another.

Always move from working state to working state.

Have standard things you want to do, like turn this example into this other thing, or implement this spec from scratch and then the platform tries different approaches, like getting an example.

It should be able to brainstorm about how to get solutions, like go find examples.

Work in layers, where the features we want will be built upon a foundation that needs to be well reasoned, well specified, and the requirements at tests laid out so it has flexibility for extension but will still remain stable.

It might be that when implementing the next layer, we do that layer, and then rerun the base layer as the changes are reconcilled between the two.

We should seek to insolate changes to a particular folder in the project too, since the smaller change radius the better.

Get it to have a set of strategies for working with different frameworks.  Like with deno, get it to seek and confirm libraries it wants first, and possibly generate the docs from the source of the latest version if needed.  Then go ahead and do the implementation, using the latest versions of all the modules, and having done a search for recent releases.

Seems to be best at finding a good simple architecture first - gets hard when the architecture is wrong.  Asking it for a fresh implementation from scratch, or based on some simple examples gives good results, and good direction.  The machine has a sort of instinct, or a way of doing things that it can't explain but that is often good, but regardless of quality, it is hard to fight against the instinct or the 'flop' of the LLM.  So you need an architecture that flops well.

Putting format inhibits logical correctness - let it flop with its chosen math format, then do a translation to something like github compatible markdown.

Try having all the files in context, and then can ask questions and tasks, and first thing it does is narrow the context, and then start to grind away.