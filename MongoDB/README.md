# Learn MongoDB

## Why Use a Database?

- It can handle a large amount of data more efficiently and easily
- Easy insertion, querying, and updating of data
- Generally offers some security features and control over access to data
- Generally scales well

## SQL vs noSQL

- SQL = structural query language database
	- Everything conforms to certain rules defined by the developer, usually organised in a table format
	- MySQL, Postgres, SQLite, Oracle, Microsoft SQL
- noSQL = no structural query language database
	- No predefined rules by the developer, store all info in a database
	- Without using some sort of table format or SQL
	- MongoDB, CounchDB, Neo4j, Cassandra, Redist

## Why MongoDB?

- Goes very well with JavaScript
- Common for MERN and MEAN stack
- Easy to understand (whilst hard to master)

## How to Make a Database

```javascript
use databaseName
```

- This creates and switches to the new db, some data has to be stored for the db to show up in the Mongo shell

## BSON

- Basically, binary JSON with some differences
- Good for saving storage and improving speed
- Has more data type than JSON i.e. Date

## Insert Data

```javascript
// inserts only one object
db.collection.insertOne({element1: "X", element2: "Y"})
// inserts multiple objects
db.collection.insert([{element1: "X", element2: "Y"}, {element1: "X", element2: "Y"}])
```

## Find Data

```javascript
db.collection.find() // finds all documents in the collection
db.collection.findOne() // shows the first result that matches the arguements
db.collection.find({property: something}) // shows all results that fit the arguements
// for nested properties, use property.subprop
```

## Update Data

```javascript
// update the first thing that matches the criteria
db.collection.updateOne({criteria: x}, {$set: {whatToChange: y}})
// update all the items that match the criteria
// shows the match count and amount of items updated
db.collection.updateMany({criteria:x}, {$set: {whatToChange: y}})
// special syntax that set the property to current date
db.collection.updateOne({criteris:x}, {$currentDate: {lastChanged: true}})
```

## Delete Data

```javascript
db.collection.deleteOne({criteria: x}) // delete the first item that matches criteria
db.collection.deleteMany({criteria: x}) // delete all that matches criteria
db.collection.deleteMany({}) // delete everything in the collection
```

## Query Operators

### Comparison

- $gt - greater than
- $lt - less than
- $in: ['criteria1', 'criteria2'] - search based on the items defined in the array
- $nin: ['criteria1', 'criteria2'] - search based on the items NOT defined in the array



# Mongoose

## Quick Start

```javascript
// basic quick start
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("CONNECTION OPEN")
    })
    .catch(err =>{
        console.log("ERROR")
        console.log(err)
    });
```

## Creating Schema

```javaScript
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
```

## Saving

```javascript
// individual entries
Movie.save()
// multiple entries by insert method
Movie.insertMany([
  { movie1 },
  { movie2 },
])
```

## Find

```javascript
// find all data that matches the criteria
Movie.find({rating: 'PG'}).then(data => console.log(data))
Movie.findById(6006e3755e1d894a1a966ad4)
```

## Update

```javascript
// update and shows how many items are updated, data not shown
Movie.updateOne({title: 'Harry Potter'}, {year: 2021}).then(res => console.log(res))
Movie.updateMany({title: {$in: ['Harry Potter', 'DasBoat']}}, {score: 10}).then(res => console.log(res))
// update and shows the new data
Movie.findOneAndUpdate({title: 'Harry Potte'}, {score: 10}, {new: true}).then(m => console.log(m))
```

## Delete

```javascript
Movie.remove({title: 'Harry Potter'}).then(msg => console.log(msg))
Movie.deleteOne({title: 'Harry Potter'}).then(msg => console.log(msg))
// delete and show deleted documents
Movie.findOneAndDelete({title: 'Harry Potter'}).then(m => console.log(m))
```

