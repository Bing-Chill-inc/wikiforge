const getAdequateModifier = () => {
	// Return "Ctrl" if the user is on Windows or Linux, and ⌘ if the user is on macOS
	return navigator.userAgent.indexOf("Mac") != -1 ? "⌘" : "Ctrl + ";
};

export default getAdequateModifier;
