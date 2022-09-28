import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'


const call_outs = [
  {
    title: 'The Creation Process',
    path: 'pool/Pool_Process',
    imageUrl: 'img/undraw_lightbulb_moment.svg',
    description: (
      <>
        Learn more about the process of using Dreamcatcher to go from an mote of dust as an idea to a product in the real world.
      </>
    ),
  },
  {
    title: 'Dreamcatcher Gateway',
    path: 'pool/',
    imageUrl: 'img/undraw_gateway.svg',
    description: (
      <>
        The first Dreamcatcher Pool.
      </>
    ),
    badges: ['ctf'],
  },
  {
    title: 'Dust',
    path: 'dust/',
    imageUrl: 'img/undraw_playing_cards_cywn.svg',
    description: (
      <>
        The place where Ideas go to be listened to.
      </>
    ),
    badges: ['service'],
  },
]

const head_banners = [

  {
    title: 'Dust',
    path: 'dust/',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
        The place where Ideas go to be listened to.
      </>
    ),
  },
]

const info = [

  {
    title: 'Dust',
    path: 'dust/',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
        The place where Ideas go to be listened to.
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
    <div className={clsx('col col--4', styles.feature)}>
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

function Info({ imageUrl, path, title, description, badges = [] }) {
    const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const imgUrl = useBaseUrl(imageUrl)
  return (

    <div className={clsx('hero hero--primary', styles.heroBanner)}>

      <h1>
        New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here 
        New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here 

        New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here New info here 
      </h1>
      
      <p></p>
    </div>
  )
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
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {call_outs.map((props, idx) => (
                  <Call_out key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}


        )}
      </main>
    </Layout>
  )
}

export default Briefing
