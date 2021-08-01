/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
const prefix="/api"
module.exports.routes = {

  [`POST ${prefix}/gateway/create`]: { controller: 'gateway', action: 'add'},
  [`GET ${prefix}/gateways`]: { controller: 'gateway', action: 'list' },
  [`POST ${prefix}/device/create`]: { controller: 'peripheralDevices', action: 'add'},
  [`POST ${prefix}/device/remove`]: { controller: 'peripheralDevices', action: 'remove'},

};
