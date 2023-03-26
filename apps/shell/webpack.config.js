const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
// import('mfeEmployees/MoviesModule')

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  ["@ngrx-mfe/data-store"]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "shell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './apps/shell/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "mfe-employees": 'http://localhost:8000/remoteEntry.js',
                  // mfe1: 'mfe1@http://localhost:3000/remoteEntry.js',
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          '@ngrx/store': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
