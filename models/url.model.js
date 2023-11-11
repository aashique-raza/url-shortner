import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema({
    longUrl: String,
    shortCode: { type: String, default: () => nanoid(8) },
    clicks:{
      type:Number,
      required:true,
      default:0
    } // Generate a short code with length 8
  });

  const Url = mongoose.model('Url', urlSchema);

  export default Url;