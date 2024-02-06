// Append Cloudinary optimization parameters to any cloudinary image
// reduces the Cloudinary bandwidth and optimises the images for display

module.exports = (config, { strapi }) => ({
    initialize() {
      return async (ctx, next) => {
        await next();
  
        const transformUrls = (obj) => {
          if (!obj) return;
          Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === 'string' && obj[key].includes('cloudinary.com')) {
              // Append Cloudinary optimization parameters
              obj[key] = obj[key].replace('/upload/', '/upload/f_auto,q_auto/');
            } else if (typeof obj[key] === 'object') {
              transformUrls(obj[key]);
            }
          });
        };
  
        if (ctx.body) {
          transformUrls(ctx.body);
        }
      };
    },
  });
  