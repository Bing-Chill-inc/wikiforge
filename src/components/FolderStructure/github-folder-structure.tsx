import { useEffect, useState } from "react";
import FolderStructure, { FolderInterface } from "./folder-structure";
import { fetchRepoWithSubmodules } from "@site/src/services/getFolderStructureFromGit";

interface GitHubFolderStructureProps {
	githubUrl: string;
	branch?: string;
}

const GitHubFolderStructure = ({ githubUrl, branch }: GitHubFolderStructureProps) => {
	const [folderStructure, setFolderStructure] = useState<FolderInterface | null>(null);

	useEffect(() => {
		fetchRepoWithSubmodules(githubUrl, branch).then(setFolderStructure);
	}, [githubUrl, branch]);

	console.log(folderStructure);

	if (!folderStructure)
		return <FolderStructure folderStructure={{ name: "Chargement...", isFolder: true, children: [] }} />;

	return <FolderStructure folderStructure={folderStructure} />;
};
export default GitHubFolderStructure;
