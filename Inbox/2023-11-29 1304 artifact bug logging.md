
>[!tip] Created: [2023-11-29 Wed 13:04]

>[!question] Targets: 

>[!danger] Depends: 

We need a tool that automatically detects errors in artifact and then is able to submit the chains to the server for processing into a bug report.

Basically take a snapshot of the chain complex, and then the inputs that were about to be executed on, as this is where determinism starts, and then be able to exact recreate this scenario so we can know we solved the problem.  Then, we can include such tests in the regression testing database.

This auto filing of errors and auto reproduction can be part of the automation loop where the LLMs try to do actual coding using the chain complex.

Hopefully we can distill the specific cases down so we do not have a vast array of all slightly different things.

Pulse making is the fault boundary, where at the start we can mark it and then work out any errors inside that.

If this boundary includes all networking since that is happening by way of pulses then we have good error reporting for the whole system.

This would be the same as front end fault logging utilities, but for us it gets auto submitted with full reproducability, and the AI runs to remove personal information, asserts that the fault still occurs, gradually strips as much as it can (like all the comms channels, truncates the pulse history) - basically transforms into the most sterile version it can that still creates the error.

Then once solved, it sees if the solution solves the original problem, and reruns the reduction loop again with expanded parameters, since clearly it removed something that was critical to the problem.

There is a list of change dimensions that can be reduced, like history, channels, depth of nesting, multi channel connections - we can have these dimensions as a measure of the complexity of any given pulse bug, which is a softpulse that needs to be crushed, and so we can reduce most problems down to a very simple pulse that is minimally configured.