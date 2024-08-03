import Booking from "../models/Booking.js";
import Stripe from "stripe";
import dotenv from 'dotenv';
dotenv.config();
//create booking...
export const createBooking = async(req,res) =>{
    
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success: true,
            message: "Your tour is Booked.",
            data: savedBooking,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message,
        });
    }
};

//get single booking
export const getBooking = async(req,res) =>{
    
    const id = req.params.id;
    try {
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message: "Successfully getting Booked Tour.",
            data: book,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Not found Any Booked Tour!!",
        });
    }
};

//get all booking
export const getAllBooking = async(req,res) =>{

    try {
        const books= await Booking.find();
        res.status(200).json({
            success: true,
            message: "Successfully getting Booked Tour.",
            data: books,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Not found Any Booked Tour!!",
        });
    }
};

