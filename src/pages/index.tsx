import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
					<Link className="button button--secondary button--lg" to="/docs/tutorial/intro">
						Comment utiliser Algoforge ?
					</Link>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							gap: "20px",
						}}
					>
						<Link
							style={{
								backgroundColor: "transparent",
								border: "3px solid #eeeeee",
								color: "#eeeeee",
								borderRadius: "999em 0 0 999em",
								width: "350px",
							}}
							className={clsx("button button--secondary button--lg", styles.useButton)}
							to="/download"
						>
							Télécharger Algoforge Desktop
						</Link>

						<Link
							style={{
								backgroundColor: "transparent",
								border: "3px solid #eeeeee",
								color: "#eeeeee",
								borderRadius: "0 999em 999em 0",
								width: "350px",
							}}
							className={clsx("button button--secondary button--lg", styles.useButton)}
							to="https://algoforge.fr"
						>
							Ouvrir Algoforge Web
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`} description="Algoforge: Because your algorithms deserve better.">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
