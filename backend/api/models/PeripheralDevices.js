/**
 * PeripheralDevices.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  identity: "peripheralDevices",
  globalId: "PeripheralDevices",
  schema: true,
  adapter: "sails-mongo",
  tableName: "peripheralDevices",

 attributes:{
      UID: {
        type: 'string',
        unique: true,
        required: true
      },
      vendor: {
        type: 'string',
        unique: true,
        required: true
      },
      status: {
        type: 'string',
        unique: true,
        required: true
      },
      gateway: {
        model: 'gateway'
      }

    }

};

