const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Resolve .ts and .tsx files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: "ts-loader", // Use ts-loader for TypeScript files
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use the HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from the dist directory
    },
    compress: true, // Enable gzip compression
    port: 4200, // Port for the development server
    historyApiFallback: true, // Enable HTML5 History API fallback for React Router
  },
};
