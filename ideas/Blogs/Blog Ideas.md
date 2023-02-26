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
