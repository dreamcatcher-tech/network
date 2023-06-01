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