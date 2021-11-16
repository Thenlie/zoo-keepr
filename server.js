const express = require ('express');
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes'); 
const PORT = process.env.PORT || 3001;
const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// Parse incoming JSON data
app.use(express.json());
// Make resources in public dir static so they can be accessed without a specific endpoint
app.use(express.static('public'));
// Use apiRoutes file for any api calls
app.use('/api', apiRoutes);
// Use htmlRoutes for any calls to display pages
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});