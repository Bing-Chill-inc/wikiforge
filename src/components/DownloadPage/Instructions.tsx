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
			<p>• Exécuter le fichier .exe</p>
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
			<p>• Télécharger le .zip ci-dessous</p>
			<p>• Extraire le zip, puis glisser le .app dans /Application</p>
			<p>• Ouvrez un terminal et exécutez la commande suivante:</p>
			<div
				style={{
					backgroundColor: "#0C3245",
					color: "white",
					padding: "0.5rem",
					borderRadius: "0.5rem",
					position: "relative",
				}}
			>
				xattr -d com.apple.quarantine /Applications/algoforge-electron.app/
				<svg
					style={{
						width: "1rem",
						height: "1.5rem",
						position: "absolute",
						right: "0.5rem",
						top: "50%",
						padding: "0.25rem",
						translate: "0 -50%",
						cursor: "pointer",
					}}
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => {
						navigator.clipboard.writeText(
							"xattr -d com.apple.quarantine /Applications/algoforge-electron.app/"
						);
						alert("Copié dans le presse-papier");
					}}
				>
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
						<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
					</g>
				</svg>
			</div>
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
			<p>• Exécuter le fichier algoforge-electron</p>
		</div>
	),
};

export default instructions;
