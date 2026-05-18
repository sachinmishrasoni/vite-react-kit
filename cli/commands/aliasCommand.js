import fs from "fs-extra";
import setupAlias from "../generators/config/alias.js";
import logger from "../utils/logger.js";

const aliasCommand = async () => {
    try {
        logger.info("\nSetting up path alias...\n");

        const targetPath = process.cwd();

        const isTsProject = await fs.pathExists(
            `${targetPath}/tsconfig.json`
        );

        const language = isTsProject ? "ts" : "js";

        await setupAlias(targetPath, language);

        logger.success("\nPath alias setup successfully\n");
    } catch (error) {
        logger.error(error.message);
    }
};

export default aliasCommand;
