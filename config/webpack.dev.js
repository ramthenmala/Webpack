const path = require("path")

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js", // the will be entry object key "main-bundle.js"
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/js"
    },
    devServer: {
        static: "dist"
    }
}