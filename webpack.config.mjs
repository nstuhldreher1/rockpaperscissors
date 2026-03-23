import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProd = argv.mode === 'production';

  if (isProd) {
    return {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        clean: true 
      },
      mode: "production",
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/game.html",
          filename: "game.html"
        })
      ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    };

  }else{
    return{
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        clean: true 
      },
      mode: "development",
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/game.html",
          filename: "game.html"
        })
      ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      devServer: {
        static: {
          directory: path.resolve(__dirname, "dist")
        },
        port: 8080,
        hot: true,
        open: true,
        devMiddleware: {
          writeToDisk: true
        }
      }
    }
  }
};