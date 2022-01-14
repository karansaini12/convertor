const mongoose = require('mongoose')
const testimonialModel = mongoose.Schema({
    Photo:{
        type:String
    },
    Name:{
        type:String
    },
    Post:{
        type:String
    },
    TestimonialDescription:{
        type:String
    },
    CreatedOn:{
        type:Date
    },
    LastUpdatedOn:{
        type:Date
    },
    Active:{
        type:Number,
        default:0
    },
})
module.exports = mongoose.model("testimonial",testimonialModel)