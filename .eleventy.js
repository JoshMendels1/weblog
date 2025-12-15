module.exports = function(eleventyConfig) {
  // Copy CSS directly to output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy images if you add them
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Add a collection for posts, sorted by date (newest first)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });
  
  // Date filter for readable dates
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // ISO date for datetime attributes
  eleventyConfig.addFilter("isoDate", dateObj => {
    return new Date(dateObj).toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
