import { useState } from "react";
import InviteBornes from "./invite-bornes";
import "./structure-iterative-non-bornee.css";

interface IStructureIterative {
	variable: string;
	pas: string;
	borneSup: string;
	borneInf: string;
	ordre: "croissant" | "décroissant";
	estBornée: boolean;
}

const StructureIterative = ({ variable, pas, borneSup, borneInf, ordre, estBornée }: IStructureIterative) => {
	const [inviteOuverte, setInviteOuverte] = useState(false);
	const [variableState, setVariableState] = useState(variable);
	const [pasState, setPasState] = useState(pas);
	const [borneSupState, setBorneSupState] = useState(borneSup);
	const [borneInfState, setBorneInfState] = useState(borneInf);
	const [ordreState, setOrdreState] = useState(ordre);
	const [estBornéeState, setEstBornéeState] = useState(estBornée);

	return (
		<div className="structure-iterative-non-bornee-element" onDoubleClick={() => setInviteOuverte(!inviteOuverte)}>
			<svg version="1.1" id="Boucle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.4 512">
				<g>
					<g>
						<path d="M547.5,319.1c-3.7,6.1-10.3,9.9-17.4,9.9h-79.5c-7.1,0-13.7-3.8-17.4-9.9c-3.7-6.1-3.8-13.7-0.5-20l39.8-74.3    c0.6-1.2,1.4-2.3,2.2-3.3c3.8-4.6,9.5-7.4,15.7-7.4c3.8,0,7.3,1,10.4,2.9c3.1,1.9,5.7,4.5,7.4,7.8l9.5,17.7l30.3,56.6    C551.4,305.4,551.1,313,547.5,319.1z" />
					</g>
					<path d="M502.6,325.2c-1.9,6.8-4.1,13.5-6.5,20C459.8,442.6,366,512,256,512C114.6,512,0,397.4,0,256S114.6,0,256,0   c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-1,0-2,0-3,0.1C433.7,76.8,351.3,19.9,255.6,19.9   C125.2,19.9,19.5,125.6,19.5,256s105.7,236.1,236.1,236.1c106.3,0,196.2-70.3,225.8-166.9H502.6z" />
				</g>
			</svg>
			{estBornéeState && (
				<div className="informationsBornes">
					Pour {variableState} allant <br /> de {borneInfState} à {borneSupState}
					{ordreState === "croissant" && pasState === "1" ? (
						""
					) : (
						<>
							<br />
							{`par pas ${ordreState} de ${pasState}`}
						</>
					)}
				</div>
			)}
			{inviteOuverte && (
				<InviteBornes
					variable={variableState}
					borneInf={borneInfState}
					borneSup={borneSupState}
					pas={pasState}
					ordre={ordreState}
					setVariable={setVariableState}
					setBorneInf={setBorneInfState}
					setBorneSup={setBorneSupState}
					setPas={setPasState}
					setOrdre={setOrdreState}
					setEstBornée={setEstBornéeState}
					setInviteOuverte={setInviteOuverte}
				/>
			)}
		</div>
	);
};

export default StructureIterative;
