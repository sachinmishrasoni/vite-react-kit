import fs from "fs-extra";
import path from "path";

const setupAlias = async (
    targetPath,
    language
) => {
    const viteConfigPath =
        language === "ts"
            ? "vite.config.ts"
            : "vite.config.js";

    const viteConfig = `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
`;

    await fs.writeFile(
        path.join(targetPath, viteConfigPath),
        viteConfig
    );

    if (language === "ts") {
        const tsConfig = {
            compilerOptions: {
                baseUrl: ".",
                paths: {
                    "@/*": ["src/*"],
                },
            },
        };

        await fs.writeJson(
            path.join(targetPath, "tsconfig.json"),
            tsConfig,
            {
                spaces: 2,
            }
        );
    }
};

export default setupAlias;
