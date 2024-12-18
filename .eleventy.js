module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addWatchTarget('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
