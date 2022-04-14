import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/simple.svg').default,
    description: (
      <>
        Includes guides to simplify common devops processes and more.
      </>
    ),
  },
  {
    title: 'Opinionated',
    Svg: require('@site/static/img/opinionated.svg').default,
    description: (
      <>
        Provides good defaults for different setups which you can customize to fit your specific needs.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/powerful.svg').default,
    description: (
      <>
        Takes inspiration from our ansible guides to automate your recurring tasks.
      </>
    ),
  },
  {
    title: 'Effective',
    Svg: require('@site/static/img/effective.svg').default,
    description: (
      <>
        Lets you focus on the core logic your architecture needs, so you can do more work with less code.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className={clsx('text--center', styles.blockImg)}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
