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

## Show Data

```javascript
db.collection.find()
```

