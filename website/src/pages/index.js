import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
const hero_01 = [
  {

    title: 'One blockchain for every idea',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
        Project components are deduplicated, allowing greater reuse between
        active projects, and broader chance of upside for dormant projects
      </>
    ),
  },
  {
    title: 'Deduplication of Effort',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Project components are deduplicated, allowing greater reuse between
        active projects, and broader chance of upside for dormant projects
      </>
    ),
  },
  {
    title: 'Automatic Equity',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Every action in a natively project earns equity in the upside of the
        project through Ambient Attribution
      </>
    ),
  },
  {
    title: 'Forward App Store',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Purchase applications that do not exist yet, and earn upside when they
        do
      </>
    ),
  },
  {
    title: 'Continuous Arbitrary Voting',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Every transaction carries with it a vote on any possible state change in
        the world
      </>
    ),
  },
  {
    title: 'Trading of Equity',
    imageUrl: 'img/undraw_personal_finance_tqcd.svg',
    description: <>Earned equity can be bought and sold with others</>,
  },
]


const hero_02 = [
  {

    description: <><h1>Hero two title</h1> hero_02.01 hero_02.01 hero_02.01 hero_02.01 hero_02.01 hero_02.01 </>,
  },
    {
    description: <><h1>Hero two title</h1> hero_02.01 hero_02.01 hero_02.01 hero_02.01 hero_02.01 hero_02.01 hero_02.01 </>,
  },
    {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },
]

const hero_03 = [
  {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },
    {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
  },
    {
    description: <><h1>Hero three title</h1>  hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02 hero_02  </>,
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
              <h1> Accelerating the pace of Innovation </h1>
              <div className="row">
                {hero_01.map((props, idx) => (
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
        {hero_02 && hero_02.length > 0 && (
          <section className={styles.hero_02}>
            <div className="container">
            <h1> For Investors </h1>
              <div className="row">
                {hero_02.map((props, idx) => (
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
        {hero_03 && hero_03.length > 0 && (
          <section className={styles.hero_03}>
            <div className="container">
            <h1> For Coders </h1>
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
        {hero_04 && hero_04.length > 0 && (
          <section className={styles.hero_04}>
            <div className="container">
            <h1> For Users </h1>
              <div className="row">
                {hero_04.map((props, idx) => (
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
      </main>
    </Layout>
  )
}

export default Home
