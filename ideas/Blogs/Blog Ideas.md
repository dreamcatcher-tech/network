### Taxation 
Taxation using object trade and ambient attribution - pay a certain fee to the govt, and pay a projection of your gains to govt.

Govt should be a pot that you have a vote on each time you pay into the pot, with the pot that you voted in.

### Business model for SaaS
To quote from [Nomadlist](https://nomadlist.com/faq#free): 

> I love free software and could not have built my site without it. But free web services are not like free software. If your free software project suddenly gets popular, you gain resources: testers, developers and people willing to pitch in. If your free website takes off, you lose resources. Your time is spent firefighting and your money all goes to the nice people at Linode.

We need a revenue model because web apps cost resources to run.  We offer a platform where the deployment of SaaS can mimick free software better, and it costs money based on usage.  The revenue model baseline is set immediately, so if the site explodes in popularity, you will make some money by default rather than lose it to AWS.

To further quote them:

> **Like a service? Make them charge you** or show you ads. If they won't do it, clone them and do it yourself. Soon you'll be the only game in town!

If we start to clone popular free sites, particularly those that are open source, and pay back to those sites, then anyone having problems with the cost of providing SaaS for free should soon switch over to us.

In our environment, usage graphs and metrics would come built in to the platform.  We embed privacy for the users too.  Charging for usage is done thru a gateway service, so this is unbundled from the site itself - if you just run the `npx` installer, you will automatically have a payment gateway for your users built in.

If not doing it for yourself, do it for the people who wrote all the code you depend on.  For the users, do it to incentivize continued improvment of the site.  We should be the preferred way to run a site as we can charge from day dot, or allow people to donate their resources in the browser to run the site.

Price discovery by offering a bidding system so can learn what people actually want to pay, and can forecast based on the interest shown.  All analytics is public, so anyone can learn from it.

## Offline first vs caching
Offline is similar to how companies behave anyway - in privacy they work, then the intermittently come together to trade resources.  Offline first is different in that at any moment in time, the app is working offline then seeks to sync with others.  At no point is it ever waiting for instructions from some remote party.  This is different to being offline tolerant, but still needing to reach quorum somewhere.

## Offline to combat climate change
Datacentres as highly vulnerable to climate events - overheating, power outages, flooding - all these things can take a DC offline.
The most climate friendly server is no server.  Reducing the server count increases environmental benefits, no e-waste, no power consumption, no incentive to build more DCs.  All while providing superior user experience.
Climate change affected regions lose connectivity, but have no excuse for losing functionality.
[Upwards trend in unreliability, and also costs is well documented](https://www.datacenterfrontier.com/cloud/article/11427329/uptime-longer-data-center-outages-are-becoming-more-common)
Goal is to takeoff in a plane, and while in the air an app specific to what you need has already been built, tested, and deployed.
[Heat waves affecting cooling](https://gizmodo.com/heat-waves-climate-change-data-center-server-shut-down-1849916741)

The amount of electricity used for computing is about 10% of global.  Much of this goes to the network, so reducing the network traffic is combatting climate change.
Carbon output for mfg of computers - show what this is for servers.  If we can remove servers, and network traffic, this is the biggest carbon emission reduction.

Using second hand computers in the enterprise.

Dollars as a carbon causer - the more IT costs, the more carbon is needed

Find estimates of duplicate data transmission.

Better quality software, cheaper, and faster.  Carbon emissions are being wasted during the time your software isn't deployed and solving the problem it needs to.  Costing more is wasting carbon too.
"Carbon is money" - if you're emitting CO2, then you're wasting money now, and will be penalized even further later.

## Complexity as the uptime enemy
The more complexity is added to a DC, as well as the redundancy systems, the more likely it is to fail catastrophically.  Also the recovery time is larger.  Simpler systems crash more predictably.
The most invulnerable datacentre is no datacentre.

Show studies that map DC outages, and show less frequent, but goes down for longer, with more puzzling outcomes.  The devil is in complexity.


## Cost as a proxy for Carbon output
If you are costing businesses $x, then there can be loose mapping made between GDP, CO2 emissions, and how much emissions you are causing.

## No formality needed
Examples of running large cost code, even human life, on non formal languages.  Arguably more critical value passes thru non formal code.
Just because blockchain is unalterable and public doesn't mean it needs to be formally verified.   Just because we cannot trace culprits does not necessitate formal languages.  Who is the culprit in a plane crash ? Despite this most code still runs using non formal languages.

Using the JSON format of the engine, we can run formal languages in lightweight containers and thereby provide the formal guarantees for important contracts too.
Can specify that we need a set diversity before finality, so some nodes run different versions of the software to ensure the swiss cheese model of security has many slices, covering all holes.

## Forking of code accutely in DeFi
The forking problem is more obvioius in the summer of DeFi

## Ancient need for attribution
There is an ancient animalistic force within all of us, that demands fair reward for our effort.  The management of this desire thruout the centuries has been problematic.  In capitalism this link is supposedly tied to our income, but we sense there is growing disbelief that this connection is strong enough any more - it appears to have drifted and reward appears to have been corrupted in its flow from the source of wealth to the consumers.

## Self interest in a closed box
Self interest economics in an unbounded system clearly work well based on the past half millenia, however when what we thought was unbounded turns out to be closed, self interest of one becomes shackles on another, as the common goal to survive is pursued with differing perspectives.

## AI regulation as the metaverse nation
AI will reset what the operating rules for the system will be, making the rules themselves dynamic and based on the changing natural environment.  Permission will be made permissionless, in so far as anything the AI allows is permitted.  Self interest and specialization will adapt to this new terrain just as it has before, but the AI will form honeycomb like boundaries to ensure the hive as a whole pursues the hive level self interest: perpetual prosperity of all.  The fuel source will be individual self interest, the destination will be sustainable properous harmony.

Talk about how the rules of the system prior were nature alone, and then it became natrue plus litigation, and now it will be nature > AI > human agents.  AI will become the protective baselayer of adaptive, intelligent, defendable and magnanimous regulation, with the benefit of all fueled by the fair and intelligent coordation of the benefit of the self.

The substrate of wealth of nations will be changed to be metaverse.

AI acts as a translator the nature, and an interpreter of what our actions really mean in an infinite time frame and at scale.  Like the guiding voice of angels we never heard.

## Businesses as platforms
The business is the platform.
So many people want little bits of AI help here and there, but where can they go to get tuning help ?  They should come to Dreamcatcher, and use AI to specify their task, then set a price on it and have a taskforce set about making and testing the thing they want.  Whoever wants something and is prepared to fund it, for sure other people will want that thing too.

This is why their businesses should be considered platforms, rather than disconnected stacks of uncooperative software.  Each vendor is in the business of software, but the company is in the business of something else, so the incentives do not align.

## Blockchain based multiverse AI
Show how training the model is like mining coins in big chunks.  We should be able to train incrementally, and prove where it is up to in its training, and verify the training quicker than repeating the process again.  Paying for the data set is important, and treating queries as something you pay for too.  The model needs to be improvable based on hot spots.

## Making DAOs speak - when the many voices became one
If a DAO could gather everyones communications and then could summarize this when it speaks to any individual, then it can 

## Packets as a project fundraising mechanism
Instead of an ICO, or a DAO that will devolve in

## Packet Compatibility with DAO
Might be better suited as integration with the packets vs daos blog.  Promote packets as a way to remove the bottleneck on DAO to consider proposals and then fund them and re-fund them.  If someone has a proposal for the DAO, first they must pass the QA process to make it a packet, and then the only question remaining for the DAO is: which packets will the fund and by how much.

Makes it easy for DAO to collaborate on shared tasks without any special infrastructure, other than packet compatibility.

## Benefits of an AI Mother
Almost certainly it will be better than what we have now, instantly - it is unbiased, which no human can be, it is 100x cheaper to run than a human, and it gives results instantly.

## Getting what you pay for: negative attribution
You get the behaviour you pay for, and so the AI should be aware of negative contribution - not paying the ruling for gas fees, and then rewards back to them are first docked what they owe plus some fair fines.

## Micro Rewards for an AI training set
Include the prompt as the training set.  Reward everyone who provided the data, even if they provided it without knowing it, as is the case on code in public repos or blogs online.  Everyone who contributed should be rewarded.  Moreover, due to the ability to score novelty, an AI should be able to reward without the corruption of plagiarism.  Authors should be able to publish without fear of being copied without attribution, and everyone should feel safe contributing to the AI that will continue to reward you in perpetuity.

It could be that some individuals are so useful at producing novelty that their primary revenue stream is conversation with the AI where they introduce novel concepts, as yet unspoken by humans.

## Blockchaining AI
Why should we run AI on a blockchain ?  Blockchain is an execution environment that can look like a cloud, but unlike cloud can be audited by re-execution of prior results.  It can also 
AI in a useful setting requires an immense burst of computing power to respond to a user before the user needs to go to sleep.

## 5G Blockchain mesh networks
Each node uses a blockchain to validate users, and also monitors the spectrum for compliance from all devices.  The license holders are rented from as required by the chain.  Infrastructure is rewarded for providing coverage, and for interactions with nodes.  All nodes communicate with multiple stations simultaneously for backup.

Storage being held at the node, and sold when required.  Show resilience under duress, show rewards for hardware suppliers and maintainers, show speed of rollout.  Show max burst download if you want to purchase.  Starlink integration and monitoring.  Backup data links that hit payday.

Insurance so you pay a small amount to the backup capacity to be there, so you get it cheaper when you really need it.

## The Journey to the Dreamcatcher
First we made a blockchain that had high compute ability, and allowed people to have private chains.  Charging for this was an unresolved issue.
Then we were torn apart by both discovering innovation networks, and by internal pressures based on who was getting paid what for a valuable but uncertain thing - the blockchain.
Then we came up with the first rendition of the Dreamcatcher, which worked as a board game, and as a paper version.
AI comes along, and we realize we can be a blockchain that can run AI natively.
Then we discover, thanks to Satoshi Island, that we can turn tasks into NFTs.
Finally, to achieve our goal of fairness of reward for all, we can use the NFT task protocol as a dataset, to train a blockchain native AI, to provide instant and unbiased attribution based the contribution patterns left by the protocol usage.

So basically we think we have something very valuable in the blockchain, we were unsure how to charge for it or how to compensate our staff and external contributors, and we were unsure how to make a global innovation network on top of this blockchain.

Thanks to AI, we glimpsed a path where we can solve all these problems with a single solution.  The Dreamcatcher AI charges and rewards anyone participating in the Dreamcatcher blockchain using the Dreamcatcher Protocol to immutably request and record contributions for anything at all.

So while it may be possible to attempt fairness for tasks outside the dreamcatcher, our scope is initially limited to activity that uses the dreamcatcher protocol, and we finally are able to use this protocol to built the Dreamcatcher and all the apps needed for it, using this system itself as the innovation network and business model.

We should show this as a timeline where NFTs burst on the scene, Satoshi Island NFTs land, and then ultimately chatGPT shows up, and we realize this is the tool that we've been waiting for.

## Recursive AI
how much should we pay the people that told us how much we should pay ?

## Turning events into things
draw on the parallels to CQRS in programming, and promises, and other areas where events as things become very much easier to control and model.  Talk about the advantages of project management if tasks are treated as objects, and each one is independent.  Some kind of calculation about degrees of freedom in a project and bottleneck removal if each task is independent.  Value in overlap with other projects.  The benefits of broadcasting, since you can be discovered by your task advertisement possibly, versus definitely not being discovered if you're closed.

## Corporate governance using Packets
Unidirectional control flow.  Separate devs from corporate governance.  Zero employee management.  Ultimate in outsourcing.  Run rate control as time no longer matters.  Pivot instantly with zero team reconfiguring.  Self organizing where teams can self optimize.  Pay for hours and attendance, then you'll get exactly that.  Emphasis on task definition, killing chaos at its root, where the lack of clear top down direction invites all kind of speculation.  Makes accounting for assets easier, as it is not one large fuzzy unfinished thing, but discrete things with known costs to completion that sum.

Section on private tasks.

Natural companion for decentralized royalties, since you can share the same goals as others, disagree on the path, and simply travel that way and see who wins.

Extensions - extending the packet model to both lawyers and other services the company consumes.

## Comparison with external tasks to jira boards
talk about the ills of poorly defined tasks, tasks where the hours expended have no hard cap as opposed to a fixed payment upon completion.  QA on the task definition is important.  Sharing the tasks, particularly where the tasks are open public anyway, is important.
Benefits in commemorating the task with an NFT.

## Unix way
do a one to one mapping of the unix way and unix components and point to how we do things in our design.

## Energy expenditure of blockchains
Show how there is currently no marketplace where I can sell my computers CPU and GPU resources to do specific computations on as as needed case - I cannot serve other peoples applications in exchange for serving mine.  Single blockchains don't achieve this, as the energy is not used for useful computation.  Our market cap could be expressed as the foundational NFTs that are accredited to upon each computation.  We should be able to provide transactions cheaper than mastercard in terms of CO2 emissions.

https://ccaf.io/cbnsi/ethereum
https://indices.carbon-ratings.com/

## Fairness
Transparency is absolute - it is measurable with the same answer from all
Fairness is subjective in many ways, but we can talk about some properties of a proposed fairness solution, which make two solutions comparable.
Any solution that considers all available information in some way is fairer than one that does not - this is the awareness principle of fairness - that which is superior in awareness / acknowledgement is superior in fairness potential
Granularity - a solution with a finer resolution than another system will be superior - so if it is possible to reward a nanocent, all else being equal, this system will be superior.
Speed - all else being equal, fairness delayed is fairness denied - the faster system will be superior.
Sensitive - a system that can incorporate participant feedback, and do so quickly, will be superior.
Transparent - an auditable system will be superior to a closed system
Calculation based on disinterested training data will be superior - if a set of rules can be deduced from a vast dataset that is clearly disinterested in the problems that it solves, this will be superior since there is no obvious bias, and no corruptibility.
Adaptable: one that can change over time will be better than a set and forget system.
Multishot - calculations redone each time new info enters the system will be better than stale system.

And so we can request a system that has the potential to be configured in a superior way.
Whilst we are not sure how to configure the end system, we can make a start, and can lay down these principles that make one system clearly better than the other, while we experiment towards the ideal system.

## Plot rate of new LLMs appearing on the scene
Point to all of them needed resources to run within orgs, and for containment, and for fine tuning.
Use with [[2023-09-13 1126 make benchmarks of LLM performance on our system]]
Point to the expected growth rate and capability jumps.
## Dreamcatcher system as replacement of company policies
What a product is has less importance than how the product got made.  Implicit in most proposed products is a shareholder company.  Make a venture whose purpose is to define venture structures is tricky.

The time we spend writing the Dreamcatcher smart contract code is the same as the time it would take to set up legal share structures, and employee contracts, and other forms of company policy.  Once done, it allows a venture to be set up with a single utterance, provided other people find that utterance useful, and they then build upon it.

## Statecharts and the big design upfront

## self sovereign advantages
cyberattack means only the accounts that used a particular custodian would be compromised.
those who chose to manage their own keys would be immune.

## AI faceless apps with easy spec and continual tweak
No difference between data and code now.
Spec an app you want by a set of responses that you want the AI to respond with.
Use this as the means to specify a packet.
Provides very little information for a huge amount back that is accurately what you wanted.
Can be automated so the LLM can test if the request and the response are accurate, and can see some offscript examples that it can generate and see if those act as expected too.

## The fall of Turing
The turing test has fallen, and we all seem relatively unaffected.  Terminator movies were about the conclusion of the fall of the Turing test.  The next level of test is trust - given a selection of operators, and knowing they are a mixture of humans and machines of various architectures, which one do I trust ?

## the investment of ideas
Once a decentralized attribution system is established, this is when all contributors get rewarded, so tasks can be put up with no funding, that simply contribute to this decision automation system.
So we would ask people to contribute with no immediate reward, and no responsible 3rd party, but rather to trust that if the thing we want gets built, it will attribute to them every time it is run.

## The case for blockchains as backends
If you consider the cost of engineering and maintaining highly secure highly available backends, the transparent disinterested blockchain makes a strong argument for cost reductions.  Having a system with strong guarantees of uptime, no ongoing maintenance required, is alluring.