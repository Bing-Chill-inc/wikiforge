import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default {
	wrapper: ({ children }) => <BrowserOnly fallback={<div>Loading docs...</div>}>{() => <>{children}</>}</BrowserOnly>,
};
