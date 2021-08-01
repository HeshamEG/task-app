

/**
 * Gateway.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  identity: "gateway",
  globalId: "Gateway",
  schema: false,
  adapter: "sails-mongo",
  tableName: "gateways",

  attributes: {
    name: {
      type: 'string',
      unique: true,
    },
    IPv4address: {
      type: 'string',
      isIP: true,
      unique: true,
    },
    peripheralDevices: {
      collection: 'peripheralDevices',
      via: 'gateway'
    }
  }

};

