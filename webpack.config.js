module.exports = {
	mode: 'development',
	watchOptions: {
  		poll: true
	},
	entry: "/Users/ericlee/desktop/my-site/source/javascripts/app.js",
	output: {
		path: "/Users/ericlee/desktop/my-site/source/javascripts/",
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
			}
		]
	}
}