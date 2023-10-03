When should the window size be set ?
In the qaResolve calls ?
Before any funding gets applied, so at header inception ?
But then can a header be quicker than a solution for disputes ?
Solution window should be controlled by the packet, ?
So when packet is made, dispute window is set then.
When the header is made, a hook calls for dispute time to be set.
Then this is the dispute time for the header, and all edits to the header.
Must minimize QA being able to surprise people.
Don't want the header to take as long as the packet to be disputed.
? what about edits to the packet ?

V1
header is created, a hook is called to get `headerDisputeWindow` from QA
this is stored in the header and is used by the header and any edits.
when a packet is formed, a hook is called to get `packetDisputeWindow` from QA
this is stored in the packet, and is used to set how long solutions have to be disputed.

V2
Edits to headers are subject to the same solution delay, since they change the packet.

Simplest is two api calls

V3
push it all out to the QA and let them set it for each change whenever it gets created ?
No, must honour the header and packet timings, so QA cannot be surprising.  Comes at the price of fluidity.

So basically the value is read from QA when a header is created and when a packet is created, and all other times it is set when the change is created by walking up to the packet.