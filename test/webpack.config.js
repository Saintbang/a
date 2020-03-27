const { resolve } = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "bulid")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[],
    mode: "development"
}