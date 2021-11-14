const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');
const router = require('express').Router();

router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/animals', (req, res) => {
    // Set ID based on what the next index of the array will be
    req.body.id = animals.length.toString();
    if (!validateAnimal(req.body)) {
        // If any data is incorrect, send back 400 error
        res.status(400).send('The animal is not properly formatted.');
    } else {
        // Add animal to JSON file and animals array
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
});

module.exports = router;