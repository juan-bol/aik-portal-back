// Get our dependencies
var express = require('express');
var app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'db-instance-brz.cw49gtamvwvu.us-west-2.rds.amazonaws.com',
  user     : process.env.DB_USER || 'automatizacionbrz',
  password : process.env.DB_PASS || 'password',
  database : process.env.DB_NAME || 'dbbrz',
  port     : process.env.DB_PORT || '3306'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
  //Table to buy a car
  var buycars = "CREATE TABLE buycars (title VARCHAR(255), year VARCHAR(255), score VARCHAR(255), price VARCHAR(255), description VARCHAR(255))";
  connection.query(buycars, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var insertbuyacar = "INSERT INTO buycars (title, year, score, price, description) VALUES ?";
  var values = [
    ['Xerato', '2020', '8', '80.000.000', 'Modern Car 1.6CC'],
    ['Pikanto', '2020', '6', '40.000.000', 'Modern Car 1.0CC'],
    ['Rio Zedan', '2016', '9', '30.000.000', 'Modern Car 2.0CC'],
    ['Zoluto', '2016', '9', '20.000.000', 'Modern Car 3.0CC'],
    ['Stringer', '2015', '7', '10.000.000', 'Modern Car 3.0CC'],
    ['Ant-Man', '2015', '8', '70.000.000', 'Modern Car 1.0CC'],
    ['Rio Jatchbash', '2014', '10', '50.000.000', 'Modern Car 1.0CC']
  ];
  connection.query(insertbuyacar, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //Table to show cars
  var vehicles = "CREATE TABLE vehicles (name VARCHAR(255), description VARCHAR(255), avatar VARCHAR(1000))";
  connection.query(vehicles, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var insertvehicles = "INSERT INTO vehicles (name, description, avatar) VALUES ?";
  var valuesvehicles = [
    ['Xerato', 'Modern Car 1.6CC', 'https://www.kia.com/content/dam/kwcms/co/es/images/shoppingtool/Cerato-Showroom.png'],
    ['Pikanto', 'Modern Car 1.0CC', 'https://www.kia.com/content/dam/kwcms/co/es/images/showroom/PicantoNew/kia-co-picanto-ja.png'],
    ['Rio Zedan', 'Modern Car 2.0CC', 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_rio_sc_4dr_17my.png'],
    ['Zoluto', 'Modern Car 3.0CC', 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_ab_19my.png'],
    ['Stringer', 'Modern Car 3.0CC', 'https://www.kia.com/content/dam/kwcms/co/es/images/showroom/stinger/kia-stinger.png'],
    ['Ant-Man', 'Modern Car 1.0CC', 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4b/Luis%27_Van_%28Quantum_Tunnel%29.png/revision/latest/scale-to-width-down/310?cb=20181002134025'],
    ['Rio Jatchbash', 'Modern Car 1.0CC', 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png']
  ];
  connection.query(insertvehicles, [valuesvehicles], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //Table to support
  var support = "CREATE TABLE support (name VARCHAR(255), avatar VARCHAR(1000))";
  connection.query(support, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var insertsupport = "INSERT INTO support (name, avatar) VALUES ?";
  var valuessupport = [
    ['Mechanics Appointments', 'glyphicon-eye-open'],
    ['Post-sale service', 'glyphicon-fire'],
    ['Guarantee', 'glyphicon-time'],
    ['Online manual', 'glyphicon-record'],
    ['New AIK', 'glyphicon-heart-empty'],
    ['safety campaigns', 'glyphicon-globe']
  ];
  connection.query(insertsupport, [valuessupport], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //Table to experience
  var experience = "CREATE TABLE experience (title VARCHAR(255), description VARCHAR(1000))";
  connection.query(experience, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var insertexperience = "INSERT INTO experience (title, description) VALUES ?";
  var valuesexperience = [
    ['Misión - AIK','Dar las mejores soluciones en cuanto a servicio postventa y comercializaciòn de vehìculos en el sector de transporte'],
    ['Visión - AIK', 'Ser el concesionario nùmero uno en ventas y en servicio postventas del paìs'],
    ['Políticas de Calidad - AIK','Estamos comprometidos con los sistemas de gestión de calidad, medio ambiente, seguridad y salud en el trabajo; reconociendo la importancia del capital humano y asegurando el cumplimiento de los requisitos aplicables'],
    ['Noticias - AIK','Leonardo Zambrano, Alejandra Ramos, Juan Bolaños']
  ];
  connection.query(insertexperience, [valuesexperience], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //Table to commercial
  var comerciales = "CREATE TABLE comerciales (titulo VARCHAR(255), imagen VARCHAR(1000), texto VARCHAR(255), autor VARCHAR(255))";
  connection.query(comerciales, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var insertcomerciales = "INSERT INTO comerciales (titulo, imagen, texto, autor) VALUES ?";
  var valuescomerciales = [
    ['Misión - AIK', 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png' , '', 'Leonardo Zambrano'],
    ['Visión - AIK', 'Vacìo', 'Algo',  'Alejandra Ramos'],
    ['Políticas de Calidad - AIK', '', '', 'Juan Bolaños']
  ];
  connection.query(insertcomerciales, [valuescomerciales], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

});

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

// Implement buy cars
app.get('/buycars', function(req, res){
  connection.query('SELECT * FROM buycars', (err, vehicles) => {
    if(err)throw err;
  
  res.json(vehicles);

});    
});

// Implement vehicles
app.get('/vehicles', function(req, res){
  connection.query('SELECT * FROM vehicles', (err, vehicles) => {
    if(err)throw err;
  
  res.json(vehicles);

});    
});


// Implement to support
app.get('/support', function(req, res){
  connection.query('SELECT * FROM support', (err, support) => {
    if(err)throw err;
  
  res.json(support);
});    
});

// Implement to experience
app.get('/experience', function(req, res){
  connection.query('SELECT * FROM experience', (err, experience) => {
    if(err)throw err;
  
  res.json(experience);
});    
});

app.get('/comerciales', function(req, res) {
  connection.query('SELECT * FROM experience', (err, comerciales) => {
    if(err)throw err;
  
  res.json(comerciales);
});    
});

console.log("server listening through port: "+process.env.PORT);
// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT || 3000);
module.exports = app;
