
>[!tip] Created: [2024-05-05 Sun 18:27]

>[!question] Targets: 

>[!danger] Depends: 

If several parties start running ghactions in trusted environments under their accounts, they can provide a form of consensus.  They can put themselves forwards as parties who can be punished, and they earn something for this risk.

So basically anyone could do this, and so long as you trusted the initial code, and ran the verifier on all the actions that were run after, you can be sure that the execute was done correctly.

Running inside ghactions means you can trust it even quicker, since things like network requests are guaranteed to be impartial / untampered, saving you from the expensive AI call required to verify.

So if you see unbroken chains of execution, then you can be assured that operations were done correctly.

The hashed objects can be pulled in from a shared db, or purely as PR objects, and the GH action runs to decide whether to merge in or not.  GH actions would be running as merge master.