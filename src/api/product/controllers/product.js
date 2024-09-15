'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

console.log('baba')
module.exports = createCoreController('api::product.product');
