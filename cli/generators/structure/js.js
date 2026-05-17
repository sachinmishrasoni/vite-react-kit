import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const setupJsStructure = async (
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
            "../../../templates/structure/js"
        );

    await fs.copy(
        path.join(
            structureTemplatePath,
            "App.jsx"
        ),
        path.join(
            targetPath,
            "src/App.jsx"
        )
    );

    await fs.copy(
        path.join(
            structureTemplatePath,
            "main.jsx"
        ),
        path.join(
            targetPath,
            "src/main.jsx"
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

export default setupJsStructure;
