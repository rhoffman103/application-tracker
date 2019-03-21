const db = require("../database/models");

module.exports = {
    addNewUser: (req, res) => {
        db.User
            .create(req.body)
            .then( dbModel => res.json(dbModel))
            .catch( err => res.status(422).json(err));
    },

    searchForExistingUsername: (req, res) => {
        db.User.findOne({
            where: {
                Username: req.body.newUsername
            }
        }).then( dbUsername => res.json(dbUsername));
    },

    searchForExistingEmail: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then( dbEmail => res.json(dbEmail))
    }
}