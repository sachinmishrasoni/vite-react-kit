import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createProject = async (
    projectName,
    language
) => {
    const templatePath = path.join(
        __dirname,
        "../../../templates/base",
        language
    );

    const targetPath = path.join(
        process.cwd(),
        projectName
    );

    await fs.copy(
        templatePath,
        targetPath
    );

    const packageJsonPath = path.join(
        targetPath,
        "package.json"
    );

    const packageJson =
        await fs.readJson(
            packageJsonPath
        );

    packageJson.name = projectName;

    await fs.writeJson(
        packageJsonPath,
        packageJson,
        {
            spaces: 2,
        }
    );

    return targetPath;
};

export default createProject;