
>[!tip] Created: [2024-05-28 Tue 16:52]

>[!question] Targets: 

>[!danger] Depends: 

Each action that occurs, we should check upstream if we should merge down.

? should we pull from the top of the tree down ?

Pull only from one up.

To update all would require an action from the top.

? Should a pull only go to the base, or should it be able to go into a branch, too ?

It would depend if the PID had been set up to track or not.

Pull is only going to update branches that are being tracked.
Process branches maybe shouldn't be tracked ?

Hal doing merges should ripple up ?

Pattern of development seems to be do the commands manually as direct function calls under test, then make a help that uses them, then try integrate them with the wider help network.