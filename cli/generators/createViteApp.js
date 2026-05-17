import { execSync } from "child_process";

const createViteApp = (
    projectName,
    language
) => {
    const template =
        language === "ts"
            ? "react-ts"
            : "react";

    execSync(
        `npx create-vite@latest ${projectName} --template ${template}`,
        {
            stdio: "inherit",
        }
    );
};

export default createViteApp;
