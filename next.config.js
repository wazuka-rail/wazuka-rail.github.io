/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              titleProp: true,
              titleId: "filePath",
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};
