import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const getAdequateModifier = () => {
	if (ExecutionEnvironment.canUseDOM) {
		// Return "Ctrl" if the user is on Windows or Linux, and ⌘ if the user is on macOS
		return navigator.userAgent.indexOf("Mac") != -1 ? "⌘" : "Ctrl + ";
	} else {
		return "Ctrl";
	}
};

export default getAdequateModifier;
