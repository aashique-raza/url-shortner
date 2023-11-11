import Url from "../models/url.model.js";


const homepage=async(req,res)=>{
    const allUrls=await Url.find()
    res.render('home',{allUrls:allUrls})
}

const createShortner=async(req,res)=>{
    try {
        const URL=req.body.fullUrl
        const saveUrl=await Url.create({longUrl:URL})
        // console.log(saveUrl)
        res.redirect('/')
        
    } catch (error) {
        console.log(error)
    }
   
}
const shortUrlRedirect=async(req,res)=>{
    try {
        const shortUrl=req.params.shortUrl
    const urlMatch=await Url.findOne({shortCode:shortUrl})
    if(urlMatch){
        res.redirect(urlMatch.longUrl)
         await urlMatch.clicks++
         urlMatch.save()
    }else{
        res.sendStatus(404)
    }

        
    } catch (error) {
        console.log(error)
    }

}

const deleteUrl=async(req,res)=>{
    const id=req.params.id;
    try {
        const result=await Url.findByIdAndDelete(id)
        res.redirect('/')        
    } catch (error) {
        console.log(error)
    }
}



export {homepage,createShortner,shortUrlRedirect,deleteUrl}