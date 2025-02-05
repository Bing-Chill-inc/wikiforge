import { useState } from "react";
import "./procedure.css";

interface IProcedure {
	titre: string;
	données: string;
	résultats: string;
}

const Procedure = ({ titre, données, résultats }: IProcedure) => {
	const [titreState, setTitreState] = useState(titre);
	const [donnéesState, setDonnéesState] = useState(données);
	const [résultatsState, setRésultatsState] = useState(résultats);
	return (
		<div className="procedure-element">
			<div className="containerDPR">
				<div className="donnees">
					<label className="accolades" style={{ display: donnéesState ? "" : "none" }}>
						&#123;
					</label>
					<div
						className="donneesEditable"
						contentEditable="true"
						onBlur={(e) => {
							console.log(e);
							setDonnéesState((e.target as HTMLElement).innerText);
						}}
					>
						{donnéesState}
					</div>
					<label className="accolades" style={{ display: donnéesState ? "" : "none" }}>
						&#125;
					</label>
				</div>
				<div className="nom" contentEditable="true">
					{titreState}
				</div>
				<div className="resultat">
					<label className="accolades" style={{ display: résultatsState ? "" : "none" }}>
						&#123;
					</label>
					<div
						className="resultatEditable"
						contentEditable="true"
						onBlur={(e) => {
							console.log(e);
							setRésultatsState((e.target as HTMLElement).innerText);
						}}
					>
						{résultatsState}
					</div>
					<label className="accolades" style={{ display: résultatsState ? "" : "none" }}>
						&#125;
					</label>
				</div>
			</div>
		</div>
	);
};

export default Procedure;
