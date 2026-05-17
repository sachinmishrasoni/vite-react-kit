#!/usr/bin/env node

import createProjectCommand from "./commands/createProjectCommand.js";

const command = process.argv[2];

if (command === "structure") {
    console.log("Structure command");
} else {
    createProjectCommand();
}
