const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "contentApp",

  exposes: {
    "./routes": "./projects/content-app/src/app/app.routes.ts",
    "./ComponentNews":
      "./projects/content-app/src/app/modules/news/components/news.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
