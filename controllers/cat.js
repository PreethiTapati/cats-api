import Cat from '../models/cat.js';

const catController = {
    getCats: (req, res) => {
        const cats = Cat.getCats();

        res.render('cats', { cats: cats });
    },

    getCatsBySpecies: (req, res) => {
        const { species } = req.params;

        const filteredCats = Cat.getCatsBySpecies(species);

        res.render('spesies', { cats: filteredCats, species: species });
    },

    postCat: (req, res) => {
        const { name, age, image, species } = req.body;
        const newCat = new Cat(name, age, image, species);
        newCat.addCat();
        res.json(newCat);
    },
    updateCat: (req, res) => {
        const { id } = req.params;
        const newCatData = req.body;
        const cat = Cat.updateCat(id, newCatData);
        if (cat) {
            res.json({ message: 'Cat updated successfully', cat });
        } else {
            res.status(404).json({ message: 'Cat not found' });
        }
    },

    deleteCat: (req, res) => {
        const { id } = req.params;
        const deleted = Cat.deleteCat(id);
        if (deleted) {
            res.json({ message: 'Cat deleted successfully' });
        } else {
            res.status(404).json({ message: 'Cat not found' });
        }
    }
};

export default catController;