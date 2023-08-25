module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-class-static-block',
    ['@babel/plugin-proposal-decorators', {version: 'legacy'}],
  ],
};
