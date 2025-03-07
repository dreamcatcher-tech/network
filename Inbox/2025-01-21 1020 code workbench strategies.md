
>[!tip] Created: [2025-01-21 Tue 10:20]

>[!question] Targets: 

>[!danger] Depends: 

We could make a code writing strategy that allowed the LLM to flop and then post-processed it to meet our requirements. The flop could be flared so that it is running multiple versions with the best being selected, as well as a strategy or architectural analysis where we use that to generate a top-level architecture that we then apply. But the point is that once the code is generated without any encumbrance, then it gets rules applied to it, like don't use the any type in TypeScript. Don't use steps and test functions unless they build upon each other. Formatting rules, linting rules, where some of these can actually be code tools that run iteration on lint errors. And so we set up these mini pipelines which can be composed on the fly as well as being static depending on the use case at hand.

To copy a UI, copy the dom elements, and provide a screenshot, and work with the bot to polish the result.  This gives very powerful copying results.

Then break the UI up into storybook components, and work on each one in isolation, which can be done well in bolt.new, since we can lock and target files.

Force the types into separate files, and tightly control the shape of the props.  Then we can force the AI to stay in its lane.

Use lock and target to keep things isolated.

Have visual testing and interaction testing to make sure that when changes occurred the output is still the same.  Periodically do a skim of the diffs of the code.

Trying to do fancy things with code to avoid typing is stupid - the LLMs make laborious or repetitious code easy, so if there are two interfaces, like a client and server interface, then just write them out twice since the tricks required to handle the subtle differences is far harder.

this seems like learning to code all over again, with a new set of heuristics, tricks and smells.  Like clean LLM code.

Dump code regularly.

Abandon chats - its faster and fresher to look at problems anew, rather than being led down yesterdays paths - if you haven't implemented something in a day, then it probably isn't worth carrying on that path.

There might be advantage to getting o1-pro to generate mutliple files at once, since they seem to have coherence of some kind ?

Absolutely need a top level plan that the human and machine are working thru.
Plan needs revamping constantly.
Human needs to debate strategy often.
Means that bot can attempt to solve things ahead of time.

Make a decision tree that tracks everything.
Have an overwatch that makes decisions based on cost, where it is trying to avoid wasteful work, based on how much money it has left and what it was told to do.
Then these trees can be shared amongst people, so we can all be poking at it.
Plus we can see usage info streaming in, so we know hot paths - like coverage, but for heat.

In a folder, start with one file, get it super right, and then use it as an example for the next folder.  Doing things like this amplifies the effort put in to each file along the way, resulting in far higher resultant quality for less.

Code changes seem to ripple thru - a top level command goes in, and then it walks thru the code base making changes.

Do rough cuts - don't have to inspect everything during the first pass - just trying to rapidly find the large architectural faults, then gradually refine them again and again.

Once have it tight enough that can stop changing whole files, and start doing high precision test impelementation.  Then start making changes whilst ignoring all the tests, and studying how the tests break.

Need to be able to mark blocks of code as good, and provide a high weight to changing, so the bot can see what we value, and what we like.  Should also walk thru some code we like and valued, and it should look for differences and techniques, and try to apply them so they look familiar to us.

Batching should grind over the code at night looking for small subtle improvements and running down theories for improvements.

Reverse back to the top level architecture at all times.  The top level we always know is there, so we should be able to deduce it, or try to make it, especially based on formats that have worked in the past.


Try splitting complex functionality into individual files. This will allow us to work on those files independently. The generation size is small. A key indicator that a file is too big is when large parts of the file get regenerated in response to extra functions that are requested, and the regeneration is the same. A good cut means that the features are affecting the entire file. This is some kind of an efficiency metric, like the change ratio, or the impact ratio of the file. If the score is low, the file needs to be split up. Breaking up like this also means that work can be done on each one independently, which allows good fan output.
The key seems to be first of all defining the requirements and then assigning one requirement to each file. 

