const router = require('express').Router();
const locationRoutes = require('./location-routes');
const travelerRoutes = require('./traveler-routes');
const tripRoutes = require('./trip-route');

router.use('/locations', locationRoutes);
router.use('/travelers',travelerRoutes);
router.use('/trips',travelerRoutes)

module.exports = router;