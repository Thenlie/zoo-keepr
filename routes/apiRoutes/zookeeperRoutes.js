const { filterByQuery, findById, createNewZookeeper, validateZookeeper } = require('../../lib/zookeepers');
const { zookeepers } = require('../../data/zookeepers.json');
const router = require('express').Router();

router.get('/zookeepers', (req, res) => {
    let results = zookeepers;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/zookeepers/:id', (req, res) => {
    const result = findById(req.params.id, zookeepers);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/zookeepers', (req, res) => {
    // Set ID based on what the next index of the array will be
    req.body.id = zookeepers.length.toString();
    if (!validateZookeeper(req.body)) {
        // If any data is incorrect, send back 400 error
        res.status(400).send('The zookeeper is not properly formatted.');
    } else {
        // Add zookeeper to JSON file and zookeepers array
        const zookeeper = createNewZookeeper(req.body, zookeepers);
        res.json(zookeeper);
    }
});

module.exports = router;