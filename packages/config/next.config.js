const withTM = require("next-transpile-modules")([
  "@parrot/components",
  "@parrot/config",
  "@parrot/hooks",
  "@parrot/services",
  "@parrot/store",
  "@parrot/types",
  "@parrot/auth-signin",
  "@parrot/menu",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["d1ralsognjng37.cloudfront.net"],
  },
});
