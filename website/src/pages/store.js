import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'App Store App',
    imageUrl: 'img/undraw_app_installation.svg',
    description: (
      <>
        The App Store is an application on the App Store. Use this to run your
        own app store, with your own curated or uncurated content. The App Store
        is a subclass of the Package Repository. This is the app you are
        currently browsing 🤯
      </>
    ),
  },
  {
    title: 'dPack Package Repository',
    imageUrl: 'img/undraw_server_cluster.svg',
    description: (
      <>
        Publish and maintain packages of any works of knowledge intended for
        reuse. With reuse comes maintenance, which brings versioning. This is a
        versioned means of managing multiple versions of any works of knowledge,
        provided compiled binaries, source code access, and is part of the
        ambient attribution framework
      </>
    ),
  },
  {
    title: 'The Dreamcatcher',
    imageUrl: 'img/dreamcatcher.svg',
    description: (
      <>
        Like a dream within a dream - this is the application used for inverted
        project management, that as a swarm results in a perpetually fueled
        invention machine. All the applications in this store are created and
        maintained and monetized using the Dreamcatcher app as a distributed
        project management system.
      </>
    ),
  },
  {
    title: 'DOS',
    imageUrl: 'img/undraw_hacker_mind.svg',
    description: (
      <>The Dreamcatcher Operating System - this runs all the applications</>
    ),
  },
  {
    title: 'Reconcile Mail',
    imageUrl: 'img/undraw_mail_sent.svg',
    description: (
      <>
        Email and reconciliation system. As an inverted application there is no
        server, running this app as a client is all that is required.
      </>
    ),
  },
  {
    title: 'SMTP Relay',
    imageUrl: 'img/undraw_files_sent.svg',
    description: (
      <>
        Run your own mail relay to connect to conventional SMTP servers. Email
        was invented in 1971 and is a dominant form of communication today, with
        roughly 300 billion messages sent every day. To connect to this vast but
        archaic network, we need email relays.
      </>
    ),
  },
  {
    title: 'Flowcreator',
    imageUrl: 'img/undraw_in_progress.svg',
    description: (
      <>
        Business workflow modelling tool using statecharts that can view derived
        processes versus planned, and can be used to produce user defined
        workflows to manage their applications and their business.
      </>
    ),
  },
  {
    title: 'Interblock',
    imageUrl: 'img/undraw_connected_world.svg',
    description: (
      <>
        The blockchain protocol of the dreamcatcher. Targeted at terrachain
        capacity and beyond. Needs to be a protocol large enough to hold all the
        worlds data, and reduce it all to a single hash.
      </>
    ),
  },
  {
    title: 'GorillaHost',
    imageUrl: 'img/undraw_programming.svg',
    description: (
      <>
        Runs a block producer at AWS scale and pricing. Use this app to set up
        and manage your own dedicated block producer on AWS infrastructure. You
        can sell spare capacity to other blockchains
      </>
    ),
  },
  {
    title: 'Chain Reputation',
    imageUrl: 'img/undraw_reviews.svg',
    description: (
      <>
        Follow reputation lists, or publish your own derivatives. Used in
        conjunction with block producers to refuse to host any chains with bad
        reputation.
      </>
    ),
  },
  {
    title: 'Brightpay',
    imageUrl: 'img/undraw_credit_card_payment.svg',
    description: (
      <>
        Connect with traditional payment rails in and out, with the added
        precision of dreamcatcher disperments. Use payments as a voice. Put all
        your consumer spending on blockchain. Manage your accounts yourself.
      </>
    ),
  },
  {
    title: 'Justice ex Machina',
    imageUrl: 'img/law.svg',
    description: (
      <>
        The Justice Machine of the Dreamcatcher. Tokenized legal council. The
        interface between the Dreamcatcher and legal institutions of the world.
        Shared knowledge, shared financial burden, shared workload, shared
        reward. Even if ruled against, at least records are everlasting.
      </>
    ),
  },
  {
    title: 'Ideator',
    imageUrl: 'img/undraw_lightbulb_moment.svg',
    description: (
      <>
        The way to capture ideas with irrefutable proof of existence and
        provenance, and attach value to them. Organizes and deduplicates between
        agents
      </>
    ),
  },
  {
    title: 'Witness',
    imageUrl: 'img/undraw_candidate.svg',
    description: (
      <>
        How to make witness statements about how payments should be dispersed.
        How to search them, how to link them in dependency graphs, and allow
        payments to flow thru them
      </>
    ),
  },
]
features.reverse()
function Feature({ imageUrl, title, description }) {
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
          to={useBaseUrl('docs/')}
        >
          {title}
        </Link>
      </h3>
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
          <h1 className="hero__title">App Store</h1>
          <p className="hero__subtitle">The core suite of Dreamcatcher apps</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
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
