Some filetypes may be able to be chunked down into a more efficient format, like code could have all the curly braces removed, could have the variables renamed to save space.  Embeddings could be used to find semantically similar functions, or the same functions after a transform to make them expressed in some kind of intermediary pseudocode, so even across languages, the same similarity and novelty scores can be applied.  Ideally we want code that isn't really that novel, and points should be awarded for transforming code into a lower novelty score.

A map would be generated that linked to each line, or at least the attribution would be carried across to the pseudocode.  Priority would be given to branching, so that attribution along each branch can be used, making redundant branches not get attribution.

Some code coverage info might be mapped over to the pseudo by writing a small script.

There might be a pseudocode that the LLMs can use to write in any language, that might also be easier for humans to reason about too.
The pseudocode generator could be entirely LLM based, and could be used to simplify the code down to an LLM parseable AST, that is sort of common between all languages.
It would reflect back on itself, and feed that in again - so:
1. "convert this to pseudocode, like this other pseudocode"
	1. pseudoCode1
2. "convert this pseudocode into javacript"
	1. generatedCode1
3. "convert {generatedCode1} into pseudocode"
	1. pseudoCode2
4. "compare {pseudoCode1} and {pseudoCode2} and list the changes required to correct 1"
	1. differences
5. loop back to step 1, but add in the differences observed to generate improved pseudocode, trying to get the differences down to something trivial.

So any questions about the tree use the embeddings to drill down the tree, and allow it to talk about the high level tree directly.  Some questions might need to apply chunking to do further calculation with the question in mind, but this would all get stored for future similar questions.  The rechunk, a question would be added to the list of top level chunking goals at the top of the tree, and then the question would be run again on the code in question.  If it had already been run, then we just look it up, otherwise generate it anew, to save processing time on questions that don't need a top level response.

Nodes can be added to the tree that represent a chunking question that has already be run on child chunks.  The LLM then may update this, or merge what the question was.  These techniques are forms of mechanical mnemonics that help the LLM think, and process things much larger than its context window.

Can use a cheaper model along with spot checking using gpt4 to ensure things are still working good.  If errors are discovered in the logic, these get reported back to the makers for inspection.