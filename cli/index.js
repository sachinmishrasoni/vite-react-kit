#!/usr/bin/env node

import chalk from "chalk";

import projectPrompts from "./prompts/projectPrompts.js";

const run = async () => {
    try {
        console.log(
            chalk.cyan(
                "\nWelcome to vite-react-kit\n"
            )
        );

        const config =
            await projectPrompts();

        console.log(config);
    } catch (error) {
        console.error(error);
    }
};

run();
