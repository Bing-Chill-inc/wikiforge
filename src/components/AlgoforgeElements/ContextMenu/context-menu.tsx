import "./context-menu.css";
import ElementMenuContextuel from "./types/element-menu";

interface ContextMenuProps {
	elements?: ElementMenuContextuel[];
	selection?: string;
}

const ContextMenu = ({ elements, selection }: ContextMenuProps) => {
	if (!elements) {
		return (
			<div className="menu-contextuel">
				<div className={`element-menu-keyboard-tip ${selection == "Annuler" ? "selected" : ""}`}>
					<p>Annuler</p>
					<span>⌘Z</span>
				</div>
				<div className={`element-menu-keyboard-tip ${selection == "Rétablir" ? "selected" : ""}`}>
					<p>Rétablir</p>
					<span>⌘Y</span>
				</div>
				<div className={`element-menu-keyboard-tip ${selection == "Coller" ? "selected" : ""}`}>
					<p>Coller</p>
					<span>⌘V</span>
				</div>
				<div className="element-menu-compose">
					Ajouter un élément<span>&gt;</span>
					<div className="menu-deroulant">
						<div>Problème</div>
						<div>Procédure</div>
						<div>Structure 'SI'</div>
						<div>Structure 'SWITCH'</div>
						<div>Structure itérative non bornée</div>
						<div>Structure itérative bornée</div>
						<div>Instruction d'arrêt</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="menu-contextuel">
			{elements.map((element) => {
				if (element.sousMenu) {
					return (
						<div className={`element-menu-compose ${selection == element.nom ? "selected" : ""}`}>
							{element.nom}
							<span>&gt;</span>
							<div className="menu-deroulant">
								{element.sousMenu.map((sousElement) => {
									if (sousElement.estTitre) {
										return <h3 key={sousElement.nom}>{sousElement.nom}</h3>;
									}
									return <div key={sousElement.nom}>{sousElement.nom}</div>;
								})}
							</div>
						</div>
					);
				}
				return (
					<div
						key={element.nom}
						className={`element-menu${element.keyBoardTip ? "-keyboard-tip" : ""} ${
							selection == element.nom ? "selected" : ""
						}`}
					>
						<p>{element.nom}</p>
						{element.keyBoardTip && <span>{element.keyBoardTip}</span>}
					</div>
				);
			})}
		</div>
	);
};

export default ContextMenu;
