const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const {insertData, findByKey ,addProjectVisit} = require('./public/mongodb');

//  Middleware to parse JSON body
app.use(express.json());

// Serve static files
app.use(express.static('public'));

app.get('/', async (req, res) => { 
    const data = await findByKey("visit", {visitor_ip: req.ip});
    console.log(data);
    if (data.length > 0) {
      await addProjectVisit(req.ip, "home");
    }else{
       var datainsert = {
        first_date: new Date().toLocaleString(),
        visitor_ip: req.ip,
        project_visit: [{ 
            timestamp: new Date().toLocaleString(),
            page: "home" }]
    }
         await insertData('visit', datainsert);

    }
    res.sendFile(path.join(__dirname, './', 'index.html'));
});

app.post('/save-my-page', async (req, res) => {
    try {
        //console.log(req.body); //  Now you’ll see { name_page: "..." }
        if(req.body){
          await addProjectVisit(req.ip, req.body.name_page);
        }
        res.status(200).send({ message: 'Connected to database successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to connect to database' });
    }
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
