import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const call_outs = [
  {
    title: 'For Buyers',
    path: 'docs/Dreamcatcher%20Charter',
  },
  {
    title: 'For Investors',
    path: 'docs/whitepaper',
  },
  {
    title: 'Builder Deep Dive',
    path: 'pool/',

  },
]

const head_banners = [

  {
    title: 'Dust',
    path: 'dust/',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
        Unleashing your potential

      </>
    ),
  },
]

const info_sections = [

  {
    imageUrl: 'img/undraw_design_inspiration_re_tftx.svg',
    background: 0,
    title: (
      <><h1>What is your Talent worth?</h1>    </>
    ),
    description: (
      <>
        What is the value of your work?  Is it just the value of your time?  Most jobs, including gig-work, exchange money for your time and your copyright.  
<><br></br></><><br></br></>
    By selling yourself as timeslices, you also lose a great deal of control.  What if the task takes twice as long?  Or half as long?  Or if there's an entirely novel way to do it that isn't in the jobsheet but you're stopped from pursuing it?  Or worse, you can pursue it but because you're 'on-the-clock' ownership of that idea now belongs to someone else?
<><br></br></><><br></br></>
By selling yourself in timeslices you don't necessarily get the freedom to spot and do what you know is necessary.
<><br></br></><><br></br></>
So many Do-ers would prefer not to sell their time and copyright for a one-off fee.  The most talented want to build software and generate an income stream from how successful it is.
<><br></br></><><br></br></>
But the majority of the job market in software construction doesn't allow that.  
<><br></br></><><br></br></>
You also don't get to self-select jobs that you can make a real impact with.  Those jobs that you can do better than most, maybe even better than everyone, but which come up rarely and when they do, because you're skilled, it takes you less time and so you get paid less.

<><br></br></>
 
      </>
    ),
  },


  {
    background: 1,
    title: (
      <><h1>The Dreamcatcher Way</h1>    </>
    ),
    description: (
      <>
Dreamcatcher works by giving a framework for maximising your own output, reducing barriers to entry, encouraging re-use and recombination of code and by aligning the incentives of all involved.
      </>
    ),
  },
    {
    imageUrl: 'img/undraw_stepping_up_g6oo.svg',
    background: 1,
    title: (
<><h2>Maximising your Value</h2>    </>
    ),
    description: (
      <>
A good job should be rewarded for the output, not the effort.  Wouldn't it be helpful then to get more returns from doing something you're more highly skilled at than others, spend less time doing it, and get paid for what it's worth.
<><br></br></><><br></br></>
Dreamcatcher focuses on this concept; it matches Ideas (a piece of work that others have identified as being useful), with those best placed to contribute to building those Ideas into Products.  
<><br></br></><><br></br></>
It focuses on outputs - finished, useful work - not time.  If you can solve a problem in an hour that takes another Do-er 6 days, then the same level of rewards are due.  
<><br></br></><><br></br></>
It registers those outputs at a micro-level - down to a single commit - and then records your ownership of that output as an NFT.  That NFT is your asset; you may choose to sell the royalty stream from that asset up front if you need the money, split the cost based on your day rate and share the rewards, or turn up without permission, solve the problem and keep the ownership.
<><br></br></><><br></br></>
Perhaps those assets can generate a revenue stream over years or decades - for as long as they're still proving useful.  If you solve a particularly useful problem, that revenue stream could be generational.
<><br></br></><><br></br></>
We call this Ambient Attribution.
<><br></br></>
      </>
    ),
  },
  
  {
    imageUrl: 'img/undraw_interview_re_e5jn.svg',
    background: 0,
    title: (
      <><h2>No More Gatekeepers</h2>    </>
    ),
    description: (
      <>
            Dreamcatcher is built on the concept of Ambient Attribution.  
<><br></br></><><br></br></>
    Ambient Attribution ensures everyone involved knows that they will get their fair share of any and all rewards coming from the completion of a task.  Those tasks can be big or small.  It can involve a Buyer suggesting a feature, an innovator proposing a completely new product, a Funder taking an early position on a great new idea - it's the impact of each contribution that dictates the Algorithmic Cap Table.
<><br></br></><><br></br></>
    That Algorithmic Cap Table is guaranteed in code, and ensures that all incentives, throughout the whole project team, are pointing in the same direction.
<><br></br></><><br></br></>
    Ambient Attribution ensures transparency; with transparency, a Funder can be sure that the funds put forward is being spent on what matters.        </>
    ),
  },
    {
    imageUrl: 'img/undraw_creative_thinking_re_9k71.svg',
    background: 1,
    title: (
      <><h2>Reuse and Recombination</h2>    </>
    ),
    description: (
      <>
One of the other great barriers to making a decent living as an independent Do-er is maximising the utility of your work.  
<><br></br></><><br></br></>
In general, there are very few unique problems out there to be solved.  More usually a solution to a problem can be re-used wherever that problem is felt.
<><br></br></><><br></br></>
Dreamcatcher encourages this reuse by providing an off-the-shelf licensing and legal framework that allows others to use your work without further interaction, while ensuring through Ambient Attribution that you get paid for that re-use.
<><br></br></><><br></br></>
This also works both ways.  Duplication in software development is inefficient.  If a Product only needs 10% new code to be written, why re-write the other 90%?  Someone else has already done that.  Under the same licensing scheme Dreamcatcher allows you to make use of the work of others on new Projects, and ensures that, just as with your own work, they get their fair share should the revenue come.
    </>
    ),
  },

    {
    imageUrl: 'img/undraw_treasure_of-9-i.svg',
    background: 0,
    title: (
      <><h2>Aligning Incentives</h2>    </>
    ),
    description: (
      <>
So Dreamcatcher is a great deal for Do-ers.  But what about the Buyers and Funders?  If this is a zero-sum game then they won't turn up.
<><br></br></><><br></br></>
Code is not the only way to contribute.  A Buyer who identifies a problem in their company that they want solved by software is contributing by clearly identifying that problem.  That's a contribution which should be recognised.
<><br></br></><><br></br></>
Funders willing to back work undertaken to solve a problem are likewise contributing.  That again is a contribution that should be recognised.
<><br></br></><><br></br></>
All of these contributions are considered through Ambient Attribution, secured through the Dreamcatcher License and arbitrated by independent QAs arbiters.
<><br></br></><><br></br></>
Moreover, the reality is that we all, at different times, take on these different hats.  They're not mutually exclusive and neither they should be.  A Do-er who includes a library in their code is a Buyer; a Buyer who offers an escrowed pool of money for something they need is a Funder; a Funder who improves and promotes a good Idea is a Do-er.  There are many ways that the lines between these three are grey.
<><br></br></><><br></br></>
But by making the rules the same for all, everyone's incentives align, reducing the cost and improving the competitiveness of all who contribute.
<><br></br></><><br></br></>
Under Dreamcatcher, you share in the benefits through cooperation.
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

    <div className={clsx('hero hero--primary', styles.hero_Builders)}>
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
          <header className={styles.hero_Builders}>
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
                {(
          <section className={styles.hero_01}>
            <div className="container">
 
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonGetInvolved',
                styles.getStarted
              )}
              to={useBaseUrl('builders-go-live/')}
            >
              Go Live
            </Link></center>
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


                {(
          <section className={styles.hero_Builders}>
            <div className="container">
 
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonGetInvolved',
                styles.getStarted
              )}
              to={useBaseUrl('builders-go-live/')}
            >
              Go Live
            </Link></center>
            </div>
          </section>
        )}




      </main>
    </Layout>
  )
}

export default Briefing
