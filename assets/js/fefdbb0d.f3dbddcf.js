"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[1859],{5529:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=o(7462),n=(o(7294),o(3905));o(1839);const i={id:"wp_inversion",title:"The Inversion Currency Whitepaper",sidebar_label:"Inversion (NVN)"},s=void 0,r={unversionedId:"wp_inversion",id:"wp_inversion",title:"The Inversion Currency Whitepaper",description:"Goal",source:"@site/docs/wp_inversion.md",sourceDirName:".",slug:"/wp_inversion",permalink:"/docs/wp_inversion",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/docs/wp_inversion.md",tags:[],version:"current",frontMatter:{id:"wp_inversion",title:"The Inversion Currency Whitepaper",sidebar_label:"Inversion (NVN)"},sidebar:"docs",previous:{title:"Dreamcatcher",permalink:"/docs/whitepaper"},next:{title:"Test",permalink:"/docs/test"}},l={},h=[{value:"Goal",id:"goal",level:3},{value:"Consensus mechanism",id:"consensus-mechanism",level:3},{value:"Attack cost",id:"attack-cost",level:3},{value:"Extensions",id:"extensions",level:3},{value:"What, who and why",id:"what-who-and-why",level:3},{value:"Alternatives",id:"alternatives",level:3},{value:"Red queen",id:"red-queen",level:3},{value:"Components",id:"components",level:3},{value:"Properties",id:"properties",level:2}],c={toc:h};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"goal"},"Goal"),(0,n.kt)("p",null,"Provenance based payments, however small."),(0,n.kt)("p",null,"The goals of the currency are different depending on the phase. There is a speculative phase, which then transitions to a securities phase.\nIn the speculation phase, the goals are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Allow investors to remove their money at any point - ie: ensure liquidity for token")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Prohibit crashes, at the price of dampened booms")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Forbid founders to take all the funds and disappear")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Capture the speculative value of the endeavour in token form")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Allow modest appreciation of value to reward early investors")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide a burn rate to founders to sustain the project")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Permit anonymous participation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Record contributions in an irrefutable way - money and code")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"NVN are completely independent from the price of joules in USD"))),(0,n.kt)("p",null,"In the utility phase, the goals are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Provide a stable store of value, so holding the currency does not fluctuate wildly, and generally rises over time"),(0,n.kt)("li",{parentName:"ol"},"Make the price insensitive to buying and selling of the currency"),(0,n.kt)("li",{parentName:"ol"},"Incentivize holding the currency rather than selling out immediately"),(0,n.kt)("li",{parentName:"ol"},"Increase the value of the currency based on"),(0,n.kt)("li",{parentName:"ol"},"Ensure a slowly decreasing cost per Joule in USD (assuming USD is stable)"),(0,n.kt)("li",{parentName:"ol"},"Ensure a slowly increasing value of NVN relative to the USD")),(0,n.kt)("p",null,"This is made possible because the system is really a system for coordinating computation, that has the useful side effect that it also maintains an accounting system"),(0,n.kt)("p",null,"NVN supports attribution tables natively in the least possible amount of information. Direct accounting of flows of attribution thru dependencies would generate a lot of traffic. NVN supports only calculating these amounts when withdrawls happen. This lets dust level transactions accumulate into useful amounts, without wasting the rewards in transaction fees. It allows to receive payments in a value less than 1 Joule, which would otherwise be useless to transfer as the cost of the transfer would be more than the value received."),(0,n.kt)("p",null,"It is also possible to operate at unlimited scale, as the minted coins can be used offline, in closed networks, and can be rejoined if the provenance remains correct according to the system rules. This allows supreme privacy, but also supreme assurance of AML - often providing both at the same time."),(0,n.kt)("p",null,"The price of the AMM is set by a calculation based on usage in joules over time, reserves in the AMM.\nHigh activity with low deposits would increase the price, drawing in more deposits.",(0,n.kt)("br",{parentName:"p"}),"\n","Low activity with high deposits would stabilize the price, triggering exits as money better used elsewhere.\nWill settle on an equilibrium of deposits vs usage."),(0,n.kt)("p",null,"In the power market the currency functions as a medium of exchange. It also functions as a store of value backed by offchain assets that it controls, and backed by the volume of computation purchases being made thru it. As a store of value, it effectively allows purchases of compute resource to be deferred by exchanging with someone else who has different time preferences. For example if you run your home computer for 12 hours a day doing work for others, the currency you earn can be spent."),(0,n.kt)("p",null,"This same time distribution principle can be used compressively - you can run your home server at 100% load for 2 hours, and then exchange that work with others to run your applications overnight at 5% load on their machines."),(0,n.kt)("p",null,"Designed so the price never goes down relative to the USD, but will over time go up."),(0,n.kt)("p",null,"Two kinds of growth are predicted for our system. The zero sum fraction of all computing load on the planet that we aim to replace, and the expansion of worldwide computing requirements. We see that expansion being dominate for the next 2 decades."),(0,n.kt)("p",null,"Bitcoin = Proof of Waste\nNVN = Proof of Work Purchased"),(0,n.kt)("p",null,"? how to increase based on a market cap of the currency ?"),(0,n.kt)("h3",{id:"consensus-mechanism"},"Consensus mechanism"),(0,n.kt)("p",null,"Based on the concept that if buyers are consuming computational work for their own purposes from suppliers in a uniform way, then which supplier is chosen can be randomized to prevent errors and abuse. Being blockchain, this work can also be calculated multiple times for fault tolerance."),(0,n.kt)("p",null,"The premise this currency operates on is that purchased computational work that is public can be used as a proof of work assertion about the state of some other blockchain. So in this system, the primary purpose is to supply computing resources in a generic and interchangeable form, with the side effect being that computation being used to assert the correctness of a ledger."),(0,n.kt)("p",null,"There are two major incentives for participants to operate the ledger correctly. First is that they themselves rely on getting paid for their provided labour from the correct functioning of the chain. Second is that purchasers want their work to be done correctly for their own selfish purposes, and so have strong reason to support the correct functioning chain."),(0,n.kt)("p",null,"Suppliers are not paid immediately, but must wait some period of time where their dishonesty might be discovered, and they have funds revoked from them."),(0,n.kt)("h3",{id:"attack-cost"},"Attack cost"),(0,n.kt)("p",null,"Attacks are difficult because one would have to overpower the computing work on the chain to overthrow it. As this work grows in volume, its price also goes towards zero rather than holding a premium as hashing power does, so gaining enough computing to overthrow the cheapest computing resources available is not cost effective."),(0,n.kt)("h3",{id:"extensions"},"Extensions"),(0,n.kt)("p",null,"The concept of taking something hard to do and provable and using the provenance of it to make some other assertions can be taken several steps further. We envision it being used in the case of code commits, where code that has passed review on popular projects can be treated as an agreement of some weight that is hard to overthrow, and so at the point of publishing it can also assert the correctness of the latest block in the top level ledger. These assertions are globally quite frequent and add an extra dimension of difficulty to overthrow the chain increasing trust in its correct operation."),(0,n.kt)("p",null,"The code committers are incentivized to keep the chain upright as their assertions about their code depend on it to, if it is used as a broadcast channel to assert what the latest correct version of their software is."),(0,n.kt)("p",null,"Consumers of the software are also incentivized to keep the top chain correct as they depend on it for their software security."),(0,n.kt)("p",null,"The repeating principle is a shared trusted zone where multiple suppliers and multiple consumers all desire correct operation of the trust zone each for their own self serving purposes. This causes the strength and breadth of this zone to increase as more actors are added. The spread of the zone is determined by how broadly useful it is, so in the case of a universal computing surface, its breadth is as wide as anyone wanting any kind of computing. In comparison Bitcoin is as wide as anyone wanting to make payments in that particular currency."),(0,n.kt)("p",null,"Whenever a commit is made to a software project, some automated checks occur and often several people review it before a final assertion of fit for purpose is made. These escalating assertions about quality are done by both a human and a machine, and so our intent for mainnet is to piggy back on top of these kinds of assertions, and use a variety of acts like this as an opportunity for the machine to tag along its view of what the latest highest block is, that it has checked for correctness."),(0,n.kt)("p",null,"So to stake on our mainnet you don't necessarily need currency, you just need trust. Stake doesn't need to be a narrow and sterile token, but it can be anything that itself contains trust and correctness of some form. The best kinds are those that run on computers, as the assertion of mainnet can be completely automated for good actors."),(0,n.kt)("h3",{id:"what-who-and-why"},"What, who and why"),(0,n.kt)("p",null,"For people who use the currency, the price is stable, making it feasible to hold the currency simply for the purposes of using it later, rather than derisking by moving to a more stable store of value."),(0,n.kt)("p",null,"For those producing goods, particularly computation and works of knowledge, the payments can economically be dispursed using attribution tables, and in tiny amounts."),(0,n.kt)("p",null,"For anyone transacting it has unlimited scale of transactional thruput, with cost fluctuating only by the price of pure computing resources and nothing else."),(0,n.kt)("p",null,"For people who hold the currency, it offers stability of value, with steady growth based on usage. This growth is buffered to make its curve smooth."),(0,n.kt)("h3",{id:"alternatives"},"Alternatives"),(0,n.kt)("h3",{id:"red-queen"},"Red queen"),(0,n.kt)("p",null,"Every payment that is made using this system sends a small amount to the innovators who built the system.\nThis creates an incentive for others to improve the system to receive some of that revenue stream."),(0,n.kt)("h3",{id:"components"},"Components"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"interblock/wp_interblock"},"Interblock - the universal object protocol")," which provides the underlying protocol for NVN, as well as the universal computing surface"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Work of the chain is the delivery of purchased labour."),(0,n.kt)("li",{parentName:"ol"},"Stable AMM pricing.")))}u.isMDXComponent=!0}}]);