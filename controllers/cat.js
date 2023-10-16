import Cat from '../models/cat.js';

const catControllers = {
    getCats: (req, res) => {
        const cats = Cat.getCats();
        res.render('cats', { cats });
    },
    getCatById: (req, res) => {
        const { id } = req.params;
        const cat = Cat.getCatById(id);
        if (cat) {
            res.render('cat', { cat });
        } else {
            res.status(404).render({ error: 'Cat not found' });
        }
    },
    getCatByspecies: (req, res) => {
        const { species } = req.params;
        const cats = Cat.getCatByspecies(species);
        res.render('cats', { cats });
    },
    addCat: (req, res) => {
        const { name, age, species, img } = req.body;
        const newCat = new Cat(name, age, species, img);
        newCat.addCat();
        res.render('cat', { cat: newCat });
    },
    updateCat: (req, res) => {
        const { id } = req.params;
        const existingCat = Cat.getCat(id);
        if (!existingCat) {
            res.status(404).render({ error: 'Cat not found' });
        } else {
            const { name, age, species, img } = req.body;
            const updatedCat = { name, age, species, img, id };
            if (Cat.updateCat(id, updatedCat)) {
                res.render('cat', { cat: updatedCat });
            } else {
                res.status(500).render({ error: 'Failed to update cat' });
            }
        }
    },
    deleteCat: (req, res) => {
        const { id } = req.params;
        if (Cat.deleteCat(id)) {
            res.json({ message: 'Cat deleted' });
        } else {
            res.status(404).render({ error: 'Cat not found' });
        }
    }
};

export default catControllers;
