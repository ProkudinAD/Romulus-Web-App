const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'authenticationApp',

  exposes: {
    "./routes": "./projects/authentication-app/src/app/app.routes.ts",
    './Component': './projects/authentication-app/src/app/modules/login/login.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
