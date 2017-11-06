const conn = require('./conn');

//Associations

const sync = ()=> conn.sync();

module.exports = {
  sync,
  models: {
    
  }
}