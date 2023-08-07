const Trip = require('./trips');
const Location = require('./locations');
const Traveler = require('./travelers');


Traveler.belongsToMany(Location, {
    through: Trip,
    foreignKey: 'traveler_id'
}
);


Location.belongsToMany(Traveler, {
    through: Trip,
    foreignKey: 'location_id',
}
);


module.exports = {
    Location,
    Traveler,
    Trip,
};
