const HtmlWebPackPlugin = require("html-webpack-plugin")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        // this enables you to modularize css as used in the components
        test: /\.css$/,
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[name]_[local]_[hash:base64]"
        }
      }



      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"]
      // }
    ]
  },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
      // ,
      // new MiniCssExtractPlugin({
      //   filename: "[name].css",
      //   chunkFilename: "[id].css"
      // })
    ]
}


