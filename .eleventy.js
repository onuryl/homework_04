module.exports = function(eleventyConfig) {
 
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("source");
    eleventyConfig.addPassthroughCopy("assets/scripts/**.*");

  };