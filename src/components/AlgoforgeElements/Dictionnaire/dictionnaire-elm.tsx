import "./dictionnaire-elm.css";

const Dictionnaire = () => {
    return (
        <div id="wrapper">
            <div id="dico-main">
                <div id="dico-ctrl">
                    <button id="dico-refresh">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                        >
                            <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
                        </svg>
                    </button>
                    <button id="dico-close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                        >
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </button>
                </div>
                <table id="dico-table">
                    <thead>
                        <tr>
                            <td>Nom</td>
                            <td>Type</td>
                            <td>Signification</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div id="dico-inputs">
                <div id="dico-wrapper">
                    <div id="dico-first-inputs">
                        <label>
                            Nom
                            <input
                                id="inputs-name"
                                type="text"
                                disabled
                                className="correct-input"
                                placeholder="Nom"
                            ></input>
                        </label>
                        <label>
                            Type
                            <input
                                id="inputs-type"
                                type="search"
                                disabled
                                className="correct-input"
                                list="primitives"
                                placeholder="Type"
                            ></input>
                        </label>
                    </div>
                    <label>
                        Signification
                        <textarea
                            id="inputs-signification"
                            disabled
                            className="correct-input"
                            placeholder="Signification"
                        ></textarea>
                    </label>
                    <datalist id="primitives"></datalist>
                </div>
                <p id="inputs-error" className="error-msg"></p>
                <div id="dico-buttons">
                    <button
                        id="valid-inputs"
                        disabled
                        className="secondaryButton"
                        title="Valider vos modifications"
                    >
                        Modifier
                    </button>
                    <button
                        id="remove-inputs"
                        className="secondaryButton"
                        title="Supprimer la variable"
                    >
                        Supprimer
                    </button>
                    {/* <button id="cancel-remove" style="display: none" title="Annuler la suppression">Annuler</button>
				<button id="valid-remove" style="display: none" title="Valider la suppression">Ok</button> */}
                </div>
            </div>
        </div>
    );
};

export default Dictionnaire;
