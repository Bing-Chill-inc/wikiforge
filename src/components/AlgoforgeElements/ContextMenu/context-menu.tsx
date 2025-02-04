import "./context-menu.css";

const ContextMenu = () => {
	return (
		<div className="menu-contextuel">
			<div className="element-menu-keyboard-tip">
				<p>Annuler</p>
				<span>⌘Z</span>
			</div>
			<div className="element-menu-keyboard-tip">
				<p>Rétablir</p>
				<span>⌘Y</span>
			</div>
			<div className="element-menu-keyboard-tip">
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
};

export default ContextMenu;
