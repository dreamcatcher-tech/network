import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const call_outs = [
  {
    title: 'Dreamcatcher Charter',
    path: 'docs/Dreamcatcher%20Charter',
  },
  {
    title: 'Dreamcatcher Whitepaper',
    path: 'docs/whitepaper',
  },
  {
    title: 'Go Live',
    path: 'live/',

  },
]

const head_banners = [

  {
    title: 'Dust',
    path: 'dust/',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
        Harnessing the raw power of creativity

      </>
    ),
  },
]

const info_sections = [

  {
    background: 0,
    title: (
      <><h1>Permissionless Innovation</h1>    </>
    ),
    description: (
      <>
The Dreamcatcher is a permissionless innovation framework that aims to outperform traditional methods of getting Ideas to Market.

Fundamentally, all Innovation occurs when three things align to make an Idea happen: 
<><br></br></><><br></br></>
  1. Investors, who pay for it; 
  <><br></br></>
  2. Builders, who have the skills to build it; 
  <><br></br></>
  3. Buyers, who value the thing you create.
  <><br></br></><><br></br></>
  These three need a market in which to discover each other.  

      </>
    ),
  },
    
  {
    imageUrl: 'img/dreamcatcher.svg',
    background: 0,
    title: (
      <><h1>The Power of Enlightened Self-Interest</h1>    </>
    ),
    description: (
      <>
        An efficient market is characterized by complete, costless, and instant transmission of information.  Where information is withheld, the market becomes less efficient.  In addition, an efficient market is one where each actor pursues what's reasonable for them.

Our current practice in nurturing Innovation withholds information in all directions and creates perverse incentives:
<><br></br></><><br></br></>
For Investors, it's often opaque whether the actions of Builders are correct and complete.  Quite reasonably the result is a reliance of reporting and inspection.  Share option schemes are often used to align incentives, but for the highest skilled Builders these rarely work.
<><br></br></><><br></br></>
For Builders, the actions of Investors and Boards are often opaque and counter intuitive, given that it is the Builders who can see most clearly how to build the product they've been asked to build.  From this point of view it can often seem like managers, C-Level and shareholders are at odds with the challenges of creating new products.  Moreover, new ideas can be hidden, as employment contracts often hold clauses for the transfer of all intellectual output from the Builder to the Investor.
<><br></br></><><br></br></>
For Buyers, the information gradient is most extreme.  A manufacturing company with a clear need in their process, who believes software can help, must either buy off-the-shelf, and get a product that comes close to doing what's required, but doesn't do exactly what's required, or runs the gauntlet of hiring a software company who knows nothing about their business, but a lot about software, when the Buyer knows a lot about the business, but nothing about software.

In each case, the market falls far short of complete, costless and instant transmission of information.  
      </>
    ),
  },

    {
    background: 0,
    title: (
      <><h1>This is where Dreamcatcher comes in</h1>    </>
    ),
    description: (
      <>
The Dreamcatcher aims to provide an efficient innovation market that has, as far as possible with the technology we now have, a complete, costless and instant transmission of information between actors in an Innovation Marketplace:
<><br></br></><><br></br></>
We start by providing a decentralised perpetual record of events using Blockchain technology.  This makes trusted Transparency possible.
<><br></br></><><br></br></>
That Transparency of events leads to the possibility to track Reputation - what you have done in the past matters, and can't be spun on a CV or LinkedIn Profile.  Instead of a Profile, you now have Reputation-as-an-asset.
<><br></br></><><br></br></>
Reputation-as-an-asset breads Fairness - all actors seek the best for themselves through their actions, but moderate with an eye to what the wider community would see as reasonable.  The result is an increasingly even playing-field through the recognition that Fairness, not greed, is good.
<><br></br></><><br></br></>
Because Fairness incentivises more to join the network, a permissionless network where you can work, invest, invent, and make a living, and where Reputation is valued, is likely to draw in more and higher skilled people than one that is mistrusted or zero-sum.  One-to-one deals can never defeat the power of Network effects. 
<><br></br></><><br></br></>
A larger Network then provides further efficiencies, where those who are best placed to contribute are on the same platform and can be identified or notified.  It's unlikely when you hire someone for a job that they're the best in the world for this task, or even the best in your City - if you pay by output with a large enough network, it may well be that it's completed by the best, at a fraction of the cost.
<><br></br></><><br></br></>
And having made available deep experts, or niche Investors, or specialist Buyers, in a large network Dreamcatcher aims to align all of these incentives through Ambient Attribution, where permanent and potentially generational income streams can be provided based on the value and utility of what was produced, mediated by high Reputation QA, relying only on the permanent record of events which all can agree on.
<><br></br></><><br></br></>
Finally, Dreamcatcher recognises that the various roles - Builders, Buyers, Investors - are not mutually exclusive.  Each person on the network from time to time puts on these different hats.  A Builder may take a job at below their normal rate - essentially giving the delta in investment; an Investor may contribute market experience, becoming a Builder; a Buyer may identify a previously unknown need and putting money up for it to be solved, becoming both a Builder and an Investor.  
<><br></br></><><br></br></>
Dreamcatcher aims to incentivise all three in exactly the same way, in a manner than cannot be disputed, using automation to remove needless friction, in a framework that aims to maximise network size along with the promotion of Reputation as an highly valuable asset, which promotes Fairness, which maximises network size....
<><br></br></><><br></br></>
That's the Dream we aim to catch.

      </>
    ),
  },

    {
    background: 0,
    title: (
      <><h1>The Building Blocks of the Dreamcatcher</h1>    </>
    ),
    description: (
      <>
To do all this, we've build a framework.  It's open source, and we encourage others to build on these ideas, and in the mean time we've put out what we think is necessary to catch that dream.

      </>
    ),
  },
 {
    background: 0,
    title: (
      <><h2>Ambient Attribution</h2>    </>
    ),
    description: (
      <>

Ambient Attribution aims to be a fair, transparent and data-driven process for distributing profit.
<><br></br></><><br></br></>
We don't know what fair is.  Fair could be different in different situations, with different perceptions. 
<><br></br></><><br></br></>
Dreamcatcher therefore allows different Ambient Attribution Formula to be proposed and used while enforcing the transparent execution of the Formula based solely on the data of who owns which NFTs and what profit they generate.
<><br></br></><><br></br></>
Ambient Attribution therefore provides predictability, and removes loop holes, rug-pulls and the dangers of information gradients.
<><br></br></><><br></br></>
By placing these formula in a marketplace, we also encourage the market to decide which attribution algorithms is most popular between all parties.  Market forces will be the final decision maker as to which is most fair.

      </>
    ),
  },

    {
    background: 0,
    title: (
      <><h2>Reputation</h2>    </>
    ),
    description: (
      <>
NFTs and Ambient Attribution provide a transparent and permanent dataset, but not every interaction can be automated.  Behaviour on the Dreamcatcher is also a vital factor.
<><br></br></><><br></br></>
We therefore record forever how each actor behaves on the system and make that information available to all.  
<><br></br></><><br></br></>
It's our belief that a good Reputation for actual work completed, investment wisely deployed and fair dealing will be one of the most valuable assets to actors on the Dreamcatcher.  It removes the possibility of shadey practices, back-room dealing and, again, the abuse of information gradients.
<><br></br></><><br></br></>
If you've made a good living on the Dreamcatcher, and if all of your actions are visible, the incentive will be to protect that Reputation by continuing to be a good actor.
<><br></br></><><br></br></>
The combination of Ambient Attribution and Reputation aims to remove the traditional loop-holes that can be used to scam people, and removes the incentive for actors to use their position or one-sided information to force others to be fleeced.

      </>
    ),
  },

    {
    background: 0,
    title: (
      <><h2>Arbitration</h2>    </>
    ),
    description: (
      <>
Anyone on the Dreamcatcher can propose themselves as an Arbiter.  Arbitration is a mechanism for providing a final decision that requires human judgement, and depends on that judgement being impartial, fair and transparent.
<><br></br></><><br></br></>
Arbitration is used to provide a trigger yes/no decision into the various steps in the process of going from Idea to Product.  
<><br></br></><><br></br></>
We'll go into each of these below, but it's used in deciding whether or not escrowed funds should be released from an Investor to a Builder on completion of an Output, in deciding whether the quality of a proposed Idea or Request is enough to enter a Pool, and to provide a decision on the application of the DPL in a particular circumstance. 
<><br></br></><><br></br></>
Importantly, Arbiters are independent of the actors interacting on the Dreamcatcher, are agreed in advance, and are incentivised through their Reputation to be balanced and fair.
<><br></br></><><br></br></>
Anyone can propose themselves as an Arbiter.  Arbiters get paid just as any other work done on an output - their contribution is vital, is recorded, and is paid through Ambient Attribution.
 
      </>
    ),
  },

    {
    background: 0,
    title: (
      <><h2>Escrow</h2>    </>
    ),
    description: (
      <>
One of the main responsibilities of Artbiters is to judge when an escrow trigger has been met.
<><br></br></><><br></br></>
Escrow is used to give confidence to Builders that they will get paid if they complete an output, and to give confidence to Investors that what they've put money against to have done is actually done.
<><br></br></><><br></br></>
Escrow is used in combination with Requests or Ideas.  It's there to allow Investors to target their investment, based on their judgement of the merits of the output, by putting up a 'bounty' linked to a Request or Idea.  
<><br></br></><><br></br></>
The Request or Idea can be fulfilled by anyone, without further negotiation, and then claimed by submitting the output that the Request or Idea asks for.  This output is then put to an Arbiter who provides a yes/no answer, feedback if no, and can release the escrowed funds.
      </>
    ),
  },


    {
    background: 0,
    title: (
      <><h2>Requests</h2>    </>
    ),
    description: (
      <>
Requests are a method of stating as clearly as possible a pure problem that needs to be solved, and optionally to put up an escrow to anyone who can solve that problem.
<><br></br></><><br></br></>
They're intended to avoid solutioneering - a Request should not hint or propose any kind of solution.  Rather, they state the parameters of the problem (ie what an acceptable solution needs to fall within), then leaves it up to the Dreamcatcher community to propose how to solve that problem through submitting Ideas.
<><br></br></><><br></br></>
Requests need to state pure problems if they're to harness the full power of Innovation.  E.g it's one thing to say "I need a screwdriver".  It's an entirely different thing to say "I need to get this screw out."
<><br></br></><><br></br></>
To help maintain this pure problem statement, authors of Requests that are intended to be entered into Pools need to pass QA Arbitration, which is there to help formulate the Request in as open a way as possible while keeping the original objective in sight.
      </>
    ),
  },

    {
    background: 0,
    title: (
      <><h2>Ideas</h2>    </>
    ),
    description: (
      <>
Ideas can be responses to Requests, or can be standalone.
<><br></br></><><br></br></>
An Idea is a specific solution or approach to a perceived problem.  That is, unlike Requests that state pure problems, Ideas are specific solutions and can be built directly.
<><br></br></><><br></br></>
Ideas can also attract investment.  An Investor may read an Idea, see it's potential, and put money behind it because they beleive, once built, it will attract profit.  That money is then escrowed and available to any Builder to pursue.
<><br></br></><><br></br></>
Ideas can be nested, forked, altered, merged and combined.  The NFT outputs from the work done to complete the Ideas can similarly follow this nesting, combination etc.  Because the owners of those NFTs are known and tracked, and profits raised flow through Ambient Attribution, this allows reuse and recombination without permission, knowing that all will receive their fair share.

     </>
    ),
  },


    {
    background: 0,
    title: (
      <><h2>The Pool Process</h2>    </>
    ),
    description: (
      <>
Pools are there to ensure clarity of thought in Requests and Ideas, and a common legal and license environment enabling permissionless work and investment.
<><br></br></><><br></br></>
Once a Request or Idea passes through the Abriter's QA that's been set by the Pool it becomes available for investment based on the license stated by the Pool.  
<><br></br></><><br></br></>
This removes the need to negotiate one to one agreements, and removes the risk of an information gradient between parties in the agreement.  It also provides license protection for reuse.
<><br></br></><><br></br></>
There can be any number of Pools.  Each Pool is free to state it's own license and legal framework, it's own QA standards and its own Ambient Attribution Algo.  We've created one to start with, but expect that market forces again will show which combination of these is best fit.
     </>
    ),
  },
]


