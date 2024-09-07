const express = require('express');
const router = express.Router();

const Booking = require("../models/usermodel");

router.route("/addBooking").post(async(req,res)=>{
    const {username, email, traneeID, numOfSeats, bookingDate} =req.body;
    const newBooking = new Booking({username, email, traneeID, numOfSeats, bookingDate});

    await newBooking.save().then(()=>{
        res.status(200).send({status: "Booking Added Succesfully"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({  message: 'Unable to add Booking' });
    })

})

router.route("/").get(async(req,res)=>{
    const getBookings = await Booking.find().then((bookings)=>{
        res.json(bookings)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userID = req.params.id;
    const {username, email, traneeID, numOfSeats, bookingDate} =req.body;

    const updateBooking = {username, email, traneeID, numOfSeats, bookingDate}

    await Booking.findByIdAndUpdate(userID, updateBooking).then(()=>{
        res.status(200).send({status : "Booking updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({  message: 'Unable to update booking' });
    })
   
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userID = req.params.id;

    await Booking.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status : "Booking deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({  message: 'Unable to delete booking' });
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userID = req.params.id;
    let booking;
    booking = await Booking.findById(userID).then(()=>{
        res.status(200).send({status : "Booking fetched", message : booking })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({  message: 'Unable to fetch booking' });
    })
})

module.exports = router;