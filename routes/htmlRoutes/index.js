const path = require('path');
const router = require('express').Router();

// Send the index HTML file to the server to be displayed
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// Send the animals HTML file to the server to be displayed
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
});
// Send the zookeepers HTML file to the server to be displayed
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'))
});
// If request is not one of the above, send index HTML to be displayed
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;