Ghost objects relate to the Proof of Existence (POE) of an Asset that is referred to on the DCM, and it's related real-world incarnation.

It is the collective term for Identity Objects and Output Objects, both of which have identical structures but different uses.

Identity Objects are contained within Instance Projects, with one Identity Object per Instance Project, and therefore have an independent interface through their containing Instance Project with the wider Dreamscape. Note that an Instance Project may not be Sovereign, in which case although it has the structure of a Project, the containing Project can override that.

Outputs are contained within Projects and represent what that Project produces or changes. Projects are not limited in the number of Outputs they contain.

Ghosts have a minimal structure that provides Evidence that it can usefully be used as a representation of an Asset in the non-Dreamcatcher world. Beyond that minimal structure it is intended to be extensible in any way. E.g. it can be used as one half of an API bridge to an IoT device, to a repo, to a file store, to an Object in the Chainscape from another (non-Dreamcatcher) App, and so forth. This is the interface where non-Dreamcatcher meets Dreamcatcher and is unlimited in it’s extensibility.

When a Ghost’s description of an Asset claims sufficiently high certainty in the assessment of the Observer, it can claim to have “lock” on that item. However, the evidence and method used to make that claim is always up for scrutiny, and alternative views (available by an Observer changing Frames) are equally valid.

Examples, with increasing Probability that their description of a real world item is useful:

- A Ghost may assert the properties of a unicorn, provide no evidence, and provide the most basic evidenceAglo to assess it (say, a dictator Algo).

- A Ghost may assert the dimensions and colours of a coke can and provide some evidence from upvotes and photos. This Ghost is probably more useful to Projects who aim e.g. to identify coke cans.

- A Ghost may assert that a dog with a certain chip ID can be used to represent a spaniel called Romeo. It may also provide evidence about which Vet implanted that chip, and an evidenceAglo that allows anyone interested to scan that dog and compare the result with the ID assertion.

- A Ghost may assert that an IOT device that can provide a specific key when challenged is a unique IOT device, that it has certain data capture capabilities and can be trusted as being at the GPS location which it reports.

There is no one-to-one mapping of Ghosts to Assets. There can be multiple Ghosts modeling the same Asset. In each case, it is down to the Observer that wishes to interact with the Ghost to judge how usefully it can be mapped over to that Project’s concept of what the real world contains. It may be that a low probability is still useful for some Projects, while a very high probability is necessary for others.

From the point of view of any given Observer, a Ghost with a certainty of 100% is considered real, mindful that a different Observer may get a different result. For any given Frame, the set of all real Ghosts returning a 100% probability is defined as the Landscape. All other Ghosts are defined as the Dreamscape.

The following are the use-cases of Ghosts:

1. Changing ownership of the Ghost. E.g. if this is an Asset you want to ‘sell’. Therefore, the new owner needs control of the governance/, and therefore attribution/, bank/, and so forth. NB that this only makes sense if there’s some private information inside Parameters/ that gives the holder a 100% probability when assessing Identity. Applies equally to physical or virtual Assets. Doesn’t really apply to models or concepts, unless you’re considering those as virtual Assets, say if you’re hired as a consultant to model a competitor, and want to deliver the model afterwards. NB, the Ghost can still be the Output of the seller, but only as a hardlink inside of Outputs/. Perhaps that’s useful for auditing e.g. After selling, if the Ghost is changed, the seller has no say in it. Alternatively, you could add a TimeStamp object as the Output, to represent the situation at the time you sold it. This would provide a way to roll back to the state of the Ghost at the point of sale.

   1. Route to ‘sell’ a Ghost:

      1. Instance Project
         1. If the ownership is to be shared between more than one Project after the sale, it needs an Instance Project:
            1. The only mechanism we have to share a Ghost is through governance, and Outputs only have inherited governance from their Project. So unless you want to share governance for the whole Project, you need to make it an Instance Project. To do this:
               1. Create an InstanceProject, forking the Output into it.
               1. Optionally, you could destroy the Output it came from, then hard link out to the InstanceProject/Identity just created from your Outputs.
            1. One option for transferring ownership is via creating an InstanceProject.
               1. Create an InstanceProject, forking the Output into it, optionally destroying the Output it came from then hardlinking.
               1. As you still have governance at this point, you can transfer that over.

   1. Output
      1. Can be used to transfer ownership.
         1. A combined PR that refers to two Projects. The PR asks the target project to fork the source project’s output to it’s own Outputs. The PR also asks the source Project to destroy the Output. Requires consent from both Projects’ Governances.

1. Merging two Ghosts modelling the same Asset:

   1. PR a merge between two Instances, after which there will be a single Instance. Governance will be based on whatever was agreed in the PR between those two instances.
   1. PR to merge two Outputs. The target will retain governance afterwards, but the source can hardlink to the Output.
   1. PR to merge an Output with an InstanceProject.
      1. If the target is the InstanceProject, it will retain control afterwards, and the source Project can hardlink in Outputs.
      1. If the target is the Project/Outputs then Projects would retain control. The InstanceProject/Identity would hardlink to the merged Output. The InstanceProject may want to suicide, but doesn’t have to.

1. Forking an Output or InstanceProject

   1. Requires forking the whole Project, so business as usual.

1. Using a Ghost as a representation of a Project’s Output for others to verify.
   1. If you’re claiming the Ghost is something you’re producing then it’s an Output, so make that Output public.
   1. Alternatively, if you’re hardlinking from Outputs to an InstanceProject/Identity, then the privacy settings are held in that InstanceProject.
1. Using a Ghost as an internal representation of an Asset in a Project.

   1. If it’s something that the Project is producing or changing, it’s in Outputs/output.
   1. If it’s something that the Project wants to segment with a bank, sub-governance e.g., it’s in Projects/instance/Identity.

1. How other Projects use a Ghost as a Dependency
   1. Weak link to:
      1. An InstanceProject:/Identity
      1. A Project:/Projects/InstanceProject/Identity
      1. A Project:/Outputs/Output (if it’s visible)
   1. If you can’t Weak Link to it, it’s a Citation.
