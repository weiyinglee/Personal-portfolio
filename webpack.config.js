module.exports = {
	watchOptions: {
  		poll: true
	},
	devServer: {
		historyApiFallback: true,
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
				test: /\.png$/,
				loader: 'img-loader',
				options: {
					presets: ['url-loader']
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