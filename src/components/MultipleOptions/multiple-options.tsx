import { Children, useEffect, useState } from "react";

interface MultipleOptionsProps {
	children: React.ReactNode;
}

const MultipleOptions = ({ children }: MultipleOptionsProps) => {
	const [selected, setSelected] = useState<string | null>(null);

	const childrenArray = Children.toArray(children) as Array<{ props: OptionProps }>;

	if (!childrenArray.map((child) => child.props.title).includes(selected)) {
		setSelected(childrenArray[0].props.title);
	}

	return (
		<div
			style={{
				marginBottom: "20px",
			}}
		>
			<div style={{ display: "flex", gap: "10px" }}>
				{childrenArray.map((child) => (
					<div
						style={{
							backgroundColor:
								selected === child.props.title ? "var(--titleColor)" : "var(--bgColorSecondary)",
							padding: "10px 20px",
							borderLeft: "1px solid var(--titleColor)",
							borderRight: "1px solid var(--titleColor)",
							borderTop: "1px solid var(--titleColor)",
							borderRadius: "25px 25px 0 0",
							cursor: "pointer",
						}}
						onClick={() => setSelected(child.props.title)}
					>
						{child.props.title}
					</div>
				))}
			</div>
			<div
				style={{
					border: "1px solid var(--titleColor)",
					padding: "20px",
					borderRadius: "0 0 10px 10px",
				}}
			>
				{childrenArray.find((child) => child.props.title === selected)?.props.children}
			</div>
		</div>
	);
};
export { MultipleOptions };

interface OptionProps {
	children: React.ReactNode;
	title: string;
}

const Option = ({ children, title }: OptionProps) => {
	return children;
};
export { Option };
