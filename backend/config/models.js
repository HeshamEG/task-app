module.exports.models = {
  migrate: 'safe'
,
datastore: 'mongodb',
connect: 'sails-mongo',
  // schema: true,


  // migrate: 'alter',


  attributes: {
    id: { type: 'string', columnName: '_id' },
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
  },

  dataEncryptionKeys: {
    default: 'b6A2B92vUrAwuH3WYERFuWXASCVi4q6rUm6rqiCxWM8='
  },
  cascadeOnDestroy: true
};
