import Tour from '../models/Tour.js';

//create tour
export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save()
        res.status(200).json({success: true, message: "Successfully Created",
        data: savedTour,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Create. Try again!"});
    }
};

//update tour
export const updateTour = async(req,res)=>{
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{ new: true})
        res.status(200).json({success: true, message: "Successfully Updated",
        data: updatedTour,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Update. Try again!"});
    }
};

//update tour
export const deleteTour = async(req,res)=>{
    const id = req.params.id;
    try {
        const deletedTour = await Tour.findByIdAndDelete(id,{
            $set: req.body
        },{ new: true})
        res.status(200).json({success: true, message: "Successfully Deleted",
        data: deletedTour,
        });
    } catch (err) {
        res.status(500).json({ success:false, message: "Failed to Delete. Try again!"});
    }
};


//get single tour
export const getsingleTour = async(req,res)=>{
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate("reviews");
        res.status(200).json({success: true, message: "Successfully Getting tour",
        data: tour,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found Any Tour..."});
    }
};

//get All tour
export const getAllTour = async(req,res)=>{
    const page = parseInt(req.query.page);
    try {
        const tours = await Tour.find({})
        .populate('reviews')
        .skip(page * 8)
        .limit(8);
        res.status(200).json({success: true, count: tours.length, message: "Successfully Getting tour",
        data: tours,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found Any Tour..."});
    }
};

//get Search tour
export const getSearchTour = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
  
    try {
      const tours = await Tour.find({
        city,
        distance: { $gte: distance },
        maxGroupSize: { $gte: maxGroupSize },
      }).populate("reviews");
  
      if (tours.length === 0) {
        return res.status(404).json({ success: false, message: "Not Found Any Tour..." });
      }
  
      return res.status(200).json({
        success: true,
        message: "Successfully found tour",
        data: tours,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  };
  

//get featured tours
export const getFeaturedTour = async(req,res)=>{

    try {
        const tours = await Tour.find({featured: true}).populate("reviews").limit(8);
        res.status(200).json({success: true, message: "Successfully found Featured tour",
        data: tours,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found Any Tour..."});
    }
};

//get Tour Counts
export const getTourCount = async(req,res)=>{

    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success: true, message: "Successfully Counted tour",
        data: tourCount,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found Any Tour..."});
    }
};

