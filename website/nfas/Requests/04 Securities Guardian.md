![DreamcatcherSecuritiesGuardian](/nfts/DreamcatcherSecuritiesGuardian.png)

## Strategic Intent

Whether or not something is a Security and therefore requires application of securities regulation is a crucial but time consuming and expensive consideration when creating startup ventures. This creates an activation threshold that starves any project below it of funding, and causes those projects who activate to be born with commitments to repay investment independent of the pure utility of the project. These commitments are then passed on to the customers and labour suppliers of the project, and so ultimately every actor type ends up stifled in some way.

Via automation and emerging trustfree technologies, The Dreamcatcher seeks to occupy the vacuum between completely free projects, and venture backed projects, with the assumption that most free projects would rather be venture backed if they could be.

Because the Dreamcatcher concerns itself with coordinating labour and money to produce things that do not exist, incentivized by a royalties mechanism, if poorly designed its activities would be classed as regulated. Laws seem to classify things based on behavior and context, as opposed to someone claiming it to be one thing or another. For example, saying something is not a security, or saying that no profits can be expected would not necessarily make it not a security, nor avoid a reasonable expectation of profits. And so the design must include careful adherence to a superset of regulations at all times.

The heart of the problem is that endeavors that promise profit are extremely enticing, and participants are vulnerable to be stolen from by deception. The global innovation rate is hampered by both this class of exploitation itself and the regulation required to limit this exploitation.

Therefore the core Dreamcatcher proposition is a Venture environment where all actors are invulnerable at all times from investment class exploitation, and are confident in their invulnerability, which results in an Investment Free Venture Platform which can start to channel internet style investment - rapid, tiny, global, intelligent, with extremely low fees

We must ensure that these environmental rules are both adhered to at all times and are well understood by all members, and we believe that an automated system executing with blockchain like reliability should trigger instant asset freezing if state transitions occur that cause any NFTs to become an investment promise, which would expose our members to investment exploits. Whatever this rule engine is, it must be able to be legally audited to ensure it truly does exceed the requirements for keeping citizens of any given jurisdiction safe from investment exploits.

## Tactical Intent

Given that the behavior of Actors and NFTs within the Dreamcatcher are all controlled by statecharts, we believe the [Strategic Intent](#strategic-intent) is best met by a statechart with the following properties:

1. A statechart covering all allowed and disallowed states and transitions
1. A method for operating this statechart as a guardian having override of all actions within the Dreamcatcher
1. A visualizer that shows the statechart live
1. A method and execution of auditing this statechart by legal professionals

## Detailed Description

### Statechart all allowed and disallowed states

![](/nfts/StatechartAllStates.png)

#### Must

1. Be designed in all ways to protect all actors from exploitations by others, even if someone actively wanted to be exploited
1. Be versioned and upgradeable
1. Operate synchronously with no external calls
1. Be deterministic and repeatable
1. Be applicable to every Actor / NFT pair in the system
1. Define allowed states with a large margin of error, beyond doubt
1. Be scopable for simple high level views

#### Could

1. Include states that model specific exploits, such as pump and dump, theft, failure to deliver, did not understand what was purchasing, insider trading, sybil attack, market manipulation, [and others](https://en.wikipedia.org/wiki/Securities_fraud)
1. Include the QA service provider as an actor in the system

#### Should

1. Permit generation of overlay statecharts representing a specific jurisdictions classification rules

#### Must Not

1. Be overly influenced by any specific jurisdiction, as invulnerability is a universal goal

### Operate as a guardian

![SecuritiesGuardian](/nfts/OperateAsAGuardian.png)

#### Must

1. Freeze any assets that enter a disallowed state
1. Allow modelling of virtual actors covering reports of behavior external to the Dreamcatcher such as promoting on twitter
1. Publicly name all members and NFTs that are out of bounds
1. Have a means of detecting participation level for any given Actor / NFT pair
1. Provide a complaints mechanism for members to report external behaviour affecting the guardian state of any pair

#### Should

1. Where possible prevent assets entering a disallowed state

#### Could

1. Require hooks in NFTs to call the guardian before transferring
1. Connect to twitter feeds to detect promotion of Dreamcatcher NFTs
1. Charge a fee for operation
1. Collect fees that go into a legal defense pool

### Visualize the Statechart Live

![](/nfts/VisualizeTheStatechartLive.png)

#### Must

1. Be graphically displayable in a web browser
1. Show where you are in relation to all your NFTs
1. Be scopable for simple high level views or finely detailed views

#### Should

1. Allow proposing theoretical transitions to test actions
1. Allow configuring other theoretical actors to test actions
1. Explain why each transition is disallowed, such as showing if you transitioned, then someone else might do a transition that would exploit you

#### Could

1. Have example themes showing out of bounds behavior such as pump and dump schemes

### Audited by legal professionals

![](/nfts/AuditByLegalProfessionals.png)

#### Must

1. have a mechanism for receiving criticism
1. be explainable to a broad pool for legal experts in each jurisdiction
1. Allow linking of legal opinions to different states
1. List out jurisdictions that are incompatible with this Guardian

#### Could

1. Pay the legal professionals by each transition that gets used which depends on their advice
