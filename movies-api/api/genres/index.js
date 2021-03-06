import express from 'express';
import { genres, genreDetails } from './genresData';
import Genre from './genresModel';
import uniqid from 'uniqid'

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(genres);
});

// Get movie details
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (genreDetails.id == id) {
        res.status(200).json(genreDetails);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

// Get genre 
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

export default router;