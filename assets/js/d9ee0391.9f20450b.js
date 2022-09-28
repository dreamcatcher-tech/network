"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[985],{540:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));a(1839);const i={},r=void 0,s={unversionedId:"dictionary/Architecture_Dictionary/Objects/Ghost",id:"dictionary/Architecture_Dictionary/Objects/Ghost",title:"Ghost",description:"Ghost objects relate to the Proof of Existence (POE) of an Asset that is referred to on the DCM, and it's related real-world incarnation.",source:"@site/interblock/dictionary/Architecture_Dictionary/Objects/Ghost.md",sourceDirName:"dictionary/Architecture_Dictionary/Objects",slug:"/dictionary/Architecture_Dictionary/Objects/Ghost",permalink:"/interblock/dictionary/Architecture_Dictionary/Objects/Ghost",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/interblock/dictionary/Architecture_Dictionary/Objects/Ghost.md",tags:[],version:"current",frontMatter:{},sidebar:"interblock",previous:{title:"Evidence",permalink:"/interblock/dictionary/Architecture_Dictionary/Objects/Evidence"},next:{title:"Identity",permalink:"/interblock/dictionary/Architecture_Dictionary/Objects/Identity"}},l={},c=[],h={toc:c};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ghost objects relate to the Proof of Existence (POE) of an Asset that is referred to on the DCM, and it's related real-world incarnation."),(0,o.kt)("p",null,"It is the collective term for Identity Objects and Output Objects, both of which have identical structures but different uses."),(0,o.kt)("p",null,"Identity Objects are contained within Instance Projects, with one Identity Object per Instance Project, and therefore have an independent interface through their containing Instance Project with the wider Dreamscape. Note that an Instance Project may not be Sovereign, in which case although it has the structure of a Project, the containing Project can override that."),(0,o.kt)("p",null,"Outputs are contained within Projects and represent what that Project produces or changes. Projects are not limited in the number of Outputs they contain."),(0,o.kt)("p",null,"Ghosts have a minimal structure that provides Evidence that it can usefully be used as a representation of an Asset in the non-Dreamcatcher world. Beyond that minimal structure it is intended to be extensible in any way. E.g. it can be used as one half of an API bridge to an IoT device, to a repo, to a file store, to an Object in the Chainscape from another (non-Dreamcatcher) App, and so forth. This is the interface where non-Dreamcatcher meets Dreamcatcher and is unlimited in it\u2019s extensibility."),(0,o.kt)("p",null,"When a Ghost\u2019s description of an Asset claims sufficiently high certainty in the assessment of the Observer, it can claim to have \u201clock\u201d on that item. However, the evidence and method used to make that claim is always up for scrutiny, and alternative views (available by an Observer changing Frames) are equally valid."),(0,o.kt)("p",null,"Examples, with increasing Probability that their description of a real world item is useful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Ghost may assert the properties of a unicorn, provide no evidence, and provide the most basic evidenceAglo to assess it (say, a dictator Algo).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Ghost may assert the dimensions and colours of a coke can and provide some evidence from upvotes and photos. This Ghost is probably more useful to Projects who aim e.g. to identify coke cans.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Ghost may assert that a dog with a certain chip ID can be used to represent a spaniel called Romeo. It may also provide evidence about which Vet implanted that chip, and an evidenceAglo that allows anyone interested to scan that dog and compare the result with the ID assertion.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Ghost may assert that an IOT device that can provide a specific key when challenged is a unique IOT device, that it has certain data capture capabilities and can be trusted as being at the GPS location which it reports."))),(0,o.kt)("p",null,"There is no one-to-one mapping of Ghosts to Assets. There can be multiple Ghosts modeling the same Asset. In each case, it is down to the Observer that wishes to interact with the Ghost to judge how usefully it can be mapped over to that Project\u2019s concept of what the real world contains. It may be that a low probability is still useful for some Projects, while a very high probability is necessary for others."),(0,o.kt)("p",null,"From the point of view of any given Observer, a Ghost with a certainty of 100% is considered real, mindful that a different Observer may get a different result. For any given Frame, the set of all real Ghosts returning a 100% probability is defined as the Landscape. All other Ghosts are defined as the Dreamscape."),(0,o.kt)("p",null,"The following are the use-cases of Ghosts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Changing ownership of the Ghost. E.g. if this is an Asset you want to \u2018sell\u2019. Therefore, the new owner needs control of the governance/, and therefore attribution/, bank/, and so forth. NB that this only makes sense if there\u2019s some private information inside Parameters/ that gives the holder a 100% probability when assessing Identity. Applies equally to physical or virtual Assets. Doesn\u2019t really apply to models or concepts, unless you\u2019re considering those as virtual Assets, say if you\u2019re hired as a consultant to model a competitor, and want to deliver the model afterwards. NB, the Ghost can still be the Output of the seller, but only as a hardlink inside of Outputs/. Perhaps that\u2019s useful for auditing e.g. After selling, if the Ghost is changed, the seller has no say in it. Alternatively, you could add a TimeStamp object as the Output, to represent the situation at the time you sold it. This would provide a way to roll back to the state of the Ghost at the point of sale."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Route to \u2018sell\u2019 a Ghost:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Instance Project",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If the ownership is to be shared between more than one Project after the sale, it needs an Instance Project:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The only mechanism we have to share a Ghost is through governance, and Outputs only have inherited governance from their Project. So unless you want to share governance for the whole Project, you need to make it an Instance Project. To do this:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Create an InstanceProject, forking the Output into it."),(0,o.kt)("li",{parentName:"ol"},"Optionally, you could destroy the Output it came from, then hard link out to the InstanceProject/Identity just created from your Outputs."))),(0,o.kt)("li",{parentName:"ol"},"One option for transferring ownership is via creating an InstanceProject.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Create an InstanceProject, forking the Output into it, optionally destroying the Output it came from then hardlinking."),(0,o.kt)("li",{parentName:"ol"},"As you still have governance at this point, you can transfer that over."))))))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Output"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Can be used to transfer ownership.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"A combined PR that refers to two Projects. The PR asks the target project to fork the source project\u2019s output to it\u2019s own Outputs. The PR also asks the source Project to destroy the Output. Requires consent from both Projects\u2019 Governances."))))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Merging two Ghosts modelling the same Asset:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"PR a merge between two Instances, after which there will be a single Instance. Governance will be based on whatever was agreed in the PR between those two instances."),(0,o.kt)("li",{parentName:"ol"},"PR to merge two Outputs. The target will retain governance afterwards, but the source can hardlink to the Output."),(0,o.kt)("li",{parentName:"ol"},"PR to merge an Output with an InstanceProject.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If the target is the InstanceProject, it will retain control afterwards, and the source Project can hardlink in Outputs."),(0,o.kt)("li",{parentName:"ol"},"If the target is the Project/Outputs then Projects would retain control. The InstanceProject/Identity would hardlink to the merged Output. The InstanceProject may want to suicide, but doesn\u2019t have to."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Forking an Output or InstanceProject"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Requires forking the whole Project, so business as usual."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a Ghost as a representation of a Project\u2019s Output for others to verify."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If you\u2019re claiming the Ghost is something you\u2019re producing then it\u2019s an Output, so make that Output public."),(0,o.kt)("li",{parentName:"ol"},"Alternatively, if you\u2019re hardlinking from Outputs to an InstanceProject/Identity, then the privacy settings are held in that InstanceProject."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a Ghost as an internal representation of an Asset in a Project."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If it\u2019s something that the Project is producing or changing, it\u2019s in Outputs/output."),(0,o.kt)("li",{parentName:"ol"},"If it\u2019s something that the Project wants to segment with a bank, sub-governance e.g., it\u2019s in Projects/instance/Identity."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"How other Projects use a Ghost as a Dependency"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Weak link to:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"An InstanceProject:/Identity"),(0,o.kt)("li",{parentName:"ol"},"A Project:/Projects/InstanceProject/Identity"),(0,o.kt)("li",{parentName:"ol"},"A Project:/Outputs/Output (if it\u2019s visible)"))),(0,o.kt)("li",{parentName:"ol"},"If you can\u2019t Weak Link to it, it\u2019s a Citation.")))))}p.isMDXComponent=!0}}]);