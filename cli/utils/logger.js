import chalk from "chalk";

const createMessage = (symbol, message, useSymbol = false) =>
    useSymbol ? `${symbol} ${message}` : message;

const logger = {
    success: (message, useSymbol = false) => {
        console.log(
            chalk.green(
                createMessage("✔", message, useSymbol)
            )
        );
    },

    error: (message, useSymbol = false) => {
        console.log(
            chalk.red(
                createMessage("✖", message, useSymbol)
            )
        );
    },

    info: (message, useSymbol = false) => {
        console.log(
            chalk.cyan(
                createMessage("➜", message, useSymbol)
            )
        );
    },

    warning: (message, useSymbol = false) => {
        console.log(
            chalk.yellow(
                createMessage("⚠", message, useSymbol)
            )
        );
    },
};

export default logger;