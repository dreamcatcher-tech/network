
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

I should be able to edit multiple threads in the message stream, so I can be forking off in serveral directions with the info I have.  

I need to be able to have confidence that the info I have isn't a one off, that it has been run multiple times already and I'm looking at the average response.  Also my question should have been reformulated and so I know it always answered best.

So, one, we should have a set of templates for commonly used things that we want to make, so we can say what to start with. So you, like, take the XYZ thing from the shelf and mush it in with this other thing here. And then you keep building it up like that.  This would include strategies for how to approach things, and could have several strategies, which are tried in parallel.

Before making a change, it should declare what files are to be changed, what libs should be included, and it should have to deliberate what files to import.

It should be looking to split files apart for modularity.  It could propose some cuts and then you work together to discuss why they cuts are being made.

So this becomes like a toolbox where you can apply different tools for different effect.

Making a tool call that does a special trick and pulls in the previous chat that caused the tool call to be made. Taking advantage of cache tokens, carrying in the entire context, and performing one very narrow, narrow task. Which is to do generation of one single file.  Allows faster generation with more focused output, and can have strategies that loop over the end result to make it of high quality and adherence.

Recognize patterns, like remote API, and let the user configure preferences for what type of pattern they prefer.  So if you want a specificy type of api or server framework, the preset prompts would ensure that this pattern was followed well.

It might be easier to generate one file at a time, rather than multiple concurrent files that are meant to work together.  Also doing rules during generation is bad - we should let it generate things with very few constraints, and only then should we shape it into a format, style or other thing that we require.  Reducing the size of the leaps we require of the machine is good - many small steps will have superior quality to few large steps.

Always try make interfaces within the system, so if you are going to make api calls, you should have an object that controls these, which allows you to mock them out nicely.
So we might make a front end library that exports the api calls of the system, and then have an interface for it that is passed in, along with a mock, to a front end generator, like v0.
In v0, we could provide the interface to the web app part of things which ran the web service.

it needs to keep track of intents or specs, so as you go, it should be jotting down things that are important to you, and as soon as it detects a conflict, it should immediately stop and clarify.

Make a file with all the interfaces of all the code in the system and the docs to describe them.
This guides the code generation better.
If the flop is wrong, then you need to steer it incrementally.

Take in all the conversaionts, or at least the transcriptions that you put in to v0 or into any tool, like our own platform, and try to elicit a spec out each time, so try to keep a background set of laws or assertions that you have made.  It should think about these, and pad them out with things it thinks you should have in there as rules, and also it calls your up on any contradictions.

This is the background model of the bot, and it should be treated specially by the bot, and fed in as part of its sysprompt every time.  It should always be able to call the tool to update these rules.  In this way, you can say whatever you want, and then it will build up a stable view, so that when it does tasks, it has these rules in mind.

What we should do is ask for a summary or a README of the API to be generated, which we can use as a render to detect faults within it. And once we're happy with it and it's described purpose, then we can use this README file as part of what gets concatenated in with the API files. And so we can have a more higher chance of the machine understanding the meaning of what work we're trying to achieve. Plus we can ask it if it makes sense and to ask questions