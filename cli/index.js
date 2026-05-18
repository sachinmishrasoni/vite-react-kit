#!/usr/bin/env node

import createProjectCommand from "./commands/createProjectCommand.js";
import aliasCommand from "./commands/aliasCommand.js";

const command = process.argv[2];

const commandHandlers = {
    alias: aliasCommand,
};

const runCommand = commandHandlers[command] || createProjectCommand;

runCommand();