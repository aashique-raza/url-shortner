import express from 'express'
import { homepage,createShortner,shortUrlRedirect,deleteUrl } from '../controllers/url.controller.js'
const router=express.Router()


router.get('/',homepage)
router.post('/shortUrls',createShortner)
router.get('/:shortUrl',shortUrlRedirect)
router.get('/delete/:id',deleteUrl)


export default router