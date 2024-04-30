
>[!tip] Created: [2024-04-30 Tue 15:44]

>[!question] Targets: 

>[!danger] Depends: 

It only stops when reads that are not on this host occur, or when the accumulations are the only thing outstanding.

Or, we can just do the reads in realtime.

? what would happen if an isolate delayed and then did some accumulation again ?

We would need to recover this from a replay and issue a warning ?
Try to commit the error, and try to outpace any accumulations coming back in ?
Send in a special halt action indicating the isolate is misbehaving, and requiring attention.
Then, rerun to simulate the fault again ?