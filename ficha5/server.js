const { response } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function readFile(path) {
  var fileContent = fs.readFileSync(path, "utf-8");
  return fileContent;
}

function writeFile(path,data){
  fs.writeFileSync(path,data);
}

console.log(readFile('./persons.json'));



app.get('/', (req, res) => {
  res.send('ola');
});


app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = personsObject["person" + id];

  if (person == undefined) {
    res.send("this id does not exist!");
  }
  else {
    res.send(person);
  }
  
});


app.post('/users', function (req, res) {
  var person = req.body;


  var size = Object.keys(personsObject).length;
  size++;
  var str = 'person';
  var personId = str + size;

  person.id = size;

  personsObject[personId] = person;

  writeFile("./persons.json", JSON.stringify(personsObject));

  res.send(personsObject);
})
var personsString = readFile('./persons.json');
var personsObject = JSON.parse(personsString);





app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var personFromBody = req.body;
  var person = personsObject["person" + id];

  if (person == undefined) {
    res.send("this id does not exist!");
  }
  else {
    personFromBody.id = parseInt(id);
    var person = personsObject["person" + id] = personFromBody;
    writeFile("./persons.json", JSON.stringify(personsObject));
    res.send(personFromBody);
  }
})




app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = personsObject["person" + id];

  if (person == undefined) {
    res.send("this id does not exist!");
  }
  else {
    delete personsObject["person" + id];
    writeFile("./persons.json", JSON.stringify(personsObject));
    res.send("this id " + id + " was deleted");
  }

})  





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})