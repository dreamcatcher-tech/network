## Tests on the machine itself
First a set of checks on the statechart need to be created, and then the SUT attached to it.
Test that time ticks forwards as expected.

## Problems with the statechart logic

### Double solve
How to show the dispute window being extended by a solution being submitted at the end of the dispute window ?
Basically the first solution cannot be enacted until the second solution has been processed.
But worst case, the second solution is rejected, then disputed, then the dispute process takes a long time.

### dead QA during double solve
If the packet is held open when a competing solution is provided during the dispute window of the first solution, but QA never responds to the second solution, there should be a way to unstick the packet.  We could allow a defund to occur after a frozen timeout.  Or auto dismiss the second solution if QA timed out.

### Defund during solution dispute window
As soon as a solution that passes the `isJudgeable()` test for the given QA, defunding should be frozen.  Currently defunding is frozen only when QA acts.

This means the packet should enter a pending state as soon as an `isJudgeable()` solution is proposed.  If the solution is rejected, or a resolve is disputed, then the defund window should reset, to allow time to resubmit BUT how to stop this being done indefinitely ?  

Only allow a first extension, to cover the initial solution that started the solution process to get some time to recover.

### Peekabo defunding
A solution is submitted, is rejected on a technicality, the packet goes back to open and a defunding occurs, then an edit corrects the solution, and it passes, but the funds were removed.

May consider defunding a round, and each round the defunding gets reset somehow ?

## Problems due to XState and its tooling
Statechart too large to load in studio effectively.

### Making a dedicated UI for the statechart
By forking their stackblitz view, we could make our own little version