import express from 'express';
import { createShortUrl, getUrls , getURL , redirectUrl , updateUrl, deleteUrl} from '../controllers/url.controllers.js';

const router = express.Router();

router.post('/create', createShortUrl);
router.get('/', getUrls)
router.get('/:shortUrl', getURL);
router.get('/redirect/:shortUrl', redirectUrl);
router.put('/:shortUrl', updateUrl);
router.delete('/:shortUrl', deleteUrl);


export default router;