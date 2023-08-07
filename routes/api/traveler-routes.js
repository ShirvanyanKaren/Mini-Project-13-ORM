const router = require('express').Router();
const { Traveler, Location, Trip } = reuire('../../models');

router.get('/', async (req, res) => {
  try {
const travelerData = await Traveler.findAll( {
  include: [{model: Location}],
}) 
  res.status(200).json(travelerData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
const travelerData = await Traveler.create(req.body,{
  name: req.body.name,
  email: req.body.email,
});
res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
const travelerData = await Traveler.findByPk(req.params.id, {
  include: [{model: Location}],
});
if(!travelerData) {
  res.status(404).json({message: "No ID found"});
  return;
}
res.status(200).json(travelerData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
const  travelerData = await Traveler.destroy({
  where: {
    id: req.params.id
  }
});
if(!travelerData) {
  res.status(404).json({message: "No ID found"});
  return;
}
res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;