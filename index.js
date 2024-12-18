const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("this is Aruna's Window");
})



app.listen(5000, (request,response) => {
    console.log(' Server is running at Port no.5000 ');

})

