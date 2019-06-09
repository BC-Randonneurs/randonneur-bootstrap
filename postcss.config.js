"use strict";

// https://github.com/twbs/bootstrap/blob/v4.3.1/build/postcss.config.js

module.exports = ctx => ({
  map: ctx.file.dirname.includes("examples")
    ? false
    : {
        inline: false,
        annotation: true,
        sourcesContent: true
      },
  plugins: {
    autoprefixer: {
      cascade: false
    }
  }
});
