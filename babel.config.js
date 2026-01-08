module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@store': './src/store',
        },
        extensions: ['.ios.ts', '.android.ts', '.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    ],
  ],
};
