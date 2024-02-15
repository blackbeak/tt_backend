'use strict';

/**
 * blog-index service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-index.blog-index');
