
>[!tip] Created: [2025-08-03 Sun 10:37]

>[!question] Targets: 

>[!danger] Depends: 

what mcp did was make the api docs and tool dynamically discoverable.

typically the docs are separate, and the testing is separate.

in mcp, the caller of the api is effectively human, and they need to blend the dev discovery and the usage in the same band.

also makes upgrades softer, since api's need to be unchanging code, but llms can adapt to whatever has altered, keeping in mind the main goals.  it makes programming more forgiving.

we can do the same thing with hardware interfaces, so a piece of hardware need not have drivers.
it would be discovered, and adapted to.
experiments between consumers would be shared, and even fed back to the hardware mfg, so that it could post iterations much quicker.

if we could make small batch silicon, things might be better.
or fpgas that the llms tweak and tune as needed ?
llms might break the barriers of fpgas since the code translation was always the issue there - getting useful code in cpu is feasible, but then moving it to run on fpga costs a lot more and is less dynamic.

we could trial an fpga llm service using aws fpgs suppliers, so we can showcase high performance functions being made, and run cheaper than a cpu, or with much lower latency.

we should be able to mcp any service that has an api.

we should be able to offer mcp for any service, human or machine.
all mcp's should have a simulation mode that allows for experimentation.