import "./dictionnaire-elm.css";

const Dictionnaire = () => {
    return (
        <div id="wrapper">
            <div id="dico-wrapper">
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
                    <tbody>
                        <tr>
                            <td>variable1</td>
                            <td>Entier</td>
                            <td>Non défini</td>
                        </tr>
                        <tr>
                            <td>variable2</td>
                            <td>Non défini</td>
                            <td>Non défini</td>
                        </tr>
                    </tbody>
                </table>
                <div id="dico-inputs">
                    <input
                        id="inputs-name"
                        type="text"
                        name=""
                        placeholder="Nom"
                    ></input>
                    <input
                        id="inputs-type"
                        type="search"
                        list="primitives"
                        name=""
                        placeholder="Type"
                    ></input>
                    <input
                        id="inputs-signification"
                        type="text"
                        name=""
                        placeholder="Signification"
                    ></input>
                    <datalist id="primitives">
                        <option value="Booléen"></option>
                        <option value="Caractère"></option>
                        <option value="Chaine de caractères"></option>
                        <option value="Nombre décimal"></option>
                        <option value="Entier non signé"></option>
                        <option value="Entier"></option>
                    </datalist>
                    <button id="valid-inputs" title="Valider vos modifications">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                        >
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                        </svg>
                    </button>
                    <button id="remove-inputs" title="Supprimer la variable">
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
                <p id="inputs-error"></p>
            </div>
        </div>
    );
};

export default Dictionnaire;
