module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addCollection("projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("./src/projects/*.md");
      });

    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes",
        layouts: "_layouts",
        data: "_data",
      },
    };
  };
  