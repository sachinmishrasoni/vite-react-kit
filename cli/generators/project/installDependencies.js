import { execSync } from "child_process";

const installDependencies = (
    targetPath
) => {
    execSync("npm install", {
        cwd: targetPath,
        stdio: "inherit",
    });
};

export default installDependencies;
