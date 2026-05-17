#!/usr/bin/env node

import chalk from "chalk";

import projectPrompts from "./prompts/projectPrompts.js";

import createViteApp from "./generators/createViteApp.js";

const run = async () => {
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
        } = config;

        console.log(
            chalk.yellow(
                "\nCreating Vite project...\n"
            )
        );

        createViteApp(
            projectName,
            language
        );

        console.log(
            chalk.green(
                "\nVite project created successfully\n"
            )
        );
    } catch (error) {
        console.error(error);
    }
};

run();