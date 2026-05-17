import {
    input,
    select,
    checkbox,
} from "@inquirer/prompts";

const projectPrompts = async () => {
    const projectName = await input({
        message: "Project name",
    });

    const language = await select({
        message: "Select language",
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

    const uiLibrary = await select({
        message: "Select UI Library",
        choices: [
            {
                name: "Bootstrap",
                value: "bootstrap",
            },
            {
                name: "MUI",
                value: "mui",
            },
            {
                name: "Tailwind CSS",
                value: "tailwind",
            },
        ],
    });

    const store = await select({
        message: "Select state management",
        choices: [
            {
                name: "Redux Toolkit",
                value: "redux",
            },
            {
                name: "Zustand",
                value: "zustand",
            },
            {
                name: "None",
                value: null,
            },
        ],
    });

    const features = await checkbox({
        message: "Select features",
        choices: [
            {
                name: "React Router",
                value: "router",
            },
            {
                name: "Axios",
                value: "axios",
            },
            {
                name: "React Query",
                value: "reactQuery",
            },
            {
                name: "Toastify",
                value: "toastify",
            },
            {
                name: "SweetAlert2",
                value: "sweetAlert",
            },
        ],
    });

    const configurations =
        await checkbox({
            message:
                "Project configuration",
            choices: [
                {
                    name: "Path Alias (@/)",
                    value: "alias",
                },
                {
                    name: "ESLint",
                    value: "eslint",
                },
                {
                    name: "Prettier",
                    value: "prettier",
                },
            ],
        });

    const structure = await select({
        message:
            "Apply scalable folder structure?",
        choices: [
            {
                name: "Yes",
                value: true,
            },
            {
                name: "No",
                value: false,
            },
        ],
    });

    const installDependencies =
        await select({
            message:
                "Install dependencies?",
            choices: [
                {
                    name: "Yes",
                    value: true,
                },
                {
                    name: "No",
                    value: false,
                },
            ],
        });

    const initializeGit = await select({
        message:
            "Initialize git repository?",
        choices: [
            {
                name: "Yes",
                value: true,
            },
            {
                name: "No",
                value: false,
            },
        ],
    });

    return {
        projectName,
        language,
        uiLibrary,
        store,
        features,
        configurations,
        structure,
        installDependencies,
        initializeGit,
    };
};

export default projectPrompts;
