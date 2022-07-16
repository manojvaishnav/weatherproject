const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

// Static Path
const staticPath = path.join(__dirname,'../public');
const templates_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);



app.use(express.static(staticPath));


// Routing
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
   res.render('about');
});

app.get('/weather',(req,res)=>{
   res.render('weather');
});

app.get('*',(req,res)=>{
    res.render('404error',{
        errormsg:'page not found'
    });
});


app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
});