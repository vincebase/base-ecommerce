const withLess = require("next-with-less");

module.exports = withLess({
  env: {
    PUBLIC_URL: "http://localhost:3009",
  },
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: {
        "@primary-color": "#fb5231",
        "@font-family": '"Manrope", sans-serif',
        "@font-size-base": "16px",
        "@text-selection-bg": "pink",
        "@rate-star-color": "#ffad68",
        "@rate-star-size": "14px",
        "@zindex-tooltip": "99",
      },
    },
  },
});
