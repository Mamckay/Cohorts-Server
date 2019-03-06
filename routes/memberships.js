"use strict";
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Membership = require("../models/membership");
const router = express.Router();

router.get('/', (req, res, next) => {
    Membership.find({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err)
        })
})



router.post('/', (req, res, next) => {

    const { groupId }

    const newMember = {};
    Membership.create(newMember)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err)
        })
})


router.delete('/', (req, res, next) => {

})