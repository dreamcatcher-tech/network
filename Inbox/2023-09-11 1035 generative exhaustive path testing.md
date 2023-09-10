
>[!tip] Created: [2023-09-11 Mon 10:35]

>[!question] Targets: 

>[!danger] Depends: 

Make modifications to the statechart using AI that can ensure the shortest path testing is done without all the hassle, and then selling the service to execute your tests, no matter how large.

So the tool helps get the path count down, and explains areas that create issues, like unlimited paths and helps you fix them.  Gives live feedback on the total number of paths and the number of paths that each substate caused to happen.

Each time a change occurs, we can fire up all the tests in massive parallelism, to grind thru to the end and show which tests had errors.

If you provide a `snapshot()` function in your SUT, then we can get thru all the tests quicker.

Then you can browse all paths by simply walking a path thru the charge, and a panel will scope down which tests matched that path.  Then you can restore the snapshot and re-walk the test to understand more about why it failed.  Can pin some paths, and allow vairance in each part of the path, so that you can arrive at a given state any way, but after that you want a fixed set of actions.  

Show the number of paths available at each point in the chain.  Split the chain where you want to deal with an offshoot differently.  Lets you visually map out the flows rather than having every single flow.  Flow explorer.  Allows kinder wants to navigate and play with the system to enhance understanding a feeling of safe control over the system.

This is a great use of compute for us, since it requires a highly parallel js environment, and one that can be replayed, since the chains let people roll back to a given state and replay what is going on.

Could we model the state machine as chains ?  So when there is a branch, we are making a fork in the chain ?  Then chains can merge once they come back to a common state too.

The goal is: get the SUT to a complex state, take a snapshot, and then use that as a way to do a unit test suite so you can really focus on that given state.  Once satisfied, can regenerate all paths live, but keep the focused tests, to be sure that the machine is behaving correctly.  This tool lets you focus on a complex hard to reach state.

Goal of all systems is to make a common codebase that solves a multitude of problems.  If you can make something that works in a wide range of scenarios and you have complete coverage, then you can be sure (sort of?) that it works correctly ?