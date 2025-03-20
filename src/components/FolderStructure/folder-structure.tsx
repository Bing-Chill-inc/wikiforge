import { useState } from "react";

interface IFile {
	name: string;
	isFolder: false;
}

interface IFolder {
	name: string;
	isFolder: true;
	children: Array<IFolder | IFile>;
}

interface FolderStructureProps {
	folderStructure: IFolder;
}

const Folder = ({ folder }: { folder: IFolder }) => {
	const [isOpen, setIsOpen] = useState(false);
	if (!folder) return null;
	return (
		<div
			className="folder-structure-folder"
			style={{
				borderLeft: "3px solid var(--titleColor)",
				marginLeft: "10px",
				padding: "10px",
				cursor: "pointer",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "10px",
				}}
				onClick={() => setIsOpen(!isOpen)}
			>
				{folder.children.length > 0 && (
					<svg
						width="24"
						height="24"
						style={{
							transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
							transition: "transform 0.3s",
						}}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							fill-rule="evenodd"
							d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
						/>
					</svg>
				)}
				<span>{folder.name}</span>
			</div>
			{isOpen && (
				<div>
					{folder.children
						.sort((a, b) => (b.isFolder ? 1 : 0) - (a.isFolder ? 1 : 0))
						.map((child) => {
							if (child.isFolder) {
								return <Folder folder={child} />;
							} else {
								return <File file={child as IFile} />;
							}
						})}
				</div>
			)}
		</div>
	);
};

const File = ({ file }: { file: IFile }) => {
	return (
		<div
			style={{
				marginLeft: "10px",
				borderLeft: "3px solid var(--fgColor)",
				padding: "10px",
				cursor: "pointer",
			}}
		>
			{file.name}
		</div>
	);
};

const FolderStructure = ({ folderStructure }: FolderStructureProps) => {
	return (
		<div
			style={{
				width: "40%",
				marginBottom: "10px",
			}}
		>
			<Folder folder={folderStructure} />
		</div>
	);
};

export default FolderStructure;

export type { IFolder as FolderInterface, IFile as FileInterface };
