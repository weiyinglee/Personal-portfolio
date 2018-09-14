module.exports = {
	mode: 'development',
	watchOptions: {
  		poll: true
	},
	entry: "/Users/ericlee/desktop/my-site/public/javascripts/app.js",
	output: {
		path: "/Users/ericlee/desktop/my-site/public/javascripts/",
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
				test: /\.json$/, 
				loader: 'json-loader',
				include: "/Users/ericlee/desktop/my-site/public/personal_data.json"
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