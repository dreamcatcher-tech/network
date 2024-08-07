
>[!tip] Created: [2024-08-06 Tue 10:31]

>[!question] Targets: 

>[!danger] Depends: 

If I want to check there is a new repo, using some command, we should be able to run a prompt directly ?

What about using the files agent to read something ?
Or should it be just a prompt, like any other prompt ?

Just the test suite itself seems to have a large feature list of things that it needs.

So we should have some document that was kept up to date based on chatting with it, and mentioning new features.  The features should be reconciled.

How to test the progress towards these features ?
If they were captured in a test specification, then we can generate green lights for progress towards them.

? how to show individual runs ? need a way to easily browse these and see how they look.
What to write into the spec file - update it automatically with the last run ?
Be able say not to update the spec file.
Shouldn't write to the spec file, but should generate a results file, which then links to individual run files
Generate a dashboard file that shows all of the tests that we ran.

Show the generated prompts by just asking the generator to run, and seeing what the results are.
Testing the generator bot should have some good examples.

Best way is use the AI as part of the prompt, so it runs the prompt and then generates some special artifacts to allow us to check expectations without doing any prompting work