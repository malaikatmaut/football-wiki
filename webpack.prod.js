const path = require("path");
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = merge(common, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: "/node_modules",
				use: [{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				}, ],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	optimization: {
		minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			chunks: ["vendor", "app", "main", ],
		}),
		new HtmlWebpackPlugin({
			template: "./src/competitions.html",
			filename: "competitions.html",
			chunks: ["vendor", "app", "competitions"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/teams.html",
			filename: "teams.html",
			chunks: ["vendor", "app", "teams"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/standings.html",
			filename: "standings.html",
			chunks: ["vendor", "app", "standings"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/team.html",
			filename: "team.html",
			chunks: ["vendor", "app", "team"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/favorite-teams.html",
			filename: "favorite-teams.html",
			chunks: ["vendor", "app", "favoriteTeams"],
		}),
		new ServiceWorkerWebpackPlugin({
			entry: "./src/sw.js",
		}),
		new WebpackPwaManifest({
			name: "WikiFootball",
			short_name: "WikiFootball",
			description: "All about footbal",
			theme_color: "#0288d1",
			gcm_sender_id: "233511798113",
			background_color: "#FFFFFF",
			icons: [{
				src: path.resolve("src/assets/icon/icon.png"),
				sizes: [72, 96, 128, 144, 152, 192, 384, 512],
			}]
		}),
	],
});