import { execSync } from "child_process";

const initializeGit = (targetPath) => {
    execSync("git init", {
        cwd: targetPath,
        stdio: "inherit",
    });
};

export default initializeGit;