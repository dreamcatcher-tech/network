
>[!tip] Created: [2023-01-27 Fri 15:23]

>[!question] Targets: 

>[!danger] Depends: 

Being able to send an action out and know that it is the only one is useful.
Do not want devs to have to dig thru channel specifics to figure this out.

Example: receiving updates from children, and wanting to know we are processing the last one, and that nothing else is in the queue.

We could send an action up on the first receipt, with some state storing what we saw.
When we get subsequent actions, we update what we say.
Finally when we receive this first action, which must have been last in the queue, we read the state and know it accumulates everything that came before it.