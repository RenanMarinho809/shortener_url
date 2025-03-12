import Url from '../models/Url.model.js';

const createShortUrl = async (req, res, next) => {
    try {
      const { originalUrl } = req.body;
      const shortUrl = Math.random().toString(16).substring(2, 6);
  
      if (!originalUrl) {
        res.status(400);
        return next(new Error("originalUrl is required"));
      }
  
      
      const isUrlExists = await Url.findOne({ originalUrl });
  
      if (isUrlExists) {
        res.status(400)
        return next(new Error("originalUrl already shortened"));
      }
  
      const newUrl = await Url.create({
        originalUrl,
        shortUrl
      });
  
      res.status(201).json({
        success: true,
        newUrl
      });
    } catch (error) {
      console.error(error);
      res.status(500);
      next(new Error(error.message));
    }
  }

  export { createShortUrl }