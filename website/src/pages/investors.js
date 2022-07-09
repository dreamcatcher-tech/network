import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const call_outs = [
  {
    title: 'For Do-ers',
    path: 'builders/',
  },
  {
    title: 'For Buyers',
    path: 'buyers/',
  },
  {
    title: 'Funder Deep Dive',
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
        Business v2.0

      </>
    ),
  },
]

const info_sections = [

  {
    imageUrl: 'img/undraw_financial_data_re_p0fl.svg',
    background: 0,
    title: (
      <><h1>Funds in, Software out</h1>    </>
    ),
    description: (
      <>
        As a Funder you want to see returns for the capital you deploy, with minimal waste.
<><br></br></><><br></br></>
To do this, you need to know that your funds are being cautiously and well spent, by skilled people, and that the Product being produced is needed and will be bought.
<><br></br></><><br></br></>
Dreamcatcher brings those together:
<><br></br></><><br></br></>
    1. Through Packetisation, funds are only released for finished Packets of Software, independently verified through QA.  Your committment is therefore only to the escrow, and you can pull out at any time and retain Attribution for what was successfully produced.<><br></br></>
    2. Open Collaboration provides access to more highly skilled people.  Through Attribution you're funding results - Packets - not time.  This attracts the best who can do more in less time, and can therefore afford to specialise.<><br></br></>
    3. The Forward App Store indicates a real need from a specific Buyer, with aggregation indicating wider demand. A Buyer may also join you in Funding the Product, sharing the risk and reward. <><br></br></>
 <><br></br></>
 
      </>
    ),
  },


 
    
  {
    imageUrl: 'img/undraw_stock_prices_re_js33.svg',
    background: 1,
    title: (
      <><h1>How does Dreamcatcher do this?</h1>    </>
    ),
    description: (
      <>

            Dreamcatcher is built on the concept of Attribution.  
<><br></br></><><br></br></>
    Attribution ensures everyone involved knows that they will get their fair share of any and all rewards coming from the completion of a task.  Those tasks can be big or small.  It can involve a Buyer suggesting a feature, a Member proposing a completely new product, a Funder taking an early position on a great new idea - it's the impact of each contribution that dictates the Algorithmic Cap Table.
<><br></br></><><br></br></>
    That Algorithmic Cap Table is guaranteed in code, and ensures that all incentives, throughout all Members, are pointing in the same direction.
<><br></br></><><br></br></>
    Attribution ensures transparency; with transparency, a Funder can be sure that the fund put forward is being spent on what matters.        </>
    ),
  },
    {
    imageUrl: 'img/undraw_treasure_of-9-i.svg',
    background: 1,
    title: (
      <><h1>What is the mechanism of Funding?</h1>    </>
    ),
    description: (
      <>
      Funding within the Dreamcatcher is done within the structure of a Pool.  
<><br></br></><><br></br></>
    A Pool is akin to a club, where all within the Pool agree to be held by the rules (e.g. license agreements, contracts), agree to the production process for that pool, and can have confidence when doing business with others in the Pool that all will be conducted as you expect and as you've signed up to do.
<><br></br></><><br></br></>
    Funding in the Dreamcatcher involves putting forward money against a specific output - a bounty that is paid when the work is completed.  
<><br></br></><><br></br></>
    Funding may be simply between Funder and Do-er, but more often is through a Pool.  A Pool is a service that provides off-the-shelf legal contracts to protect all parties, and guarantees the quality of work by providing a QA service that checks the work against what was agreed, and releases the escrow if the work has been completed. 
<><br></br></><><br></br></>
    Funders can therefore fund an Idea in a Pool confident that their funds will only be spent when the outputs needed to realise that Idea are completed.
<><br></br></><><br></br></>
    Why pay a team for time when you want to see products made at an assured quality level?
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

    <div className={clsx('hero hero--primary', styles.hero_Investors)}>
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
          <header className={styles.hero_Investors}>
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
              to={useBaseUrl('investors-go-live/')}
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
          <section className={styles.hero_Investors}>
            <div className="container">
 
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonGetInvolved',
                styles.getStarted
              )}
              to={useBaseUrl('investors-go-live/')}
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
