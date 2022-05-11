const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


var server = app.listen(8081, function(){
    var host = server.address().address;
    var port =server.address().port;

    console.log("example app listening at http://%s%s", host, port);
});


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'backend'
});

app.get("/persons", function(req, res){
    connection.query("select * from persons",function(err, rows, fields){
        res.send(rows)
    })
});

app.get("/persons/:id", function(req, res){
    var id = req.params.id
    connection.query("select * from persons where id = ?",[id],function(err, rows, fields){
        res.send(rows)
    })
});

app.post("/persons", function(req, res){
    var person = req.body;
    connection.query("insert into persons set ?",[person],function(err, rows, fields){
        res.send("person inserted with id: " + rows.insertId)
    })
});

app.delete("/persons", function(req, res){
    var id = req.body.id;
    connection.query("select * from persons where id = ?",[id],function(err, rows, fields){
        res.send(rows)
    })
})


app.get("/persons/:age/:profession", function(req, res){
    var age = req.params.age;
    var aprefession = req.params.profession;
    connection.query("select * from persons where id = ?",[id],function(err, rows, fields){
        res.send(rows)
    })
})

app.put("/persons/:age/:profession", function(req, res){
    var id = req.params.id;
    var person = req.body;

    connection.query("select * from persons where id = ?",[id],function(err, rows, fields){
        res.send(rows)
    })
})