import React from 'react';
import clsx from 'clsx';
// eslint-disable-next-line import/no-unresolved
import Layout from '@theme/Layout';
// eslint-disable-next-line import/no-unresolved
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageFeatures from '../components/HomepageFeatures';
import byLundegaard from '../../static/by-lundegaard.png';
import { Map, MapProvider, MouseControl } from '../../../src';

import styles from './index.module.css';

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description="Description will go into a meta tag in <head />"
		>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<p className="hero__subtitle">
						<img src={byLundegaard} alt="by lundegaard" width="170" />
					</p>
				</div>
			</header>
			{/* TODO: This style should not be necessary. Fix in library */}
			<section className={styles.sMap}>
				<MapProvider center={{ lat: 50, lng: 14 }}>
					<Map>
						<MouseControl />
					</Map>
				</MapProvider>
			</section>
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}