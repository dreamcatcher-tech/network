
>[!tip] Created: [2025-01-19 Sun 09:53]

>[!question] Targets: 

>[!danger] Depends: 

I should be able to state a goal, or an output, or an expectation of a prompt, chuck in either none or some examples of what I think works, and then have the machine attempt to make prompts that will achieve what I want. These should be good for modifications of prompts too, where I say, you know, this thing works, but here's the issues. And then the bot theorizes about how it might improve the outcome, can build on more advanced non-overlapping features, like it might suggest fine-tuning, or a different model, or some other approach. But the idea is that we should be able to, because we can detect the fault or state the fault very quickly, the speed of our ability to identify and state faults should be what is the limiting speed of the system evolution, not the delay in implementing and testing different theories. You should be able to just say what it is, and then almost within the next second you have back a working answer.

One pattern is to automate a tight prompt-engineering feedback loop:

1. **Capture goal and constraints**
    
    - A data structure holds what the user wants (e.g. text style, model desired, constraints on format).
2. **Generate a candidate prompt**
    
    - Use a few known templates plus a rules-based approach to fill placeholders (e.g. style constraints, usage examples).
3. **Test quickly**
    
    - Send the candidate prompt to a language model.
    - Compare the response against a set of simple acceptance criteria (e.g. correct length, correct style, presence/absence of certain text).
4. **Identify faults**
    
    - Use a parser or a small classification model to detect if the output violates constraints.
    - Collect reasons (e.g. “Contains undesired text snippet” or “Output style is informal when formal was requested”).
5. **Refine the prompt**
    
    - Make small changes to placeholders, instructions, or tone.
    - If repeated failures occur, suggest more advanced techniques (fine-tuning, a different model, external knowledge).
6. **Iterate instantly**
    
    - Because the test is short and automated, each modification can be retested in seconds, letting you iterate as fast as you can describe issues.

This structure can be extended with logging of all attempts and outcomes, so the system can learn which prompt patterns work best in various contexts.