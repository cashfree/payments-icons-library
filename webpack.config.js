const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "image-library.js",
        globalObject: "this",
        library: {
            name: "paymentsIcons",
            type: "umd",
        },
    },
};
