const path = require('path')

module.exports = {
	watchOptions: {
  		poll: true
	},
	devServer: {
		historyApiFallback: true,
	},
	output: {
		publicPath: "./"
	},
	entry: "/Users/ericlee/desktop/my-site/src/index.js",
	output: {
		path: "/Users/ericlee/desktop/my-site/src/",
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-es2015','babel-preset-react']
				},
				exclude: /node_modules/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'url-loader',
				options: {
					presets: ['img-loader', 'file-loader']
				}

			}, 
			{
				test: /\.scss$/,
				loader: 'style-loader',
				options: {
					presets: ['css-loader', 'sass-loader']
				}
			}
		]
	}
}