const badgesMap = {
  ctf: <span class="badge badge--danger">CTF</span>,
  service: <span class="badge badge--primary">service</span>,
}
function Call_out({ imageUrl, path, title, description, badges = [] }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4 dreamcatcher_callout_padding', styles.feature)}>
      {imgUrl && (
        <Link className="text--center" to={useBaseUrl(path)}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </Link>
      )}
      <h3>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted
          )}
          to={useBaseUrl(path)}
        >
          {title}
        </Link>
      </h3>
      {badges.map((name) => (
        <span>{badgesMap[name]} </span>
      ))}
      <p>{description}</p>
    </div>
  )
}

function Head_Banner({ imageUrl, path, title, description, badges = [] }) {
    const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const imgUrl = useBaseUrl(imageUrl)
  return (

    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      {imgUrl && (
        <Link className="text--center" to={useBaseUrl(path)}>
          <img src={imgUrl} alt={title} />
        </Link>
      )}
      <h1>
        {description}
      </h1>
      
      <p></p>
    </div>
  )
}

function Info({ imageUrl, path, title, description, badges = [], background }) {
    const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const imgUrl = useBaseUrl(imageUrl)
    if (background==1) {

      return (
    <>

      {title}
        <div className={clsx('hero hero--primary', styles.heroBanner2)}>

          {imgUrl && (
            <Link className="text--center" to={useBaseUrl(path)}>
              <img src={imgUrl} alt={title} />
            </Link>
        )}
         {title}

          {description}

        </div>
           </>
      )
    }
    else {

            return (
    <>
      {title}

        <div className={clsx('hero hero--primary', styles.heroBanner2)}>
          
        
          {description}
        
              {imgUrl && (
            <Link className="text--center" to={useBaseUrl(path)}>
              <img src={imgUrl} alt={title} />
            </Link>
        )}
          <p></p>
        </div>
               </>
      )
    }

}

function Briefing() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title} Briefing`}
      description="The various ways contribution can be made to the Dreamcatcher"
    >

   {head_banners && head_banners.length > 0 && (
          <header className={styles.heroBanner}>
            <div className="container">
              <div className="row">
                {head_banners.map((props, idx) => (
                  <Head_Banner key={idx} {...props} />
                ))}
              </div>
            </div>
          </header>
 )}
      <main>
      {call_outs && call_outs.length > 0 && (
          <section className={'dreamcatcher_callout_alignment', styles.features}>
            <div className="container">
              <div className="row">
                {call_outs.map((props, idx) => (
                  <Call_out key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        {info_sections && info_sections.length > 0 && (
          <section>
            <div className="container">
   

              <div className="row">
          
                {info_sections.map((props, idx) => (
                  <Info key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>


        )}
              {call_outs && call_outs.length > 0 && (
          <section className={'dreamcatcher_callout_alignment', styles.features}>
            <div className="container">
              <div className="row">
                {call_outs.map((props, idx) => (
                  <Call_out key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Briefing
