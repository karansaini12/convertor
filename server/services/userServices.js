const mongoose = require('mongoose')
const testimonialModel = require('../models/testimonial')

exports.add = async (req, res) => {
    try {
        let Time = new Date().getTime();
        const addData = {
            Photo: req.body.Photo,
            Name: req.body.Name,
            Post: req.body.Post,
            TestimonialDescription: req.body.TestimonialDescription,
            CreatedOn: Time,
            LastUpdatedOn: Time,
            Active: req.body.Active
        }
        let data = await testimonialModel.create(addData)
        return res.status(200).send({
            msg: "add testimonial success",
            data: data
        })
    } catch (error) {
        return res.status(400).send({
            msg: "error",
            data: error
        })
    }
}

exports.view= async (req, res) => {
    let data = await testimonialModel.findById({ _id: req.body.id })
    if (data) {
        return res.status(200).send({
            msg: "view testimonial",
            data: data
        })
    } else {
        return res.status(400).send({
            msg: "data not found",
            data: {}
        })
    }
}

exports.edit = async (req, res) => {
    try {
        let check = await testimonialModel.findById({ _id: req.body.id })
        if (check) {
            let edit = await testimonialModel.findByIdAndUpdate({ _id: check._id }, { $set: (req.body) }, { new: true })
            return res.status(200).send({
                msg: "edit testimonial success",
                data: edit
            })
        }
    } catch (error) {
        return res.status(400).send({
            msg: "error",
            data: error
        })
    }
}

exports.delete= async (req, res) => {
    try {
        let check = await testimonialModel.findById({ _id: req.body.id })
        if (check) {
            await testimonialModel.findByIdAndDelete({ _id: req.body.id })
            return res.status(200).send({
                msg: "delete",
                data: check
            })
        }
    } catch (error) {
        return res.status(400).send({
            msg: "error",
            data: error
        })
    }
}