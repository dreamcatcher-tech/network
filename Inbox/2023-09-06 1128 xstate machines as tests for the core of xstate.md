
>[!tip] Created: [2023-09-06 Wed 11:28]

>[!question] Targets: 

>[!danger] Depends: 

Each time a user submits a behaviour that they think should be happening, but isn't, we should be able to distill this down to an example machine, and that machine should be used as a test case to verify each release.

Also searching by state machine nearness.  If you make a simple state machine, then it will bring up  machines and bug reports that are similar, and ones that have sections that are similar, then highlight the area that caused it to show up in your search.

All state machines should be part of a global space, so we should amalgamate everything from the tests cases and other things, which makes a searchable database.  State machines can be fingerprinted and decomposed, since there are a finite list of options available for each state, and there are common patterns that occur often.

Then we can show what functions of the core get used the most, since those are state machines too, so we can see which runs run white hot, vs those that hardly get used at all.

Then if an AI could generate state machines from plain text, you could highlight any section of the documentation and ask for a state machine to be constructed that demonstrated what the text was about.

Stately.ai should take a machine and be connected to a vscode instance and be able to run multiple transitions in parallel with huge compute resources so you can know for sure that your system works correctly.

If the state chart could show how many times a given state multiplied each transition into it, then you can get rapid visual feedback on the design, to know if you need to apply limits, or understand the impact of a given change.

The calculator should ripple thru - hit a certain adjacency count then move on, rather than exhausting each level, so we can get a guaranteed conclusion time based on the number of states there are.  Detection of unlimited actions should be highlighted, since we should be able to detect certain kinds of loops that run, and show how they are increasing at, say, 1,000 without any further transitions being a sign.