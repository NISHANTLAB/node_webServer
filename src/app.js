const express=require('express');
const app=express();
const path=require('path');
//require hbs because we add partials
const hbs=require('hbs');
const res = require('express/lib/response');
const { title } = require('process');

//Define path for express configuration:
publicPath=path.join(__dirname,'../public');
const viewPath=path.join(__dirname,'../templates/views')
const PartialPath=path.join(__dirname,'../templates/partials')



//setup handlebar engine and view location:
app.set('view engine','hbs')
app.set('views',viewPath);
hbs.registerPartials(PartialPath);

//setup static directory:
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.render('index',{
        title:"Rest API project",
        name:'Nishant Singh'
    })
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"RestApi",
        name:'Pankaj'
    })
});
app.get('/profile',(req,res)=>{
    res.render('myprofile',{
        title:"backend programmer",
        name:'Nishant'
    })
});


app.get('/',(req,res)=>{
    res.send({
        "Name":"Nishant Singh",
        "profile":"Nodejs developer"
    });
});

app.get('/weather',(req,res)=>{
    res.send({
        "forcast":"average",
        "location":"Noida sec 63"
    });
});
app.get('/products',(req,res)=>{
    console.log(req.query);
    res.send({
        "products":[]
     });
});

//IN Nodejs page cannot be found or 404 page we use * 
app.get('*',(req,res)=>{
    res.render("404",{
        title:'404',
        name:'Aman',
        errormessage:'page not found'
    })
})

app.listen(4000,()=>{
    console.log(`Server is running on 4000`);
})