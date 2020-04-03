const db = require("../models");

const Stats = db.Stats;
const Op = db.Sequelize.Op;

// Create and Save a new set of Stats
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty"
    });
    return;
  }

  // Create a set of stats
  const stat = {
    score: req.body.score,
    fairways: req.body.fairways,
    greens: req.body.greens,
    up_and_downs: req.body.up_and_downs,
    up_and_down_chances: req.body.up_and_down_chances,
    putts: req.body.putts,
    tournament_round: req.body.tournament_round,
  };

  // Save a set of stats
  Stats.create(stat)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occured while creating the set of stats "
      });
    });
};

// Retrieve all sets of stats from the da\tabase.
exports.findAll = (req, res) => {
  const typeofStat = req.query.typeofStat;
  let condition = typeofStat ? { typeofStat: { [Op.like]: `%${typeofStat}%` } } : null;

  Stats.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving the stats"
      });
    });
};

// Find a single set of stats with an id
exports.findOne = (req, res) => {
  const id = req.query.id;
  console.log("id is : " + id);
  Stats.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stats with id=" + id
      });
    });
};

// Update a set of stats by the id in the request
exports.update = (req, res) => {
  const id = req.query.id;

  Stats.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "This set of stats was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stats with id=${id}. Maybe Fitness was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stats with id=" + id
      });
    });
};

// Delete a fitness log with the specified id in the request

exports.delete = (req, res) => {
  const id = req.query.id;

  Stats.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "This set of stat was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Stats with id=${id}. Maybe Fitness was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Stats with id=" + id
      });
    });
};

// Delete all stats from the database.

exports.deleteAll = (req, res) => {
  Stats.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Stats were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all stats."
      });
    });
};
