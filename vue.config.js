module.exports = {
  configureWebpack: {
    // mode: "development || "production",
    entry: {
      home: "./src/views/Home.vue",
      about: "./src/views/About.vue"
    },
    output: {
      filename: "mfe_app-b.[name].js",
      library: ["mfe_app-b", "[name]"],
      libraryTarget: "commonjs2"
    }
  }
}