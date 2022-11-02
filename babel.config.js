module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '*': './src/*',
          routes: './src/routes',
          services: './src/services',
          types: './src/types',
          utils: './src/utils'
        }
      }
    ]
  ]
}
