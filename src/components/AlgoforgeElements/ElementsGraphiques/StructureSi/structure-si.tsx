import { useState } from "react";
import "./structure-si.css";

interface IStructureSi {
	conditions: string[];
	max: number;
}

const StructureSi = ({ conditions, max }: IStructureSi) => {
	const [conditionsState, setConditionsState] = useState(conditions);
	return (
		<div className="structure-si-element">
			<div
				className="triangleGauche triangle"
				onClick={() => {
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
			<div className="conditionContainer">
				{conditionsState.map((condition, index) => (
					<div className="condition-element">
						<button
							className="supprimer"
							onClick={() => {
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
		</div>
	);
};

export default StructureSi;
