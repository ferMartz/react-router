module.exports ={
	entry: [
		'./src/index.js'
	],
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.json$/,
			exclude: /node_modules/,
			loader: 'json-loader'
		}
		]
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	}
}