
module.exports = {
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [
      "strapi::errors",
      "strapi::security",
      "strapi::cors",
      "strapi::poweredBy",
      "strapi::logger",
      "strapi::query",
      "strapi::body",
      "strapi::session",
      "strapi::favicon",
      "strapi::public",
      "global::transform-image-url", // Custom middleware placed appropriately
    ],
    after: ['strapi::router'],
  },
};


