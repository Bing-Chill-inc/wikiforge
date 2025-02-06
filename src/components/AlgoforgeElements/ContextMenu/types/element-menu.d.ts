export default interface ElementMenuContextuel {
	nom: string;
	keyBoardTip?: string;
	sousMenu?: ElementMenuContextuel[];
	estTitre?: boolean;
}
