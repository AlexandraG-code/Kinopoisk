module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            root: ['./src'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@app': './src/app',
                '@features': './src/features',
                '@pages': './src/pages',
                '@widgets': './src/widgets',
                '@entities': './src/entities',
                '@shared': './src/shared',
                '@services': './src/services'
            }
        }]
    ]
};