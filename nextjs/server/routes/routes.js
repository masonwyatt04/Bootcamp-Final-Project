const db = require('../../models');

// Routes
module.exports = function(app) {

// Add a Round
app.post("/api/stats", function(req, res) {

    db.Stats.create({
        score: req.body.score,
        fairways: req.body.fairways,
        greens: req.body.greens,
        up_and_downs: req.body.up_and_downs,
        up_and_down_chances: req.body.up_and_down_chances,
        putts: req.body.putts,
        tournament_round: req.body.tournament_round
    }).then( function(newStats) {

        res.json(newStats);

    });

});

// Get all Stats
app.get("/api/stats", function(req, res) {

    db.Stats.findAll({}).then( function(allStats) {

        res.json(allStats);
    });

});

// Update a Stat
app.put("/api/stats", function(req, res) {

    db.Stats.update({
        score: req.body.score,
        fairways: req.body.fairways,
        greens: req.body.greens,
        up_and_downs: req.body.up_and_downs,
        up_and_down_chances: req.body.up_and_down_chances,
        putts: req.body.putts,
        tournament_round: req.body.tournament_round
    }, {
        where: {
            id: req.body.id
        }
    }).then( function(updateStats){
        res.json(updateStats);
    });

});


// Delete a User
app.delete("/api/stats", function (req, res) {

    db.Stats.destroy({
      where: {
        id: req.params.id
      }
    });
    
});

// *******************************************************************************

// Add a User
app.post("/api/users", function(req, res){

    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        handicap: req.body.handicap
    });

});

// Get all Users
app.get("/api/users", function(req, res){

    db.User.findAll({}).then(function (allUsers) {
        res.json(allUsers);
    });

});

// Update a User
app.put("/api/users", function(req, res){

    db.User.update({
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        handicap: req.body.handicap
    }, 
    {where:{
        id: req.body.id
    }
    }).then( function(updateUser){

        res.json(updateUser);

    });
});

// Delete a User
app.delete("/api/users", function (req, res) {

    db.User.destroy({
      where: {
        id: req.params.id
      }
    });
    
});


};