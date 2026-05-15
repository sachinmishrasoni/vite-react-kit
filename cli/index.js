#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
    .argument("<template>")
    .argument("<projectName>")
    .action(async (template, projectName) => {
        try {
            const templatePath = path.join(
                __dirname,
                "../templates",
                template
            );

            const targetPath = path.join(
                process.cwd(),
                projectName
            );

            await fs.copy(templatePath, targetPath);

            console.log(
                chalk.green(
                    `Project created successfully: ${projectName}`
                )
            );
        } catch (error) {
            console.log(chalk.red("Something went wrong"));
            console.error(error);
        }
    });

program.parse();
