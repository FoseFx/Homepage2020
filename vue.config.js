const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

const isProd = process.env.NODE_ENV === "production";

function getPlugins() {
  return !isProd
    ? []
    : [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/"]
        })
      ];
}

const obj = {
  configureWebpack: {
    plugins: getPlugins()
  }
};

module.exports = obj;
