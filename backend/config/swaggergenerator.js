module.exports['swagger-generator'] = {
  disabled: false,
  swaggerJsonPath: './swagger-ui/dist/swagger.json',
  swagger: {
      openapi: '3.0.0',
      servers: [
          { url: 'http://localhost:1337/' }
      ],
  },
  defaults: {
      responses: {
          '200': { description: 'The requested resource' },
          '404': { description: 'Resource not found' },
          '500': { description: 'Internal server error' }
      }
  },
  excludeDeprecatedPutBlueprintRoutes: true,
  includeRoute: function (routeInfo) {
    let c = routeInfo.controller;
    if(!c) return true;
    if(c.toLowerCase().startsWith('gateways')) return true;
    return false;
  }
  // updateBlueprintActionTemplates: function(blueprintActionTemplates) {  },
  // postProcess: function(specifications) { }
};
