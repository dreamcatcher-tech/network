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
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
 Accelerate the time to market by using the work that already exists.  Build on Open Source knowing that the rights of all contributors are ensured, and they'll share fairly in the benefits.   </>
    ),
  },
  {
    title: 'start-up-as-code',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Remove the overhead of constantly re-inventing the wheel when starting up a traditional company by working within a pre-agreed framework that's designed and certified once, automated in code, and used by all.      </>
    ),
  },
  {
    title: 'Forward App Store',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Purchase applications that do not exist yet, that you don't pay for until they do, and earn you upside when they're reused.
      </>
    ),
  },
  {
    title: 'Algorithmic Cap-Table',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
From micro to macro investments, invest time or money behind good ideas, knowing who's behind them, and receive algorithmically your fair return.
      </>
    ),
  },
  {
    title: 'Perputual Equity',
    imageUrl: 'img/undraw_personal_finance_tqcd.svg',
    description: <>Earn NFTs for every piece of work, every investment, every purchase and every collaboration. Own those as hard assets forever and share in the benefits whenever and forever how long they're used .</>,
  },
]


const hero_02 = [
  {

    description: <><h1>Investors</h1>Learn how to harness the power of a business network without limits, target investment in exactly the right place and have complete transpareny on how your cash is being used.</>,
  },
    {
    description: <><h1>Builders</h1>Learn how to contribute from wherever you are in the areas you're most skilled in, knowing that you'll own and profit from the work you do.</>,
  },
    {
    description: <><h1>Buyers</h1>Learn more about forward apps and custom functions and custom service - benefiting from the need you have without the risk of paying for software developing, or the constraints of Off-the-Shelf packages.</>,
  },
]

const hero_03 = [
  {
    description: <><h1>Investors</h1>Learn how to harness the power of a business network without limits, target investment in exactly the right place and have complete transpareny on how your cash is being used.</>,
  },
    {
    description: <><h1>Builders</h1>Learn how to contribute from wherever you are in the areas you're most skilled in, knowing that you'll own and profit from the work you do.</>,
 
  },
    {
    description: <><h1>Buyers</h1>Learn more about forward apps and custom functions and custom service - benefiting from the need you have without the risk of paying for software developing, or the constraints of Off-the-Shelf packages.</>,
  

  },
]

const hero_04 = [
  {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },  {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },
    {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },
]

const hero_05 = [
  {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },  {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },
    {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
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
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/overview/')}
            >
              Get Started
            </Link>
          </div>
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
        {hero_02 && hero_02.length > 0 && (
          <section className={styles.hero_02}>
            <div className="container">
            <h1>Dreamcatcher</h1>
           
            <h1> The most transparent, efficient and fair marketplace for ideas </h1>
              
          
            </div>
          </section>
        )}
        {hero_03 && hero_03.length > 0 && (
          <section className={styles.hero_03}>
            <div className="container">
            <h1> Get Involved </h1>
              <div className="row">
                {hero_03.map((props, idx) => (
                  <Feature key={idx} {...props} />

                ))}
              </div>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/overview/')}
            >
              Learn more
            </Link>
            </div>
          </section>
        )}
       
        {(
          <section className={styles.hero_05}>
            <div className="container">
            <h1> Get involved </h1>
             <center><img src="img/dreamcatcher.svg"/></center>
            <center><Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/overview/')}
            >
              Learn more
            </Link></center>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
