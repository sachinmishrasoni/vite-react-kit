import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { select } from "@inquirer/prompts";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const applyStructure = async () => {
    const type = await select({
        message: "Select project type:",
        choices: [
            {
                name: "TypeScript",
                value: "ts",
            },
            {
                name: "JavaScript",
                value: "js",
            },
        ],
    });

    const currentPath = process.cwd();

    const srcPath = path.join(currentPath, "src");

    const backupPath = path.join(
        currentPath,
        "src_backup"
    );

    const structurePath = path.join(
        __dirname,
        "../structures",
        type,
        "src"
    );

    if (fs.existsSync(srcPath)) {
        const shouldReplace = await select({
            message:
                "Existing src folder found. Continue?",
            choices: [
                {
                    name: "Backup & Replace",
                    value: true,
                },
                {
                    name: "Cancel",
                    value: false,
                },
            ],
        });

        if (!shouldReplace) {
            process.exit(0);
        }

        await fs.move(srcPath, backupPath, {
            overwrite: true,
        });
    }

    await fs.copy(structurePath, srcPath);

    console.log(
        chalk.green(
            "\\nFolder structure applied successfully\\n"
        )
    );
};

export default applyStructure;
