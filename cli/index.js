#!/usr/bin/env node

import createProject from "./createProject.js";
import applyStructure from "./applyStructure.js";

const command = process.argv[2];

if (command === "structure") {
    applyStructure();
} else {
    createProject();
}
