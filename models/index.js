const User = require('./User');

const Watch = require('./Watch')

User.hasMany(Watch, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Watch.belongsTo(User, {
  foreignKey: 'user_id'
});
module.exports = { User, Watch};
