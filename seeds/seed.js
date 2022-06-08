const sequelize = require('../config/connection');
const { User, Watch } = require('../models');

const userData = require('./userData.json');
const watchData = require('./watchData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Watch.bulkCreate(watchData);

    process.exit(0);
};

seedDatabase();
