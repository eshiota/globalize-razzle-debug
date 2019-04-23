const merge = require("webpack-merge");
const GlobalizePlugin = require("globalize-webpack-plugin");

module.exports = {
    modify: (config, { target, dev }, webpack) => {
        config = merge(config, {
            plugins: [
                new GlobalizePlugin({
                    production: !dev,
                    developmentLocale: "en",
                    supportedLocales: [ "en", "pt"]
                })
            ]
        });

        return config;
    }
};