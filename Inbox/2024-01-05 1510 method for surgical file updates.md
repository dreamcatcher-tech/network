
>[!tip] Created: [2024-01-05 Fri 15:10]

>[!question] Targets: 

>[!danger] Depends: 

make it spit out the string that it is changing, and then the replacement string.
Throw errors if the string is found in multiple places
throw errors if the new output doesn't pass formatting.

LLMs make mistakes on numbers - if a huge value is placed on a single char, you have designed your system wrong.  Instead use its verbosity to increase the certainty.

If there is an error, expand the limits the text by a few more characters, until it gets it right.

Could also provide document chunkers, where a large doc is broken down into parts that get AI summarized, so that it can walk around like a merkle tree.