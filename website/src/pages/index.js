import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const hero_01 = [
  {

    title: 'Permissionless Collaboration',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
    Dreamcatcher enables permissionless collaboration on Innovations, increasing the available pool of talent worldwide, while ensuring that output is incentivised, not busy-work.     </>
    ),
  },
  {
    title: 'Reuse and Recombination',
    imageUrl: 'img/undraw_reuse.svg',
    description: (
      <>
 Accelerate the time to market by using the work that already exists.  Build on Open Source knowing that the rights of all contributors are ensured, and they'll share fairly in the benefits.   </>
    ),
  },
  {
    title: 'start-up-as-code',
    imageUrl: 'img/undraw_startup.svg',
    description: (
      <>
        Remove the overhead of constantly re-inventing the wheel when starting up a traditional company by working within a pre-agreed framework that's designed and certified once, automated in code, and used by all.      </>
    ),
  },
  {
    title: 'Forward App Store',
    imageUrl: 'img/undraw_appstore.svg',
    description: (
      <>
        Purchase applications that do not exist yet, that you don't pay for until they do, and earn you upside when they're reused.
      </>
    ),
  },
  {
    title: 'Algorithmic Cap-Table',
    imageUrl: 'img/undraw_captable.svg',
    description: (
      <>
From micro to macro investments, invest time or money behind good ideas, knowing who's behind them, and receive algorithmically your fair return.
      </>
    ),
  },
  {
    title: 'Perpetual Equity',
    imageUrl: 'img/undraw_personal_finance_tqcd.svg',
    description: <>Earn NFTs for every piece of work, every investment, every purchase and every collaboration. Own the rights forever and share in the benefits, or sell on as a hard asset.</>,
  },
]


const hero_02 = [
  {
    description: <><h1>Dreamcatcher</h1></>,
  },

]

const hero_Investors = [
  {
    description: <><h1>Targetted Investment</h1>Fund precisely those areas that you believe will have most utility, down to a single line of code.</>,
  },
    {
    description: <><h1>Maximise a world-wide network</h1>Join with micro and macro investors around the world, sharing risk and knowledge.</>,
 
  },
    {
    description: <><h1>Complete Transparency</h1>Know exactly how and where your investment is being spent, and pay only for output, not just time.</>,
  

  },
]

const hero_Builders = [
  {
    description: <><h1>Permissionless Work</h1>Contribute to on-going projects and own a permanent NFT Asset for that work.</>,
  },  {
    description: <><h1>Be the Expert</h1>Tap into your deep specialisation by contributing at exactly the right time to maximise your value.</>,
  },
    {
    description: <><h1>Earn the Rewards</h1>Every commit, every contribution, every comment recorded generates an NFT Tradable Asset that may attract royalties forever.</>,
  },
]

const hero_Buyers = [
  {
    description: <><h1>Forward App Store</h1>You identify your business needs, others build, both share in the rewards.</>,
  },  {
    description: <><h1>Customisation Sniper</h1>An App out there that exists but isn't quite right?  Fund just the function changes you need and have that work done, safe in the knowledge that the licensing and payments are secure.</>,
  },
    {
    description: <><h1>Get Rewarded for Ideas</h1>As the end user you can identify real needs that are probably world wide.  Identify those, and when they're built you'll be credited as a contributor.</>,
  },

]


function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}

      description="Perpetual Invention Machine"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>

        <div className="container">
                    <img src="img/dreamcatcher.svg" />

          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          
        </div>
      </header>
      <main>
        {hero_01 && hero_01.length > 0 && (
          <section className={styles.hero_01}>
            <div className="container">
              <h1> A new Framework for Taking Innovations to Market </h1>
              <div className="row">
                {hero_01.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
 
        {hero_Investors && hero_Investors.length > 0 && (
          <section className={styles.hero_Investors}>
            <div className="container">
            <h1> Investors </h1>

              <div className="row">
                {hero_Investors.map((props, idx) => (
                  <Feature key={idx} {...props} />

                ))}
              </div>
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonInvestors',
                styles.getStarted
              )}
              to={useBaseUrl('investors/')}
            >
              Investors Learn more
            </Link></center>

            </div>
          </section>
        )}

        

       {hero_Builders && hero_Builders.length > 0 && (
          <section className={styles.hero_Builders}>
            <div className="container">
            <h1> Builders </h1>

              <div className="row">
                {hero_Builders.map((props, idx) => (
                  <Feature key={idx} {...props} />

                ))}
              </div>
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonBuilders',
                styles.getStarted
              )}
              to={useBaseUrl('builders/')}
            >
              Builders Learn more
            </Link></center>

            </div>
          </section>
        )}
        {hero_Buyers && hero_Buyers.length > 0 && (
          <section className={styles.hero_Buyers}>
            <div className="container">
            <h1> Buyers </h1>

              <div className="row">
                {hero_Buyers.map((props, idx) => (
                  <Feature key={idx} {...props} />

                ))} 
              </div>
            <center><Link
              className={clsx(
                'dreamcatcher_button buttonBuyers',
                styles.getStarted
              )}
              to={useBaseUrl('buyers/')}
            >
              Buyers Learn more
            </Link></center>

            </div>
          </section>
        )}
        
        {(
          <section className={styles.hero_white}>
            <div className="container">
 

            </div>
          </section>
        )}


 {hero_01 && hero_01.length > 0 && (
          <section className={styles.hero_01}>
            <div className="container">
                          <h1> Dreamcatcher </h1>
              <h1> Maximising Innovation </h1>
             <center><img src="img/dreamcatcher.svg"/></center>
            </div>
          </section>
        )}





      </main>
    </Layout>
  )
}

export default Home