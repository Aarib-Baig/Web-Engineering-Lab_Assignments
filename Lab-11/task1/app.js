const express = require('express');
const app = express();
const logger = require('./middleware/loggerMiddleware');
const bookRoutes = require('./router/bookOps'); 

app.use(express.json()); 
app.use(logger); 
app.use('/api', bookRoutes);

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});