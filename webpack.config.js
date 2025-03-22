const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js", // Allows dynamic chunk naming
    clean: true,
  },
  // mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30 * 1024, // Reduce minSize for better chunking
      maxSize: 500 * 1024, // Ensure smaller chunk sizes
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendorMaterialUI: {
          test: /[\\/]node_modules[\\/]@mui[\\/]/,
          name: "mui",
          chunks: "all",
        },
        vendorReact: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all",
        },
        vendorAxios: {
          test: /[\\/]node_modules[\\/]axios[\\/]/,
          name: "axios",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, // Increase PWA cache limit
    }),
    new CompressionPlugin({
      // Gzip compression for smaller bundles
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10 * 1024,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: "[path].br",
      test: /\.(js|css|html|svg)$/,
      threshold: 10 * 1024,
      minRatio: 0.8,
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 3001,
  },
};
