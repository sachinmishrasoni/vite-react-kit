#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templates = [
    {
        name: "MUI TypeScript",
        value: "mui-ts",
    },
    {
        name: "MUI JavaScript",
        value: "mui-js",
    },
    {
        name: "Bootstrap TypeScript",
        value: "bootstrap-ts",
    },
    {
        name: "Bootstrap JavaScript",
        value: "bootstrap-js",
    },
];

const createProject = async () => {
    try {
        console.log(
            chalk.cyan("\nWelcome to vite-react-kit\n")
        );

        const template = await select({
            message: "Select a template:",
            choices: templates,
        });

        const projectName = await input({
            message: "Enter project name:",
            validate: (value) => {
                if (!value) {
                    return "Project name is required";
                }

                return true;
            },
        });

        const templatePath = path.join(
            __dirname,
            "../templates",
            template
        );

        const targetPath = path.join(
            process.cwd(),
            projectName
        );

        if (fs.existsSync(targetPath)) {
            console.log(
                chalk.red(
                    "\nFolder already exists"
                )
            );

            process.exit(1);
        }

        console.log(
            chalk.yellow("\nCreating project...\n")
        );

        await fs.copy(templatePath, targetPath);

        const shouldInstallDependencies = await select({
            message: "Install dependencies?",
            choices: [
                {
                    name: "Yes",
                    value: true,
                },
                {
                    name: "No",
                    value: false,
                },
            ],
        });

        if (shouldInstallDependencies) {
            console.log(
                chalk.yellow("Installing dependencies...")
            );

            execSync("npm install", {
                cwd: targetPath,
                stdio: "inherit",
            });
        }

        const shouldInitializeGit = await select({
            message: "Initialize git repository?",
            choices: [
                {
                    name: "Yes",
                    value: true,
                },
                {
                    name: "No",
                    value: false,
                },
            ],
        });

        if (shouldInitializeGit) {
            console.log(
                chalk.yellow("Initializing git repository...")
            );

            execSync("git init", {
                cwd: targetPath,
                stdio: "inherit",
            });
        }

        console.log(
            chalk.green(
                `\nProject created successfully: ${projectName}\n`
            )
        );

        console.log(chalk.cyan("Next steps:\n"));

        console.log(`cd ${projectName}`);
        console.log("npm run dev\n");
    } catch (error) {
        console.log(
            chalk.red("\nSomething went wrong\n")
        );

        console.error(error);
    }
};

createProject();