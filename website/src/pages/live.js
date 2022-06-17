import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const apps = [
  {
    title: 'The Creation Process',
    imageUrl: 'img/undraw_lightbulb_moment.svg',
    description: (
      <>
        Learn more about the process of using Dreamcatcher to go from an mote of dust as an idea to a product in the real world.
      </>
    ),
  },
  {
    title: 'Dreamcatcher Gateway',
    imageUrl: 'img/undraw_candidate.svg',
    description: (
      <>
        The first Dreamcatcher Pool.
      </>
    ),
    badges: ['ctf'],
  },
  {
    title: 'Dust',
    imageUrl: 'img/undraw_playing_cards_cywn.svg',
    description: (
      <>
        The place where Ideas go to be listened to.
      </>
    ),
    badges: ['service'],
  },
]

const badgesMap = {
  ctf: <span class="badge badge--danger">CTF</span>,
  service: <span class="badge badge--primary">service</span>,
}
function Feature({ imageUrl, title, description, badges = [] }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted
          )}
          to={useBaseUrl('dust/')}
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

function Store() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title} App Store`}
      description="The various ways contribution can be made to the Dreamcatcher"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Dreamcatcher Live</h1>
          <p className="hero__subtitle">The live process, in real time</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'dreamcatcher_button buttonGetStarted',
                styles.getStarted
              )}
              to={useBaseUrl('pool/')}
            >
              Learn About the Process
            </Link>
          </div>
        </div>
      </header>
      <main>
        {apps && apps.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {apps.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Store
