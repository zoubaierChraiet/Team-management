// config-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const config = new Schema({
    logo : String,
    GPS : Boolean,
    primaryColor : String,
    secondaryColor : String,
    syncInterval : String,
    period : String,
    stockInformation : String,
    modules : [String]
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('config');
  } catch (e) {
    return mongooseClient.model('config', config);
  }
};
