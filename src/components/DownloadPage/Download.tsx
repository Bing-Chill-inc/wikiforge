import { useEffect, useState } from "react";
import instructions from "./Instructions";
import styles from "./download-page.module.css";

const AppDownloadPage = () => {
	const [os, setOs] = useState<"Windows" | "Mac" | "Linux">("Windows");
	const [arch, setArch] = useState("x64");

	useEffect(() => {
		const platform = navigator.platform.toLowerCase();
		const userAgent = navigator.userAgent.toLowerCase();

		if (platform.includes("win")) setOs("Windows");
		else if (platform.includes("mac")) setOs("Mac");
		else if (platform.includes("linux")) setOs("Linux");

		if (userAgent.includes("aarch64") || userAgent.includes("arm64")) setArch("ARM64");
		else setArch("x64");
	}, []);

	const extension = os === "Mac" ? "dmg" : "zip";
	const downloadLink = `https://github.com/Bing-Chill-inc/Algoforge-main/releases/latest/download/Algoforge-${os}-${arch}.${extension}`;

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				gap: "2rem",
				backgroundColor: "var(--bgColor)",
				color: "var(--fgColor)",
				borderRadius: "1rem",
				position: "relative",
				padding: "2rem",
			}}
		>
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "4rem" }}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label>Système d'exploitation</label>
					<select
						style={{
							width: "100%",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							border: "3px solid var(--titleColor)",
							background: "transparent",
						}}
						value={os}
						onChange={(e) => setOs(e.target.value as "Windows" | "Mac" | "Linux")}
					>
						<option value="Windows">Windows</option>
						<option value="Mac">MacOS</option>
						<option value="Linux">Linux</option>
					</select>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<label>Architecture</label>
					<select
						style={{
							width: "100%",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							border: "3px solid var(--titleColor)",
							background: "transparent",
						}}
						value={arch}
						onChange={(e) => setArch(e.target.value)}
					>
						<option value="x64">{os == "Mac" ? "Intel" : "x64"}</option>
						<option value="ARM64">{os == "Mac" ? "Apple Silicon" : "ARM64"}</option>
					</select>
				</div>
			</div>

			{instructions[os]}

			<div className={styles.downloadButton} onClick={() => window.open(downloadLink, "_blank")}>
				Télécharger
			</div>
		</div>
	);
};

export default AppDownloadPage;
