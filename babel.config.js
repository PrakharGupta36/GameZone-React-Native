module.exports = (api) => {
  api.cache(true);
  return {
    env: {
      development: {
        plugins: [
          "@babel/transform-react-jsx-source",
          "react-native-reanimated/plugin",
          [
            "module-resolver",
            {
              root: ["./src"],
            },
          ],
        ],
      },
    },
    presets: ["babel-preset-expo"],
  };
};
