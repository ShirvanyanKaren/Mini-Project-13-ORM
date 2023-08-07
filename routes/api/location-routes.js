const router = require('express').Router();
const { Traveler, Location, Trip } = reuire('../../models');

router.get('/', async (req, res) => {
  try {
const locationData = await Location.findAll( {
  include: [{model: Traveler}],
}) 
  res.status(200).json(locationData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
const locationData = await Location.create(req.body,{
  name: req.body.name,
  email: req.body.email,
});
res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
const locationData = await Location.findByPk(req.params.id, {
  include: [{model: Traveler}],
});
if(!locationData) {
  res.status(404).json({message: "No ID found"});
  return;
}
res.status(200).json(locationData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
const  locationData = await Location.destroy({
  where: {
    id: req.params.id
  }
});
if(!locationData) {
  res.status(404).json({message: "No ID found"});
  return;
}
res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;