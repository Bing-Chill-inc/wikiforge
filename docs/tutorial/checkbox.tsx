const Checkbox = () => {
	return (
		<input
			style={{
				width: "20px",
				height: "20px",
			}}
			checked
			type="checkbox"
			onClick={(e) => e.preventDefault()}
		/>
	);
};

const Warning = () => {
	return (
		<div
			style={{
				fontSize: "20px",
			}}
		>
			⚠️
		</div>
	);
};

const No = () => {
	return (
		<div
			style={{
				fontSize: "20px",
			}}
		>
			❌
		</div>
	);
};

export { Checkbox, Warning, No };
