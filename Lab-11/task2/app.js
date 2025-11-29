const express = require('express');
const app = express();
const logger = require('./middleware/loggerMiddleware');
const attendanceRoutes = require('./router/attendanceOps');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(logger);
app.use('/api', attendanceRoutes);


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});