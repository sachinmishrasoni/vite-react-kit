import projectPrompts from "../prompts/projectPrompts.js";
import createProject from "../generators/project/createProject.js";
import installDependencies from "../generators/project/installDependencies.js";
import initializeGit from "../generators/project/initializeGit.js";
import setupTsStructure from "../generators/structure/ts.js";
import setupJsStructure from "../generators/structure/js.js";
import setupAlias from "../generators/config/alias.js";
import logger from "../utils/logger.js";

const createProjectCommand = async () => {
    try {
        logger.info("\nWelcome to vite-react-kit\n");

        const config = await projectPrompts();

        const {
            projectName,
            language,
            structure,
            installDependencies: shouldInstallDependencies,
            initializeGit: shouldInitializeGit,
            configurations,
        } = config;

        logger.info("\nCreating project...\n");

        const targetPath = await createProject(projectName, language);

        logger.success("\nProject created successfully\n");

        if (structure) {
            logger.info("\nApplying scalable folder structure...\n");

            if (language === "ts") {
                await setupTsStructure(targetPath);
            } else {
                await setupJsStructure(targetPath);
            }

            logger.success("\nFolder structure applied successfully\n");
        }

        if (configurations.includes("alias")) {
            logger.info("\nSetting up path alias...\n");

            await setupAlias(targetPath, language);

            logger.success("\nPath alias setup successfully\n");
        }

        if (shouldInstallDependencies) {
            logger.info("\nInstalling dependencies...\n");

            installDependencies(targetPath);

            logger.success("\nDependencies installed successfully\n");
        }

        if (shouldInitializeGit) {
            logger.info("\nInitializing git repository...\n");

            initializeGit(targetPath);

            logger.success("\nGit repository initialized successfully\n");
        }

        logger.info("Next steps:\n");

        console.log(`cd ${projectName}`);

        if (!shouldInstallDependencies) {
            console.log("npm install");
        }

        console.log("npm run dev\n");
    } catch (error) {
        logger.error(error.message);
    }
};

export default createProjectCommand;
