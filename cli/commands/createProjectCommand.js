import chalk from "chalk";
import projectPrompts from "../prompts/projectPrompts.js";
import createProject from "../generators/project/createProject.js";
import installDependencies from "../generators/project/installDependencies.js";
import initializeGit from "../generators/project/initializeGit.js";
import setupTsStructure from "../generators/structure/ts.js";
import setupJsStructure from "../generators/structure/js.js";

const createProjectCommand =
    async () => {
        try {
            console.log(
                chalk.cyan(
                    "\nWelcome to vite-react-kit\n"
                )
            );

            const config =
                await projectPrompts();

            const {
                projectName,
                language,
                structure,
                installDependencies: shouldInstallDependencies,
                initializeGit: shouldInitializeGit,
            } = config;

            console.log(
                chalk.yellow(
                    "\nCreating project...\n"
                )
            );

            const targetPath =
                await createProject(
                    projectName,
                    language
                );

            console.log(
                chalk.green(
                    "\nProject created successfully\n"
                )
            );

            if (structure) {
                console.log(
                    chalk.yellow(
                        "\nApplying scalable folder structure...\n"
                    )
                );

                if (
                    language === "ts"
                ) {
                    await setupTsStructure(
                        targetPath
                    );
                } else {
                    await setupJsStructure(
                        targetPath
                    );
                }

                console.log(
                    chalk.green(
                        "\nFolder structure applied successfully\n"
                    )
                );
            }

            if (
                shouldInstallDependencies
            ) {
                console.log(
                    chalk.yellow(
                        "\nInstalling dependencies...\n"
                    )
                );

                installDependencies(
                    targetPath
                );

                console.log(
                    chalk.green(
                        "\nDependencies installed successfully\n"
                    )
                );
            }

            if (
                shouldInitializeGit
            ) {
                console.log(
                    chalk.yellow(
                        "\nInitializing git repository...\n"
                    )
                );

                initializeGit(
                    targetPath
                );

                console.log(
                    chalk.green(
                        "\nGit repository initialized successfully\n"
                    )
                );
            }

            console.log(
                chalk.cyan(
                    "Next steps:\n"
                )
            );

            console.log(
                `cd ${projectName}`
            );

            if (
                !shouldInstallDependencies
            ) {
                console.log(
                    "npm install"
                );
            }

            console.log(
                "npm run dev\n"
            );
        } catch (error) {
            console.error(error);
        }
    };

export default createProjectCommand;
