const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = env => ({
	entry: {
		index: `./src/${env ? `${env.env}.` : ''}index.ts`
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, `dist/${env ? env.env : 'web'}`)
	},
	resolve: {
		modules: [
			path.join(__dirname, "src"),
			'node_modules',
		],
		extensions: ['.ts', '.js', '.json', '.html', '.scss']
	},
	devtool: "source-map-inline",
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: 'main',
			minChunks: function (module) {
				return module.resource && !(/node_modules/).test(module.resource);
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: 'spec',
			minChunks: function (module) {
				return module.resource && (/(spec|test)/).test(module.resource);
			}
		}),
		new HtmlWebpackPlugin({
			template: './src/index.ejs',
			title: 'NutriStarter',
			hash: true
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.jquery': 'jquery'
		})
	],
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{ loader: 'awesome-typescript-loader' }]
		}, {
			test: /template\.html$/,
			exclude: /node_modules/,
			use: [{ loader: 'html-loader' }]
		}, {
			test: /\.scss$/,
			use: [{ loader: 'style-loader' }, { loader: "css-loader" }, { loader: "sass-loader" }]
		}]
	}
});