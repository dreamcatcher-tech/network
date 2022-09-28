"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[9519],{2942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));a(1839);const s={},o="R24 IPFS ORM",l={unversionedId:"Requests/R24",id:"Requests/R24",title:"R24 IPFS ORM",description:"R24 IPFS ORM",source:"@site/dust/Requests/R24.md",sourceDirName:"Requests",slug:"/Requests/R24",permalink:"/dust/Requests/R24",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Requests/R24.md",tags:[],version:"current",frontMatter:{},sidebar:"dust",previous:{title:"R23 Email",permalink:"/dust/Requests/R23"},next:{title:"R25 Dreamcatcher Pulse Explorer",permalink:"/dust/Requests/R25"}},r={},c=[{value:"Design",id:"design",level:2},{value:"Developer Interface",id:"developer-interface",level:2},{value:"IPFS interface",id:"ipfs-interface",level:2},{value:"IPLD schema checking",id:"ipld-schema-checking",level:2},{value:"Diffing",id:"diffing",level:2},{value:"Caching",id:"caching",level:2},{value:"Performance",id:"performance",level:2},{value:"HAMT",id:"hamt",level:2},{value:"Lightweight Instantiation",id:"lightweight-instantiation",level:2},{value:"Hydration Permissions",id:"hydration-permissions",level:2},{value:"Stopping Hydration",id:"stopping-hydration",level:2},{value:"Encryption",id:"encryption",level:2},{value:"Optional Dynamic Dehydration",id:"optional-dynamic-dehydration",level:2},{value:"Object types",id:"object-types",level:2},{value:"Plain object",id:"plain-object",level:3},{value:"Deeply Nested ORM object",id:"deeply-nested-orm-object",level:3},{value:"Array of plain objects with deeply nested children",id:"array-of-plain-objects-with-deeply-nested-children",level:3},{value:"Array of CID objects",id:"array-of-cid-objects",level:3}],h={toc:c};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"r24-ipfs-orm"},"R24 IPFS ORM"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"R24 IPFS ORM",src:a(3379).Z,width:"1024",height:"1024"})),(0,n.kt)("p",null,"During the course of ",(0,n.kt)("a",{parentName:"p",href:"/dust/Ideas/I06"},"I06 IPFS Rewrite")," a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dreamcatcher-tech/dreamcatcher-stack/blob/46847ac461a0c49b7a9218ee5627cd4581f11ca8/pkg/interblock/src/w008-ipld/Crush%20System.md"},"class system")," was constructed to easily map back and forth between data in our models and IPFS based data. This system appears generic enough that it can be factored out into a standalone module, stabilized, tested, and performance tuned, and then used to add on a new feature for the Interpulse core to inherit: Encryption at Rest."),(0,n.kt)("p",null,"This library should not strive to used inside of chainland. We may wish to supply an ORM designed specifically for modelling objects as chains in our system, but we should not encourage the usage of mappings between IPFS data blocks inside our chains directly. In the state of a chain, the correct way to hash some data and link to it, is to create a child chain, and so any ORM we produce would favour this method, not a direct IPFS link."),(0,n.kt)("p",null,"The primary benefit to us, the builders of the Dreamcatcher Blockchain, is for change management as the schema of the chain changes. Making this a separate library gives good confidence that the code is correct, puts a barrier in place to keep this funcitonality separate from all else, and enables the addition of Encryption without getting tangled in the core code."),(0,n.kt)("p",null,"The suggested scoping of the solution to this Request is to not consider any external utility for this ORM until we have used it internally ourselves, first."),(0,n.kt)("h2",{id:"design"},"Design"),(0,n.kt)("p",null,"This could be a nested design like the current implementation, where any class in the system can be reinstantiated using static methods on that class. It could also be a centralized design, where a central factory type method is called to do hydration and dehydration."),(0,n.kt)("h2",{id:"developer-interface"},"Developer Interface"),(0,n.kt)("p",null,"The utilization of this library must be via class inheritance. Any class wishing to have CID abilities must inherit from one of the supplied classes. The data that is to be serialized must be POJO ",(0,n.kt)("inlineCode",{parentName:"p"},"own")," properties on the class instance."),(0,n.kt)("p",null,"Developers must be able to indicate if they want a particular class to be hashed out every time, some times, or none of the time. An example of this is to use the same class in different places, one punched out, one not."),(0,n.kt)("p",null,"Each object must be an immutable class, and all ORM methods must return a new instance of the class. Developers should be encouraged never to mutate their internal class state."),(0,n.kt)("p",null,"During hydration and dehydration, the developers class must have the opportunity to perform logic checks, to ensure the data their classes contain is logically correct, not just of the correct type."),(0,n.kt)("p",null,"Versioning should be handled somehow, but is not required as the use case is supposed to do its own version management."),(0,n.kt)("h2",{id:"ipfs-interface"},"IPFS interface"),(0,n.kt)("p",null,"The ORM should do its operations using two function calls only:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"await put( Block )")," where Block is an IPLD Block, which contains a CID"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"await get( CID )"))),(0,n.kt)("p",null,"The implementation of these functions is outside of the scope of the ORM, and for testing may be as simple as a Map(). Errors in calling these functions should bubble up. A possible extension is to use chains themselves to store and resolve the put and get function, since the backing store is independent of what the ORM is doing."),(0,n.kt)("h2",{id:"ipld-schema-checking"},"IPLD schema checking"),(0,n.kt)("p",null,"The ORM must allow the optional inclusion of schema for the classes similar to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dreamcatcher-tech/dreamcatcher-stack/blob/46847ac461a0c49b7a9218ee5627cd4581f11ca8/pkg/interblock/src/w006-schemas/IpldSchemas.md"},"w006-schemas")," which may be supplied to the ORM using some kind of map interface, such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dreamcatcher-tech/dreamcatcher-stack/blob/46847ac461a0c49b7a9218ee5627cd4581f11ca8/pkg/interblock/src/w006-schemas/ipldSchemas.js"},"ipldSchemas.js")),(0,n.kt)("p",null,"Devs must be able to specify if they want schema checking on at hydration, on at dehydration, as well as if they want the hydrated objects frozen."),(0,n.kt)("h2",{id:"diffing"},"Diffing"),(0,n.kt)("p",null,"Managing diffing is the implementors choice, but for the same of performance, the library should be aware of diffs between each object it is managing."),(0,n.kt)("h2",{id:"caching"},"Caching"),(0,n.kt)("p",null,"An object cache should be maintained to make hydration requests fast. The size of this cache should be tracked based on the size of the hashed data that make up the objects, and memory pressure should cause ejection. This is complicated by the sharing of data between objects, but being naive and too agressive with ejection is better than the alternative."),(0,n.kt)("h2",{id:"performance"},"Performance"),(0,n.kt)("p",null,"A set of benchmarking tests making different types of use of the library should be set up and run each commit so as to keep performance high. Being classes the overhead should be minimal."),(0,n.kt)("h2",{id:"hamt"},"HAMT"),(0,n.kt)("p",null,"A special type of object that must be supported is the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dreamcatcher-tech/dreamcatcher-stack/blob/46847ac461a0c49b7a9218ee5627cd4581f11ca8/pkg/interblock/src/w008-ipld/src/Hamt.js"},"Hash Array Mapped Trie")," as this object is the key to being able to have constant time additions of a new channel to a pulsechain, even with the number of channels is large."),(0,n.kt)("p",null,"This device adds the complexity that it might need to be rehydrated during system operations, rather than all at once at the start."),(0,n.kt)("h2",{id:"lightweight-instantiation"},"Lightweight Instantiation"),(0,n.kt)("p",null,"The HAMT structure cannot be fully instantiated during normal operations due to its potential size overloads. Hence the ORM needs to permit partial inflation of classes with optional targetted hydration at an arbitrary point in time."),(0,n.kt)("p",null,"The ORM may allow partial hydration in other parts of the application too. This hydration can be triggered explicitly or can be implicit by making some class functions async. Care must be taken when leaving a live ipfs resolver function available to hydrate in such on demand scenarios."),(0,n.kt)("h2",{id:"hydration-permissions"},"Hydration Permissions"),(0,n.kt)("p",null,"The use of this inflation must be carefully managed so that only CIDs that the current model is entitled to view are available. For example, if a hydration function was passed into userland, malicious code might ask it to inflate CIDs that it should have no access to. The implementation may solve this by specifying a root CID, and then only ever allowing"),(0,n.kt)("p",null,"If such a scheme is implemented, then care should be taken to recognize special classes that indicate the end of automatic hydration, such as a PulseLink. This is to stop a malicious inflation from walking back through the pulsechain, when they are only permitted to view"),(0,n.kt)("p",null,"The scheme may allow some classes to be marked as end of hydration, for example the ",(0,n.kt)("inlineCode",{parentName:"p"},"State")," class might be marked as such, to stop malicious code making a CID to some forbidden blocks and then using hydration to access them."),(0,n.kt)("h2",{id:"stopping-hydration"},"Stopping Hydration"),(0,n.kt)("p",null,"Special objects like Address, Pulselink, and Binary are classes that represent direct IPFS concepts, rather than a layer above like normal ORM classes do. These signal a break in the hydration process, so that inflating one pulse does not inflate all the lineage too, nor does it inflat the binary of the chain, nor the pulses of all the channels that the pulse is connected to."),(0,n.kt)("p",null,"However the data is present in such a way as it can be fed back into the ORM somehow and then another segment of hydration can be worked upon, again stopping at the developer specified boundaries."),(0,n.kt)("h2",{id:"encryption"},"Encryption"),(0,n.kt)("p",null,"Must provide a pluggable encryption scheme, where hashes refer only to encrypted blocks of data, and that each block of data contains no plaintext information about what other blocks it links to. This is a feature not present in any iteration of our blockchain, and would imbue our systems with encryption at rest."),(0,n.kt)("p",null,"During encryption the system must still take advantage of diffing of objects."),(0,n.kt)("h2",{id:"optional-dynamic-dehydration"},"Optional Dynamic Dehydration"),(0,n.kt)("p",null,"We may make the decision to crush some parts of the tree that any given model represents dynamically based on performance considerations. It is much faster to initially crush the entire pulse as one single POJO and then pick pieces out of it later. This is not a requirement for the ORM but might be implementable easily depending on other design decisions. It would be done solely to help performance speed."),(0,n.kt)("h2",{id:"object-types"},"Object types"),(0,n.kt)("h3",{id:"plain-object"},"Plain object"),(0,n.kt)("h3",{id:"deeply-nested-orm-object"},"Deeply Nested ORM object"),(0,n.kt)("h3",{id:"array-of-plain-objects-with-deeply-nested-children"},"Array of plain objects with deeply nested children"),(0,n.kt)("h3",{id:"array-of-cid-objects"},"Array of CID objects"))}d.isMDXComponent=!0},3379:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/R24-09131cf27ec7fe786b53530e6b40acc6.png"}}]);