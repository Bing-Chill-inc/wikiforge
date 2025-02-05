import { useRef } from "react";
import "./invite-bornes.css";

interface InviteBornesProps {
	variable: string;
	borneInf: string;
	borneSup: string;
	pas: string;
	ordre: string;
	setVariable: (value: string) => void;
	setBorneInf: (value: string) => void;
	setBorneSup: (value: string) => void;
	setPas: (value: string) => void;
	setOrdre: (value: "croissant" | "décroissant") => void;
	setEstBornée: (value: boolean) => void;
	setInviteOuverte: (value: boolean) => void;
}

const InviteBornes = ({
	variable,
	borneInf,
	borneSup,
	pas,
	ordre,
	setVariable,
	setBorneInf,
	setBorneSup,
	setPas,
	setOrdre,
	setEstBornée,
	setInviteOuverte,
}: InviteBornesProps) => {
	const variableInputRef = useRef<HTMLInputElement>(null);
	const borneInfInputRef = useRef<HTMLInputElement>(null);
	const borneSupInputRef = useRef<HTMLInputElement>(null);
	const pasInputRef = useRef<HTMLInputElement>(null);
	const ordreSelectRef = useRef<HTMLSelectElement>(null);
	return (
		<div className="invite-bornes-pour-si">
			<label style={{ gridArea: "1 / 1;" }}>Pour</label>
			<input
				placeholder="Indice à itérer"
				style={{ gridArea: "1 / 2 / auto / span 3" }}
				defaultValue={variable}
				ref={variableInputRef}
			/>
			<label style={{ gridArea: "2 / 1" }}>allant de</label>
			<input
				placeholder="Borne inférieure"
				style={{ gridArea: "2 / 2" }}
				defaultValue={borneInf}
				ref={borneInfInputRef}
			/>
			<label style={{ gridArea: "2 / 3" }}>à</label>
			<input
				placeholder="Borne supérieure"
				style={{ gridArea: "2 / 4" }}
				defaultValue={borneSup}
				ref={borneSupInputRef}
			/>
			<label style={{ gridArea: "3 / 1" }}>avec un pas</label>
			<select style={{ gridArea: "3 / 2" }} defaultValue={ordre} ref={ordreSelectRef}>
				<option value="croissant">croissant</option>
				<option value="décroissant">décroissant</option>
			</select>
			<label style={{ gridArea: "3 / 3" }}>de</label>
			<input placeholder="Pas" style={{ gridArea: "3 / 4" }} defaultValue={pas} ref={pasInputRef} />
			<div className="actionButtons">
				<button
					className="primaryButton"
					onClick={() => {
						setVariable(variableInputRef.current?.value || "");
						setBorneInf(borneInfInputRef.current?.value || "");
						setBorneSup(borneSupInputRef.current?.value || "");
						setPas(pasInputRef.current?.value || "");
						setOrdre(ordreSelectRef.current?.value as "croissant" | "décroissant");
						setEstBornée(true);
						setInviteOuverte(false);
					}}
				>
					Valider
				</button>
				<button
					className="secondaryButton"
					onClick={() => {
						setEstBornée(false);
						setInviteOuverte(false);
					}}
				>
					Non borné
				</button>
			</div>
		</div>
	);
};

export default InviteBornes;
