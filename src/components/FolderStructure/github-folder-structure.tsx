import { useEffect, useState } from "react";
import FolderStructure, { FolderInterface } from "./folder-structure";
import { fetchRepoWithSubmodules } from "@site/src/services/getFolderStructureFromGit";

interface GitHubFolderStructureProps {
	githubUrl: string;
	branch?: string;
	pathToDisplay?: string;
	openByDefault?: boolean;
}

const GitHubFolderStructure = ({ githubUrl, branch, pathToDisplay, openByDefault }: GitHubFolderStructureProps) => {
	const [folderStructure, setFolderStructure] = useState<FolderInterface | null>(null);

	useEffect(() => {
		fetchRepoWithSubmodules(githubUrl, branch).then(setFolderStructure).catch(console.error);
	}, [githubUrl, branch]);

	console.log(folderStructure);

	if (!folderStructure)
		return <FolderStructure folderStructure={{ name: "Chargement...", isFolder: true, children: [] }} />;

	if (pathToDisplay) {
		const pathParts = pathToDisplay.split("/");
		let currentFolder = folderStructure;
		pathParts.forEach((part) => {
			const existingChild = currentFolder.children.find((c) => c.name === part);
			if (!existingChild) {
				return;
			}
			currentFolder = existingChild.isFolder ? existingChild : currentFolder;
		});

		return <FolderStructure folderStructure={currentFolder} openByDefault />;
	}

	return <FolderStructure folderStructure={folderStructure} openByDefault />;
};
export default GitHubFolderStructure;
