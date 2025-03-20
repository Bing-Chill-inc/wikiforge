import JSZip from "jszip";

interface File {
	name: string;
	isFolder: false;
}

interface Folder {
	name: string;
	isFolder: true;
	children: Array<Folder | File>;
}

async function fetchZipAndParse(repoUrl: string, branch = "main"): Promise<Folder> {
	const zipUrl = `https://corsproxy.io/?url=${repoUrl}/archive/refs/heads/${branch}.zip`;
	const res = await fetch(zipUrl);
	if (!res.ok) throw new Error(`Failed fetching ${zipUrl}`);

	const zip = await JSZip.loadAsync(await res.arrayBuffer());
	const rootName = Object.keys(zip.files)[0].split("/")[0];

	const root: Folder = { name: rootName, isFolder: true, children: [] };

	Object.values(zip.files).forEach((file) => {
		const parts = file.name.split("/").slice(1).filter(Boolean);
		if (!parts.length) return;

		let currentFolder = root;
		parts.forEach((part, idx) => {
			const existingChild = currentFolder.children.find((c) => c.name === part);
			if (idx === parts.length - 1 && !file.dir) {
				if (!existingChild) currentFolder.children.push({ name: part, isFolder: false });
			} else {
				if (existingChild && existingChild.isFolder) {
					currentFolder = existingChild;
				} else if (!existingChild) {
					const newFolder: Folder = { name: part, isFolder: true, children: [] };
					currentFolder.children.push(newFolder);
					currentFolder = newFolder;
				}
			}
		});
	});

	return root;
}

async function fetchGitmodules(repoUrl: string, branch = "main"): Promise<Record<string, string>> {
	const rawUrl = `https://corsproxy.io/?url=${repoUrl.replace(
		"github.com",
		"raw.githubusercontent.com"
	)}/${branch}/.gitmodules`;
	const res = await fetch(rawUrl);
	if (!res.ok) return {};

	const content = await res.text();
	const regex = /\[submodule "(.*?)"\][\s\S]*?url = (.*)/g;
	const submodules: Record<string, string> = {};
	let match: RegExpExecArray | null;
	while ((match = regex.exec(content)) !== null) {
		submodules[match[1]] = match[2].replace(/\.git$/, "");
	}

	return submodules;
}

async function fetchRepoWithSubmodules(repoUrl: string, branch = "main"): Promise<Folder> {
	const root = await fetchZipAndParse(repoUrl, branch);
	const submodules = await fetchGitmodules(repoUrl, branch);

	for (const [submodulePath, submoduleUrl] of Object.entries(submodules)) {
		const submoduleFolder = await fetchRepoWithSubmodules(submoduleUrl, branch);

		const pathParts = submodulePath.split("/");
		let currentFolder = root;
		pathParts.forEach((part, idx) => {
			let child = currentFolder.children.find((c) => c.name === part && c.isFolder) as Folder;
			if (!child) {
				child = { name: part, isFolder: true, children: [] };
				currentFolder.children.push(child);
			}

			if (idx === pathParts.length - 1) {
				child.children = submoduleFolder.children;
			} else {
				currentFolder = child;
			}
		});
	}

	return root;
}

export { fetchRepoWithSubmodules };
