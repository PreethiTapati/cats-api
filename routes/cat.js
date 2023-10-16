import express from 'express';

import catControllers from '../controllers/cat.js';

const router = express.Router();

router.get('/', catControllers.getCats);
router.get('/:id', catControllers.getCatById);
router.post('/add', catControllers.addCat);
router.put('/ update :id', catControllers.updateCat);

router.delete('/delete:id', catControllers.deleteCat);

export default router;
