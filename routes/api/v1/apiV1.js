const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/userController");
const passport = require("passport");

// Routes that append to "/api/v1"
router.route("/signup")
    .post(passport.authenticate("local-signup"), (req, res) => {
        console.log(res);
        res.json({
            user: req.user
        })
    });

router.route("/login")
    .post(passport.authenticate("local-signin"), (req, res) => {
        res.json({ user: req.user })
    });

router.route("/logout")
    .get((req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: "logging out" })
        } else {
            res.send({ msg: "no user to log out" })
        }
    });

// Search for existing emails
router.route("/emailsearch")
    .post(userController.searchForExistingEmail);

// Search for existing Usernames
router.route("/usernamesearch")
    .post(userController.searchForExistingUsername);

module.exports = router;