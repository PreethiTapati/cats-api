import express from 'express';
const router = express.Router();
import catController from '../controllers/cat.js';

router.get('/', catController.getCats);
router.get('/:id', catController.getCats);
router.get('/cats/species/:species', catController.getCatsBySpecies);
router.post('/', catController.postCat);
router.put('/:id', catController.updateCat);
router.delete('/:id', catController.deleteCat);

export default router;