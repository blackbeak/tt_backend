'use strict';

module.exports = ({ strapi }) => ({
  async upload(file, config) {
    // Original upload logic
    await strapi.plugin('upload').service('upload').upload(file, config);

    // Modify the URL to include Cloudinary transformations
    if (file.provider === 'cloudinary') {
      file.url = file.url.replace('/upload/', '/upload/q_auto,f_auto/');
    }
  },

  async find(params, populate) {
    const files = await strapi.plugin('upload').service('upload').find(params, populate);

    files.forEach(file => {
      if (file.provider === 'cloudinary') {
        file.url = file.url.replace('/upload/', '/upload/q_auto,f_auto/');
      }
    });

    return files;
  },
  // Include other functions as needed
});
