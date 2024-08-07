
>[!tip] Created: [2024-08-07 Wed 12:17]

>[!question] Targets: 

>[!danger] Depends: 

Need like a table view that shows a large number of test results in a drillable interface.
Widget should let you walk back in time, and see the versions of the source test file that changed over time.

Also show a test result that is currently running.
Can ask to rerun an individual test, which will generate a prompt with the specific info the model needs to run the specific test again, or the whole test suite, whichever you prefer.

Modify the expectations in the widget, which would create a prompt to instruct the tool to update a specific test in the markdown file, and regenerate the result.  Could populate the prompt but not hit enter, or attach to the prompt as a reference to something in a file, like a specific line, then you can enter what you want replaced verbatim, or you can get it to use its intelligence.

Trigger a modification loop, where you run the faulty tests thru the creator bot and attempt to improve the results.

Focus in on a specific test and specific expectation, where you write a transient test file, in a branch, and loop over it endlessly until you get a bot that can pass, possibly with the help of the creator bot.

Show incomplete runs with runs from any previous versions on disk, and just highlight them in a different color to show prior.