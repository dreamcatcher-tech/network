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
      <><h1>Why invest on the Dreamcatcher Platform?</h1>    </>
    ),
    description: (
      <>
        Dreamcatcher is designed to eliminate the inefficiencies in the Innovation Market.
<><br></br></><><br></br></>
    We believe that most of the inefficiencies in building a new product arise from:
<><br></br></><><br></br></>
    1. The difficulty in targetting investment in exactly the place that's needed,<><br></br></>
    2. The restrictions imposed by personal networks rather than world-wide networks,<><br></br></>
    3. A misalignment of the market demand with what the product provides, <><br></br></>
    4. A misalignment of incentives between those who are building that product and those who are paying for it to be built.<><br></br></>
    5. A lack of transparency of who has done what, where the money has been spent, who deserves reward and who doesn't.<><br></br></>
<><br></br></>
 
      </>
    ),
  },


  {
    imageUrl: 'img/undraw_to_do_list_re_9nt7.svg',
    background: 1,
    title: (
      <><h1>Dreamcatcher...</h1>    </>
    ),
    description: (
      <>

    1. Allows for investment to be attached, through escrow, to the production on individual outputs, putting the money exactly where it's needed.<><br></br></>
    2. Removes the barriers of personal investor networks, or the need for recruitment agencies, by providing a permissionless world-wide platform. <><br></br></>
    3. Incentivises market demand discovery through giving buyers an upside for articulating what they need, <><br></br></>
    4. Encourages the alignment of incentives through Ambient Attribution, a programable method of distributing the rewards from a project based on who did what, and how valuable their contribution turned out to be, and,<><br></br></>
    5. Records every output, down to the fine scale of individual actions during a project, and ensures a permanent and transparent record.<><br></br></>
<><br></br></>
      </>
    ),
  },
  {
    background: 0,
    description: (
      <>

    Our argument is that, by removing as much friction as possible, projects built and sold on Dreamcatcher will outperform projects built in the traditional format developed in the 17th Century and still followed today.
<><br></br></>
      </>
    ),
  },
    
  {
    imageUrl: 'img/undraw_stock_prices_re_js33.svg',
    background: 0,
    title: (
      <><h1>How does Dreamcatcher do this?</h1>    </>
    ),
    description: (
      <>

            Dreamcatcher is built on the concept of Ambient Attribution.  
<><br></br></><><br></br></>
    Ambient Attribution ensures everyone involved knows that they will get their fair share of any and all rewards coming from the completion of a task.  Those tasks can be big or small.  It can involve a Buyer suggesting a feature, an innovator proposing a completely new product, an investor taking an early position on a great new idea - it's the impact of each contribution that dictates the Algorithmic Cap Table.
<><br></br></><><br></br></>
    That Algorithmic Cap Table is guaranteed in code, and ensures that all incentives, throughout the whole project team, are pointing in the same direction.
<><br></br></><><br></br></>
    Ambient Attribution ensures transparency; with transparency, an Investor can be sure that the investment put forward is being spent on what matters.        </>
    ),
  },
    {
    imageUrl: 'img/undraw_treasure_of-9-i.svg',
    background: 1,
    title: (
      <><h1>What is the mechanism of investment?</h1>    </>
    ),
    description: (
      <>
      Investment within the Dreamcatcher is done within the structure of a Pool.  
<><br></br></><><br></br></>
    A Pool is akin to a club, where all within the Pool agree to be held by the rules (e.g. license agreements, contracts), agree to the production process for that pool, and can have confidence when doing business with others in the Pool that all will be conducted as you expect and as you've signed up to do.
<><br></br></><><br></br></>
    Investment in the Dreamcatcher involves putting forward money against a specific output - a bounty that is paid when the work is completed.  
<><br></br></><><br></br></>
    Investment may be simply between an investor and builder, but more often is through a Pool.  A Pool is a service that provides off-the-shelf legal contracts to protect all parties, and guarantees the quality of work by providing a QA service that checks the work against what was agreed, and releases the escrow if the work has been completed. 
<><br></br></><><br></br></>
    Investors can therefore fund an Idea in a Pool confident that that investment will only be spent when the outputs needed to realise that Idea are completed.
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
