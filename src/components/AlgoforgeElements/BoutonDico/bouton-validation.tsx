import "./bouton-validation.css";

const BoutonValidation = () => {
    return (
        <div id="dico-buttons" className="dico-button-wrapper">
            <button
                id="valid-inputs"
                className="secondaryButton"
                title="Valider vos modifications"
            >
                Modifier
            </button>
        </div>
    );
};

export default BoutonValidation;
