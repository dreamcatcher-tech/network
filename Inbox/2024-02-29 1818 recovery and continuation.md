
>[!tip] Created: [2024-02-29 Thu 18:18]

>[!question] Targets: 

>[!danger] Depends: 

When promises are made to an isolate of results from other branches, we want to keep the first process around so that it can execute smoothly, but we also need to be able to recover if the process has to be started again for whatever reason.


So on the api we make an accumulator.
Then we start a race to run the function.

BUT HOW TO KEEP HOLD OF THE FUNCTION THAT WAS RUNNING ?
In deno, would it even matter to keep it around if we didn't have it ?
Store it in a map, so if we ever need it again, we can fish it out based on the unique id of the action.

If we don't have it, we will start running again.

So this calls for an executor function.
It handles the promise racing, and it tracks all the internal calls.

As results come back in on IO, we can fish out the promise functions form the stored execution, and resolve each one using the results we got back.

Skip execution of the function if

Run a test for recovery and for resumption of a nested function.