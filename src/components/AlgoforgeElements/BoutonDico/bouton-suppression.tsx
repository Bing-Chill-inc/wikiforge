import "./bouton-validation.css";

const BoutonSuppression = () => {
    return (
        <div id="dico-buttons" className="dico-button-wrapper">
            <button
                id="remove-inputs"
                className="secondaryButton"
                title="Supprimer la variable"
            >
                Supprimer
            </button>
        </div>
    );
};

export default BoutonSuppression;
