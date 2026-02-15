const express = require('express');
const apiRoutes = reuired('./routes');

const { PORT } = require('./src/config');

const app = express();

app.use('/api', apiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});