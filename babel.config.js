module.exports = function (api) {
	api.cache(true)
	return {
		peresets: ['babel-preset-expo'],
		plugins: [
			[
				'babel-plugin-root-import',
				{
					rootPathSuffix: 'app/',
					rootPathPrefix: '@/',
				}
			]
		]
	}
}
