
>[!tip] Created: [2024-01-05 Fri 15:10]

>[!question] Targets: 

>[!danger] Depends: 

make it spit out the string that it is changing, and then the replacement string.
Throw errors if the string is found in multiple places
throw errors if the new output doesn't pass formatting.

LLMs make mistakes on numbers - if a huge value is placed on a single char, you have designed your system wrong.  Instead use its verbosity to increase the certainty.

If there is an error, expand the limits the text by a few more characters, until it gets it right.

Could also provide document chunkers, where a large doc is broken down into parts that get AI summarized, so that it can walk around like a merkle tree.

## Regex for the win
The best way is to generate regex matches - it seems to be very good at that.
Can then check the resulting file with the query: is the only difference between these two that the name changed ?  Where we get the LLM to generate the question it would ask itself to check what it did.  It would then call true or false function to commit the change.

Then when displaying, we could show by default the last thing that changed in the record.  User could ask to see the last thing they changed, or ask queries about the modification times of the record.  Primarily artifact is about change control of documents, and so this git nature is fundamental to its operation - what it does within it is nearly completely free form, but the git style changes are unchangeable.