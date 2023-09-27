? Could we pass the code into ChatGPT and then ask it questions about it ?
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

It may be safe enough to rely on the dispute window being half the defunding window, so peekaboo could be avoided.  The defunding would be known before the solution was presented, at any rate.

A packet is pending if it has a solution enacted but there are competing solutions.  If a packet went pending whenever a solution was submitted, the packet could flicker, and solvers could play games with keeping funds locked.  

However if we went pending if QA accepted a solution then this is probably better.  If QA was slow to act then could be blamed for defund leakage, but this is probably just an ill of the system, because the alternative is gamable if a solution is late, could keep putting in solutions for the price of QA review until completed the real solution and then held funds against funders wishes.
### Should be able to fund a packet that is in pending state
This seems to break the model that pending is done with a dispute delay.  It allows people to sneak in funding at the last minute for a sure bet, compared to those who put their funding in when the risk of completion was highest.

## Problems due to XState and its tooling
Statechart too large to load in studio effectively - in this case, what is the point of even having the studio ?

### Making a dedicated UI for the statechart
By forking their stackblitz view, we could make our own little version that showed latest actions.
The machine could be broken up into submachines, each that pop up their own inspection window.
Design could be done a section at a time ?
Submachines can be made out of each independent state, and they can all be opened as inspections of the root machine.  Or, built as smaller machines and assembled into the big one.
BUT if we had our own webpage, we could dispense with many of the display related machines and focus strictly on functionality.

Using the inspector, we could walk thru each machine using a centralized UI to control the actions, with the viewer providing live updates.

Could visualize just the core machine, with no view helpers, using with a custom dashboard to help walk thru it.

## testing more thoroughly
Be able to set an env var that turns off some of the filters, such as limiting the number of different funding types that get tested out, funding multiple times with the same item, doing things in multiple orders.

Then once have a fully unleashed unrestricted model, we can start to do monte carlo path testing.