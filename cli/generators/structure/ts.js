import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const setupTsStructure = async (
    targetPath
) => {
    const folders = [
        "src/assets/data",
        "src/assets/fonts",
        "src/assets/icons",
        "src/assets/images",
        "src/assets/styles",

        "src/components/common",
        "src/components/ui",
        "src/components/animation",

        "src/layouts",

        "src/pages",

        "src/routes",

        "src/services/api",
        "src/services/storage",
        "src/services/notifications",
        "src/services/payments",

        "src/shared/config",
        "src/shared/constants",
        "src/shared/data",
        "src/shared/helpers",
        "src/shared/hooks",
        "src/shared/types",

        "src/store",
    ];

    for (const folder of folders) {
        await fs.ensureDir(
            path.join(targetPath, folder)
        );
    }

    const structureTemplatePath =
        path.join(
            __dirname,
            "../../../templates/structure/ts"
        );

    await fs.copy(
        path.join(
            structureTemplatePath,
            "App.tsx"
        ),
        path.join(
            targetPath,
            "src/App.tsx"
        )
    );

    await fs.copy(
        path.join(
            structureTemplatePath,
            "main.tsx"
        ),
        path.join(
            targetPath,
            "src/main.tsx"
        )
    );

    await fs.copy(
        path.join(
            structureTemplatePath,
            "global.css"
        ),
        path.join(
            targetPath,
            "src/assets/styles/global.css"
        )
    );

    const indexCssPath = path.join(
        targetPath,
        "src/index.css"
    );

    if (
        await fs.pathExists(indexCssPath)
    ) {
        await fs.remove(indexCssPath);
    }
};

export default setupTsStructure;
