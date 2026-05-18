import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import logger from "../../utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupAlias = async (targetPath, language) => {
    try {
        const aliasTemplatePath = path.join(
            __dirname,
            "../../../templates/config/alias",
            language
        );

        const viteConfigFile =
            language === "ts"
                ? "vite.config.ts"
                : "vite.config.js";

        await fs.copy(
            path.join(aliasTemplatePath, viteConfigFile),
            path.join(targetPath, viteConfigFile),
            { overwrite: true }
        );

        if (language === "ts") {
            await fs.copy(
                path.join(aliasTemplatePath, "tsconfig.json"),
                path.join(targetPath, "tsconfig.json"),
                { overwrite: true }
            );
        } else {
            await fs.copy(
                path.join(aliasTemplatePath, "jsconfig.json"),
                path.join(targetPath, "jsconfig.json"),
                { overwrite: true }
            );
        }
    } catch (error) {
        logger.error(error.message);
    }
};

export default setupAlias;
