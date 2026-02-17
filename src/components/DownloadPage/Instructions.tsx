const instructions = {
	Windows: (
		<div
			style={{
				width: "80%",
				padding: "1rem",
				backgroundColor: "#F2F5F8",
				color: "#0C3245",
				borderRadius: "1rem",
				border: "3px solid var(--titleColor)",
			}}
		>
			<p>• Télécharger le .zip ci-dessous</p>
			<p>• Extraire le zip</p>
			<p>• Exécuter le fichier AlgoForge.exe</p>
		</div>
	),
	Mac: (
		<div
			style={{
				width: "80%",
				padding: "1rem",
				backgroundColor: "#F2F5F8",
				color: "#0C3245",
				borderRadius: "1rem",
				border: "3px solid var(--titleColor)",
			}}
		>
			<p>• Télécharger le .dmg ci-dessous</p>
			<p>• Ouvrir le .dmg, puis glisser l'application dans /Applications</p>
			<p>• Ouvrez l'application</p>
		</div>
	),
	Linux: (
		<div
			style={{
				width: "80%",
				padding: "1rem",
				backgroundColor: "#F2F5F8",
				color: "#0C3245",
				borderRadius: "1rem",
				border: "3px solid var(--titleColor)",
			}}
		>
			<p>• Télécharger le .zip ci-dessous</p>
			<p>• Extraire le zip</p>
			<p>• Exécuter le fichier AlgoForge</p>
		</div>
	),
};

export default instructions;
