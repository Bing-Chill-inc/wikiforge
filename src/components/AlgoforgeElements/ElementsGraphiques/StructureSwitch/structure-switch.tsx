import { useState } from "react";
import "./structure-switch.css";

interface IStructureSwitch {
	conditions: string[];
	max: number;
	variable: string;
}

const StructureSwitch = ({ conditions, max, variable }: IStructureSwitch) => {
	const [conditionsState, setConditionsState] = useState(conditions);
	return (
		<div className="structure-switch-element">
			<div
				className="triangleGauche triangle"
				onClick={() => {
					console.log("conditionsState", conditionsState);
					if (conditionsState.length <= 1) return;
					if (conditionsState[conditionsState.length - 1] === "") {
						setConditionsState(conditionsState.slice(0, conditionsState.length - 1));
					}
				}}
			>
				<span>
					-<span></span>
				</span>
			</div>
			<div
				className="expressionATester"
				contentEditable="true"
				onChange={(e) => (variable = (e.target as HTMLElement).innerText)}
			>
				{variable}
			</div>
			<hr className="diviseurGauche" />
			<div className="conditionContainer">
				{conditionsState.map((condition, index) => (
					<div className="condition-element">
						<button
							className="supprimer"
							onClick={() => {
								if (conditionsState.length <= 1) return;
								setConditionsState(conditionsState.filter((_, i) => i !== index));
							}}
						>
							-
						</button>
						<div
							className="libelle"
							contentEditable="true"
							onChange={(e) =>
								setConditionsState(
									conditionsState.map((c, i) =>
										i === index ? (e.target as HTMLElement).innerText : c
									)
								)
							}
						>
							{condition}
						</div>
						<div className="arrowsWrapper no-render">
							<span
								onClick={() => {
									if (index === 0) return;
									const current = conditionsState[index];
									const previous = conditionsState[index - 1];

									setConditionsState([
										...conditionsState.slice(0, index - 1),
										current,
										previous,
										...conditionsState.slice(index + 1),
									]);
								}}
							>
								←{" "}
							</span>
							<span
								onClick={() => {
									if (index === conditionsState.length - 1) return;
									const current = conditionsState[index];
									const next = conditionsState[index + 1];

									setConditionsState([
										...conditionsState.slice(0, index),
										next,
										current,
										...conditionsState.slice(index + 2),
									]);
								}}
							>
								{" "}
								→
							</span>
						</div>
						<div
							className="ajouterAGauche no-render"
							onClick={() => {
								if (conditionsState.length >= max) return;
								setConditionsState([
									...conditionsState.slice(0, index),
									"",
									...conditionsState.slice(index),
								]);
							}}
						>
							+
						</div>
						<div
							className="ajouterADroite no-render"
							onClick={() => {
								if (conditionsState.length >= max) return;
								setConditionsState([
									...conditionsState.slice(0, index + 1),
									"",
									...conditionsState.slice(index + 1),
								]);
							}}
						>
							+
						</div>
					</div>
				))}
			</div>
			<div
				className="triangleDroit triangle"
				onClick={() => {
					if (conditionsState.length >= max) return;
					setConditionsState([...conditionsState, ""]);
				}}
			>
				<span>
					+<span></span>
				</span>
			</div>
			<hr className="diviseurDroit" />
		</div>
	);
};

export default StructureSwitch;
