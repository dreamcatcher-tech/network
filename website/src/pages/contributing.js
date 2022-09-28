import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Write Code',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Making code contributions is open to anybody. Please contact us if you
        are having trouble getting your environment set up, or have any
        questions. You may also read the docs to get started.
      </>
    ),
  },
  {
    title: 'Raise Issues',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Tell us what is wrong with the apps, or with the codebase. This is
        valuable to us. Even helping clarify issues that others have written is
        valuable.
      </>
    ),
  },
  {
    title: 'Fund Issues',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You can put up money directly thru gitcoin or any other system to pay
        money for people to close issues you choose. We will attribute you the
        value of the issue you closed between you and the people who did the
        work.
      </>
    ),
  },
  {
    title: 'Fund the organization',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Funding is managed through an Aragon DAO and is tracked with Inversion
        Tokens, with symbol <code>NVN</code> This is a bonded curve token and is
        open to accredited investors only.
      </>
    ),
  },
  {
    title: 'Write Documenation',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Good clear documentation is essential for onboarding. Please help us
        improve what we have, and suggest anything that might need changing.
      </>
    ),
  },
  {
    title: 'Use the software',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        If you find something useful to use the software for, please let us
        know. We would love to know what problems you had getting set up, and
        what
      </>
    ),
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
      <Link
        className={clsx(
          'button button--outline button--secondary button--lg',
          styles.getStarted
        )}
        to={useBaseUrl('docs/')}
      >
        Get Started
      </Link>
    </div>
  )
}

function Contributing() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (

    <Layout

      title={`${siteConfig.title} Contributing`}
      description="The various ways contribution can be made to the Dreamcatcher"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <img src="img/dreamcatcher.svg" />
          <h1 className="hero__title">Contributing</h1>
          <p className="hero__subtitle">
            Ambient Attribution based ways to contribute
          </p>
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

export default Contributing
