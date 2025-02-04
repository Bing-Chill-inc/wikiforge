import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Facile à utiliser",
		Svg: require("@site/static/img/algoforge-facile-a-utiliser.svg").default,
		description: (
			<>Algoforge est un outil simple et intuitif pour vous aider à apprendre et à pratiquer les algorithmes.</>
		),
	},
	{
		title: "100% open source et gratuit",
		Svg: require("@site/static/img/algoforge-open-source.svg").default,
		description: (
			<>
				Algoforge est un projet open source et gratuit. Vous pouvez l'utiliser, le modifier et le distribuer
				librement.
			</>
		),
	},
	{
		title: "Rapide et performant",
		Svg: require("@site/static/img/algoforge-rocket.svg").default,
		description: (
			<>
				Algoforge est conçu pour être rapide et performant. Dites adieu aux pages de chargement interminables.
				Notre application charge en <code>16ms</code>.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
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
