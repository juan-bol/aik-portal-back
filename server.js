// Get our dependencies
var express = require('express');
var app = express();
//var mysql = require("mysql");
//var connection = mysql.createConnection({
//  host     : process.env.DB_HOST || 'mysql-test.cxrpknmq0hfi.us-west-2.rds.amazonaws.com',
//  user     : process.env.DB_USER || 'applicationuser',
//  password : process.env.DB_PASS || 'applicationuser',
//  database : process.env.DB_NAME || 'movie_db'
//});

//connection.connect();

//function getMovies(callback) {    
//        connection.query("SELECT * FROM movie_db.movies",
//            function (err, rows) {
//                callback(err, rows); 
//            }
//        );    
//}

//Testing endpoint
app.get('/', function(req, res){
  var response = [{response : 'hello'}, {code : '200'}]
  res.json(response);
})

// Implement the movies API endpoint
app.get('/buycars', function(req, res){
  var vehicles = [
    {title : 'Xerato', release: '2020', score: 8, price: '80.000.000', description : 'Modern Car 1.6CC'},    
    {title : 'Pikanto', release : '2020', score: 6, price: '40.000.000', description : 'Modern Car 1.0CC'},
    {title : 'Rio Zedan', release: '2016', score: 9, price: '30.000.000', description : 'Modern Car 2.0CC'},
    {title : 'Zoluto', release: '2016', score: 9, price: '20.000.000', description : 'Modern Car 3.0CC'},
    {title : 'Stringer', release : '2015', score: 7, price: '10.000.000', description: 'Modern Car 3.0CC'},
    {title : 'Ant-Man', release: '2015', score: 8, price: '70.000.000', description : 'Modern Car 1.0CC'},
    {title : 'Rio Jatchbash', release : '2014', score: 10, price: '50.000.000', description : 'Modern Car 1.0CC'},
  ]

  res.json(vehicles);
})

app.get('/comerciales', function(req, res) {
 var comercial = [
    {titulo: 'Misión - AIK', imagen:'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png' , texto: '', autor: 'Leonardo Zambrano'},
    {titulo: 'Visión - AIK', imagen:'Vacìo', texto: 'Algo', autor: 'Alejandra Ramos'},
    {titulo: 'Políticas de Calidad - AIK', imagen: '', texto: '', autor:'Juan Bolaños'}
  ]
//    getMovies(function (err, moviesResult){
 res.json(comercial);
    });
//});

// Implement the reviewers API endpoint
app.get('/vehicles', function(req, res){
  var vehicles = [
    {name : 'Xerato', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/co/es/images/shoppingtool/Cerato-Showroom.png'},
    {name: 'Pikanto', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/co/es/images/showroom/PicantoNew/kia-co-picanto-ja.png'},
    {name: 'Rio zedan', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_rio_sc_4dr_17my.png'},
    {name: 'Zoluto', description : 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_ab_19my.png'},
    {name: 'Stringer', description: 'Modern Car 1.6CC', avatar: 'https://www.kia.com/content/dam/kwcms/co/es/images/showroom/stinger/kia-stinger.png'},
    {name: 'Ant-man', description: 'Modern Car 1.6CC', avatar : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4b/Luis%27_Van_%28Quantum_Tunnel%29.png/revision/latest/scale-to-width-down/310?cb=20181002134025'},
    {name: 'Rioc Jatchbash', description : 'Modern Car 1.6CC', avatar :'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png'}
  ];

  res.json(vehicles);
})

// Implement the publications API endpoint
app.get('/support', function(req, res){
  var support = [
    {name : 'Mechanics Appointments', avatar: 'glyphicon-eye-open'},
    {name : 'Post-sale service', avatar: 'glyphicon-fire'},
    {name : 'Guarantee', avatar: 'glyphicon-time'},
    {name : 'Online manual', avatar: 'glyphicon-record'},
    {name : 'New AIK', avatar: 'glyphicon-heart-empty'},
    {name : 'safety campaigns', avatar : 'glyphicon-globe'}
  ];

  res.json(support);
})

// Implement the pending reviews API endpoint
app.get('/experience', function(req, res){
  var experience = [
    {title : 'Misión - AIK', description: 'Dar las mejores soluciones en cuanto a servicio postventa y comercializaciòn de vehìculos en el sector de transporte'},
    {title : 'Visión - AIK', description: 'Ser el concesionario nùmero uno en ventas y en servicio postventas del paìs'},
    {title : 'Políticas de Calidad - AIK', description: 'Estamos comprometidos con los sistemas de gestión de calidad, medio ambiente, seguridad y salud en el trabajo; reconociendo la importancia del capital humano y asegurando el cumplimiento de los requisitos aplicables'},
    {title : 'Noticias - AIK', description: 'Leonardo Zambrano, Alejandra Ramos, Juan Bolaños'}
  ]
  res.json(experience);
})
console.log("server listening through port: "+process.env.PORT);
// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT || 3000);
module.exports = app;
