import "./barre-de-menus.css";

const BarreDeMenus = () => {
    return (
        <header id="header">
            <img alt="Logo AlgoForge" id="logoAlgoForge" />
            <div className="titreEtMenu">
                <div className="menuButtons">
                    <button>
                        <span>Fichier</span>
                    </button>
                    <button>
                        <span>Édition</span>
                    </button>
                    <button>
                        <span>Aide</span>
                    </button>
                </div>
            </div>

            <div id="header-submenu">
                <h3>Algorithme</h3>
                <p>.json</p>
                <h3>Image</h3>
                <p>.png</p>
                <p>.jpg</p>
                <p>.svg</p>
                <p>.pdf</p>
                <h3>Dictionnaire</h3>
                <p>.csv</p>
                <p>.md</p>
            </div>
        </header>
    );
};

export default BarreDeMenus;
