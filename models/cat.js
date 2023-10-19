import { v4 as newId } from 'uuid';

const cats = [
    {
        id: '1',
        name: 'Fluffy',
        age: 2,
        species: 'Domestic Shorthair',
        image: 'https://th-thumbnailer.cdn-si-edu.com/UQScMrSH26AXY5YeLGturRfzV28=/800x600/filters:focal(978x630:979x631)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/db/82/db8234fc-f167-4285-82bd-123d035e32ad/cats.jpg'
    },
    {
        id: '2',
        name: 'Whiskers',
        age: 3,
        species: 'Maine Coon',
        image: 'https://media.istockphoto.com/id/1462080849/fr/photo/gros-plan-vertical-dun-beau-chat-de-la-for%C3%AAt-norv%C3%A9gienne-regardant-vers-le-haut-sur-un-fond.jpg?s=1024x1024&w=is&k=20&c=fy0VSUvXs7Tnl06CMsB21HcbK0y7z60mQwbD4X2IZbw='
    },
    {
        id: '3',
        name: 'Mittens',
        age: 1,
        species: 'Siamese',
        image: 'https://www.dutch.com/cdn/shop/articles/shutterstock_527774845.jpg?v=1668635001&width=1368'
    },
    {
        id: '4',
        name: 'Snowball',
        age: 4,
        species: 'Persian',
        image: 'https://www.lismore.nsw.gov.au/files/assets/public/v/1/1.-households/3.-pets-amp-animals/images/kitten.jpg?dimension=pageimage&w=480'
    },
    {
        id: '5',
        name: 'Simba',
        age: 5,
        species: 'Siberian',
        image: 'https://icatcare.org/app/uploads/2018/09/Scottish-fold.png'
    },
    {
        id: '6',
        name: 'Luna',
        age: 2,
        species: 'Ragdoll',
        image: 'https://media.gettyimages.com/id/988536796/fr/photo/luna-is-in-the-house.jpg?s=612x612&w=0&k=20&c=XK7F9SqI-uoL9ZEA6S8E_PzPdfCPARx1h3SHoTkGc_8='
    }
];
class Cat {
    constructor(name, age, image, species) {
        this.id = newId();
        this.name = name;
        this.age = age;
        this.species = species;
        this.image = image;
    }

    static getCats() {
        return cats;
    }

    static getCat(id) {
        return cats.find((cat) => cat.id === id);
    }
    static getCatsBySpecies(species) {
        return cats.filter((cat) => cat.species === species);
    }

    addCat() {
        cats.push(this);
    }

    static updateCat(id, newCat) {
        const index = cats.findIndex((cat) => cat.id === id);
        if (index === -1) {
            return false;
        } else {
            cats[index] = { id, ...newCat };
            return true;
        }
    }

    static deleteCat(id) {
        const index = cats.findIndex((cat) => cat.id === id);
        if (index === -1) {
            return false;
        } else {
            cats.splice(index, 1);
            return true;
        }
    }
}

export default Cat;